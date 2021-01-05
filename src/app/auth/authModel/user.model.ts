import { Contact } from "./contact.model";


export class User {
    username: string;
    password: string;
    userContact: Contact;
    
    constructor(username:string, password:string, contact:Contact) {
        this.username = username;
        this.password = password;
        this.userContact = contact;
    }

}