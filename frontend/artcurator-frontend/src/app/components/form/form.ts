import { CommonModule } from '@angular/common';
import { jwtDecode } from 'jwt-decode'; 
import { Component } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WonderService } from '../../services/wonder';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  wonderForm: FormGroup;
  selectedTags: string[] = [];
  selectedFile!: File;
  

  allTags = [
    'Ancient', 'Modern', 'Natural', 'Architectural',
    'Cultural', 'Historical', 'Religious', 'Motivational',
    'Sports', 'Sketch', 'Dark', 'Anime',
    'Art', 'Animal', 'Cricket', 'Scenery'
  ];

  constructor(private fb: FormBuilder,
              private wonderService: WonderService,
              private http: HttpClient
  ) {
    this.wonderForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  toggleTag(tag: string) {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags.push(tag);
    }
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  onFileChange(event: any) {
  const file = event.target.files[0];

  if (file.size > 10 * 1024 * 1024) {
    alert('File size must be under 10MB');
    return;
  }

  this.selectedFile = file;
}

  uploadImage(file: File) {
  const formData = new FormData();
  formData.append('file', file);

  return this.http.post(
    'http://localhost:8080/api/files/upload',
    formData,
    { responseType: 'text' }
  );
}


 submit() {
  console.log('Submitting form with values:', this.wonderForm.value);
  if (this.wonderForm.invalid || !this.selectedFile) return;
  const token = localStorage.getItem('token');
  // const storedUser = localStorage.getItem('user');
let userID = '';

// if (storedUser) {
//   try {
//     const token = JSON.parse(storedUser).token;

//     const decoded: any = jwtDecode(token);
//     userID = decoded.sub; // 👈 userId comes from JWT
//     console.log('Decoded userId:', userID);

//   } catch (e) {
//     console.error('Token decode failed', e);
//   }
// }

if (token) {
    try {
      const decoded: any = jwtDecode(token);
      userID = decoded.sub;
      console.log('Decoded userId:', userID);
    } catch (e) {
      console.error('Token decode failed', e);
    }
  }
  
if (!userID) {
  alert('User not logged in');
  return;
}

// const user = localStorage.getItem('user');
// let userID = '';
// if(user){
//   try{
//     userID = JSON.parse(user).id;
//   }catch(e){
//     console.error('Error parsing user from localStorage', e);
//   }
// }
// if(!userID){
//   alert('User not logged in');
//   return;
// }
  this.uploadImage(this.selectedFile).subscribe({
    next: (filename: string) => {
      const payload = {
  name: this.wonderForm.value.name,
  description: this.wonderForm.value.description,
  tag: this.selectedTags,
  image: filename,
  userId: userID  // ⬅️ ONLY ID, NOT object
};


      this.wonderService.createWonder(payload).subscribe({
  next: () => {
    alert('Wonder created!');

    // Reset reactive form
    this.wonderForm.reset();

    // Clear tags
    this.selectedTags = [];

    // Clear file
    this.selectedFile = undefined as any;

    // Optional: reset file input visually
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  },
  error: err => console.error(err)
});

    },
    error: err => console.error('Image upload failed', err)
  });
}


}
