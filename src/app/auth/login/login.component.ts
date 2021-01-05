import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../authModel/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authService.login({
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }).subscribe(
      (data: User) => {
       this.authService.setUser(data);
      },
      (err: any) => {
        this.error = err.error;
        if(this.error) {
          console.log("this error" + JSON.stringify(this.error));
        }     
      }
    );
  }
}
