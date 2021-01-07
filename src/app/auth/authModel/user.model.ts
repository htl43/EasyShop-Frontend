import { Contact } from "./contact.model";


export class User {
    id: number;
    username: string;
    password: string;
    userContact: Contact;

    
    constructor(username:string, password:string, contact:Contact) {
        this.username = username;
        this.password = password;
        this.userContact = contact;
    }

    setId(id:number) {
        this.id = id;
    }

    getId(): number{
        return this.id;
    }
}