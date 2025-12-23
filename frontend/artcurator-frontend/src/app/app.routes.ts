import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { WonderList } from './components/wonder-list/wonder-list';
import { WonderCard } from './components/wonder-card/wonder-card';
import { Profile } from './components/profile/profile';
import { Form } from './components/form/form';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path:'register',component: Register},
    {path:'login',component: Login},
    {path:"home",component: WonderList},
    {path:"profile",component: Profile},
    {path:"add-wonder",component:Form}

];
