import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuath } from './auth/auth.guard';
import {CellphoneComponent} from './products/cellphone/cellphone.component';

import { TVComponent } from './products/tv/tv.component';
import { ComputerComponent } from './products/computer/computer.component';
import { AccountComponent } from './auth/account/account.component';
import { CartComponent } from './auth/account/cart/cart.component';
import { ProfileComponent } from './auth/account/profile/profile.component';


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuath] },
    { path: 'account/profile', component: ProfileComponent, canActivate: [AuthGuath] },
    { path: 'cellphone', component: CellphoneComponent },
    { path: 'tv', component: TVComponent },
    { path: 'computer', component: ComputerComponent },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuath] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuath]
})
export class AppRoutingModule { }