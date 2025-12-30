import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { WonderList } from './components/wonder-list/wonder-list';
import { WonderCard } from './components/wonder-card/wonder-card';
import { Profile } from './components/profile/profile';
import { Form } from './components/form/form';
import { Register } from './components/register/register';

import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path:'', component:Register },
    { path:'register', component: Register },
    { path:'login', component: Login },
    { path:'home', component: WonderList, canActivate: [AuthGuard] },
    { path:'profile', component: Profile, canActivate: [AuthGuard] },
    { path:'add-wonder', component: Form, canActivate: [AuthGuard] }
];

