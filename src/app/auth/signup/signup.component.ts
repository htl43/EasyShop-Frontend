import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/';
import { fromPromise } from 'rxjs/internal-compatibility';
import { AuthService } from '../auth.service';
import { Contact } from '../contact.model';
import { User } from '../user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;

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
    this.authService.registerUser(newUser).subscribe(
      (data: User) => {
        this.user = data;
        console.log("data"+data);
        return this.authService.registerSuccessfully();
      }
    );
    
    
  }

}
