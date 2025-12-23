import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/navbar';
import { WonderCard } from './components/wonder-card/wonder-card';
import { Wonder } from './models/wonder.model';
import { WonderList } from './components/wonder-list/wonder-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,WonderList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  

}
