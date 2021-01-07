
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/';
import { AuthService } from '../auth.service';
import { Contact } from '../authModel/contact.model';
import { User } from '../authModel/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  error: any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    let contact = new Contact(
      form.value.firstname,
      form.value.lastname,
      form.value.email,
      form.value.phone,
      form.value.address1,
      form.value.address2,
      form.value.city,
      form.value.state,
      form.value.zipcode,
      form.value.country);
    let newUser = new User(form.value.username, form.value.password, contact);
    this.authService.registerUser(newUser).subscribe((resp: User) => {
        console.log(resp);
        this.authService.registerSuccessfully();
    },
      (err: any) => {
        this.error = "Can't create account";
      }
    );
  }

}
