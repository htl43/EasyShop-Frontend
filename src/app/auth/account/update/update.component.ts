import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Contact } from '../../authModel/contact.model';
import { User } from '../../authModel/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  user: User;
  msg: any;
  color="red";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  onSubmit(form: NgForm) {
    
    let password =  form.value.password1;
    let cfpassword = form.value.password2;
    if(password!==cfpassword) {
      this.msg = "Password and Confirm password not match";
    } else {
      let newUser = this.user;
      if(password!==null) {
        newUser.password = password;
        console.log("New User Password=" + newUser.password);
      } else {
        console.log("old Password=" + newUser.password)
      }
      if(form.value.firstname) {
        newUser.userContact.firstname = form.value.firstname;
      }
      if(form.value.lastname) {
        newUser.userContact.lastname = form.value.lastname;
      }
      if(form.value.email) {
        newUser.userContact.email = form.value.email;
      }
      if( form.value.phone) {
        newUser.userContact.phone =  form.value.phone;
      }
      if(form.value.address1) {
        newUser.userContact.address1 = form.value.address1;
      }
      if(form.value.address2) {
        newUser.userContact.address2 = form.value.address2;
      }
      if(form.value.city) {
        newUser.userContact.city = form.value.city;
      }
      if(form.value.state) {
        newUser.userContact.state = form.value.state;
      }
      if(form.value.zipcode) {
        newUser.userContact.zipcode= form.value.zipcode;
      }
      if(form.value.country) {
        newUser.userContact.country = form.value.country;
      }
      console.log("Sending Update User=" + newUser);
      this.authService.updateUser(newUser).subscribe((resp: User) => {
          console.log("User Update get back=" + resp);
          this.authService.setUser(resp);
          this.authService.updateSuccessfully();
      },
        (err: any) => {
          this.msg= "Sorry, can't update account!";
        }
      );
    }
    
  }
}
