import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBuildModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './training/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { LogoutConfirmComponent } from './auth/logout-confirm.component';
import { ExerciseService } from './training/exercise.service';
import { HttpClientModule } from '@angular/common/http';
import {CellphoneComponent} from './products/cellphone/cellphone.component';
import { TVComponent } from './products/tv/tv.component';
import { ComputerComponent } from './products/computer/computer.component';
import { AccountComponent } from './auth/account/account.component';
import { CartComponent } from './auth/account/cart/cart.component';
import { ProfileComponent } from './auth/account/profile/profile.component';
import { UpdateComponent } from './auth/account/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent,
    LogoutConfirmComponent,
    CellphoneComponent,
    TVComponent,
    ComputerComponent,
    AccountComponent,
    CartComponent,
    ProfileComponent,
    UpdateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialBuildModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, ExerciseService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent, LogoutConfirmComponent]
})
export class AppModule { }
