import { Cart } from "src/app/models/cart";
import { Contact } from "./contact.model";


export class User {
    id: number;
    username: string;
    password: string;
    userContact: Contact;
    userCartItem: Cart[];

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

    setCartItem(carts:Cart[]) {
        this.userCartItem = carts;
    }

    getCartItem(): Cart[]{
        return this.userCartItem;
    }
}