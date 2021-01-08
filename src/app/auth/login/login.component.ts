import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../authModel/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {
  loginForm: FormGroup;
  mesg: any;
  color="red";

  constructor(private authService: AuthService) {}
  

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
    
  }

  ngOnChanges(): void {
    if(this.authService.regMessage) {
      this.mesg = "Register account successfully";
      this.color="green";
    }
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
          this.mesg = "Can't login account. ";
        } 
    );
  }
}
