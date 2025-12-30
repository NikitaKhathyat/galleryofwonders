import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';
  errorMessage = '';


  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  
login() {
  if (!this.username || !this.password) {
    this.errorMessage = 'Email and password are required';
    return;
  }

  this.authService.login(this.username, this.password).subscribe({
    next: (res: any) => {
      // store JWT in localStorage
      localStorage.setItem('token', res.token);
      localStorage.setItem('email', res.email); // optional
      alert('Login successful');
      this.router.navigate(['/home']);
    },
    error: () => {
      this.errorMessage = 'Invalid email or password';
    }
  });
}


}
