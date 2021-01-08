import { User } from './authModel/user.model';
import { AuthData } from './authModel/auth-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfirmComponent } from './logout-confirm.component';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from '../models/cart';


@Injectable()
export class AuthService {
    private user: User;
    regMessage="";
    updateMessae="";
    removeMesg="";
    authChange = new Subject<boolean>();
    baseURL="http://localhost:8080/EasyShop";
    options = {
        headers: new HttpHeaders({
            'Content-Type' : 'application/json'
        }),
        withCredentials: true
    };

    constructor(private router: Router, private dialog: MatDialog, private http: HttpClient) {}

    registerUser(user: User): Observable<User> {
        let regURL = this.baseURL + "/register";
        return this.http.post<User>(regURL, user, this.options) as Observable<User>;
    }

    login(authData: AuthData): Observable<User> {
        let logURL = this.baseURL + "/login";
        return this.http.post<any>(logURL, authData, this.options) as Observable<User>;
    }

    updateUser(newUser: User): Observable<User> {
        let upURL = this.baseURL + "/update";
        return this.http.post<User>(upURL, newUser, this.options) as Observable<User>;
    }

    logout(): void {
        const dialogRef = this.dialog.open(LogoutConfirmComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.user = null;
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
          });
    }

    getUser(): User {
        return this.user;
    }

    setUser(user: User) {
        this.user = user;
        console.log(user);
        this.loginSuccessfully();
    }

    isAuth(): Boolean {
        return this.user != null;
    }

    private loginSuccessfully(): void {
        this.authChange.next(true);
        this.router.navigate(['/account']);
    }

    registerSuccessfully(): void {
        this.regMessage = "Register account successful";
        this.router.navigate(['/login']);
    }

    updateSuccessfully() {
        this.updateMessae = "Update account successful";
        this.router.navigate(['/account/profile']);
    }

    RemoveItem(carts: Cart[]): Observable<User> {
        this.user.userCartItem = carts;
        let reURL = this.baseURL + "/remove";
        return this.http.post<User>(reURL, this.user, this.options) as Observable<User>;
    }
}