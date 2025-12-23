// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-post',
//   imports: [],
//   templateUrl: './add-post.html',
//   styleUrl: './add-post.css',
// })
// export class AddPost {

//   pin = {
//     title: '',
//     description: '',
//     image: null
//   };

//   imagePreview: string | ArrayBuffer | null = null;

//   onImageSelected(event: Event) {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       this.pin.image = file;

//       const reader = new FileReader();
//       reader.onload = () => {
//         this.imagePreview = reader.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   savePin() {
//     if (!this.pin.title || !this.pin.image) return;

//     // Normally, you would send this.pin to a backend API
//     console.log('Pin saved:', this.pin);

//     // Reset form after saving
//     this.pin = { title: '', description: '', image: null };
//     this.imagePreview = null;
//   }
// }
