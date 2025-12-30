import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  loggedIn = false;

  constructor(private router: Router,
    private authService: Auth,
    private cd: ChangeDetectorRef
  ) {}

ngOnInit() {
  this.loggedIn = this.authService.isLoggedIn();
  this.authService.isLoggedIn$.subscribe(status => {
    this.loggedIn = status;
    this.cd.detectChanges(); // ensure view updates
  });
}
   
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

