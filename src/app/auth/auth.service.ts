import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmComponent } from './logout-confirm.component';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
    private user: User;
    authChange = new Subject<boolean>();
    baseURL="http://localhost:8080/EasyShop";
    httpHeaders =  new HttpHeaders({
            'Content-Type' : 'application/json'
    }); 
    constructor(private router: Router, private dialog: MatDialog, private http: HttpClient) {}

    registerUser(user: User): Observable<User> {
        let regURL = this.baseURL + "/register";
        let options = {
            headers: this.httpHeaders
        }
        return this.http.post<any>(regURL, user) as Observable<User>;
    }

    login(authData: AuthData): void {
        this.loginSuccessfully();
    }

    logout(): void {
        const dialogRef = this.dialog.open(LogoutConfirmComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.user = null;
                this.router.navigate(['/login']);
            }
          });
    }

    getUser(): User {
        return { ...this.user };
    }

    isAuth(): Boolean {
        return this.user != null;
    }

    private loginSuccessfully(): void {
        this.router.navigate(['/training']);
    }

    registerSuccessfully(): void {
        console.log("register successful");
        this.router.navigate(['/login']);
    }
}