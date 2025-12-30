import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {

   activeTab: 'created' | 'saved' = 'created';
   savedWonders: any[] = [];
   user:any = null;
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
  if (!storedUser) return;
  this.user = JSON.parse(storedUser);

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

}
