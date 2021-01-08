import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBuildModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { LogoutConfirmComponent } from './auth/logout-confirm.component';
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
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
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
  providers: [AuthService,],
  bootstrap: [AppComponent],
  entryComponents: [LogoutConfirmComponent]
})
export class AppModule { }
