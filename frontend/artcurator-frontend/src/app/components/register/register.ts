import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
  standalone: true,
})
export class Register {

   name = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  goToLogin() {
  this.router.navigate(['/login']);
}


 register() {
  alert('STEP 1: click reached');

  const payload = {
    name: this.name,
    email: this.email,
    password: this.password
  };

  alert('STEP 2: payload created');

  this.authService.register(payload).subscribe({
    next: (res) => {
      alert('STEP 3: backend success');
      console.log(res);
      this.router.navigate(['/login']);
    },
    error: (err) => {
      alert('STEP 4: backend error');
      console.error(err);
      this.errorMessage = 'Registration failed';
    }
  });
}



}
