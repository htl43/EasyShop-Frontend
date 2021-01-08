import { Component, OnInit } from '@angular/core';
import { User } from '../../authModel/user.model';
import { AuthService } from '../../auth.service';
import { Contact } from '../../authModel/contact.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: number;
  contact: Contact
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let user = this.authService.getUser();
    if(user) {
      this.userId = user.id;
      this.contact = user.userContact;
    }  
  }

}
