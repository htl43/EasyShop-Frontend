import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { AuthGuath } from './auth/auth.guard';
import { CellphoneComponent } from './welcome/category/cellphone/cellphone.component';
import { TiviComponent } from './welcome/category/tivi/tivi.component';


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'training', component: TrainingComponent, canActivate: [AuthGuath] },
    { path: 'cellphone', component: CellphoneComponent },
    { path: 'tv', component: TiviComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuath]
})
export class AppRoutingModule { }