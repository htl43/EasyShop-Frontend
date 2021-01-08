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

  }

  onSubmit(form: NgForm) {
    let password =  form.value.password1;
    let cfpassword = form.value.password2;
    if(password!==cfpassword) {
      this.msg = "Password and Confirm password not match";
    } else {
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
      let newUser = new User(form.value.username, password, contact);
      this.authService.registerUser(newUser).subscribe((resp: User) => {
          console.log(resp);
          this.color="green";
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
