import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { Form } from '../form/form';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

   activeTab: 'created' | 'saved' = 'created';
   savedWonders: any[] = [];
   user: any = {};
  createdWonders: any[] = [];

   constructor(private http: HttpClient,private cd: ChangeDetectorRef) {}
    
  //  ngOnInit() {
  //   const storedUser = localStorage.getItem('user');

  //   if (!storedUser) {
  //     console.error('No logged-in user found');
  //     return;
  //   }

  //   this.user = JSON.parse(storedUser);
  //   this.loadCreatedWonders();
  // }
  ngOnInit() {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    this.user = JSON.parse(storedUser);
  } else {
    // fallback user (VERY IMPORTANT)
    this.user = {
      name: 'Guest',
      username: 'guest',
      avatar: ''
    };
  }

  this.loadCreatedWonders();
  // Load saved wonders from localStorage
  const saved = localStorage.getItem('savedWonders');
  if (saved) {
    this.savedWonders = JSON.parse(saved);
  }
}


loadCreatedWonders() {
  this.http.get<any[]>(`http://localhost:8080/api/users/${this.user.id}/wonders`)
    .subscribe({
      next: res => {
        this.createdWonders = res;
        this.cd.detectChanges(); // force Angular to update the view
      },
      error: err => console.error(err)
    });
  }

  getImageUrl(filename: string) {
    return `http://localhost:8080/api/files/${filename}`;
  }
  

  loadSavedWonders() {
  this.http.get<any[]>(
    `http://localhost:8080/api/users/${this.user.id}/bookmarks`
  ).subscribe(res => {
    this.savedWonders = res;
  });
}
 setTab(tab: 'created' | 'saved') {
  this.activeTab = tab;
  if (tab === 'saved') {
    this.loadSavedWonders(); // 🔥 important
  }
}

selectedFile!: File;

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (!file) return;

  this.uploadToCloudinary(file);
}

uploadToCloudinary(file: File) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'my_preset'); //  preset

  this.http.post<any>(
    'https://api.cloudinary.com/v1_1/dpuwqc6vr/image/upload', // cloud name
    formData
  ).subscribe({
    next: (res) => {
      console.log(res);

      this.user.avatar = res.secure_url;

      localStorage.setItem('user', JSON.stringify(this.user));
    },
    error: (err) => console.error(err)
  });
}

}
