import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  username = '';
  password = '';
  errorMessage = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Login Successful!');
      this.errorMessage = '';
      // later we will redirect to dashboard
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
