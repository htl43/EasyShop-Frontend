import { User } from "../auth/user.model";

export class Cart {

    cartId:number;
    finalPrice:number;
    dateAdded:Date;
    User:User;
    //Product:Product;

    constructor(cartId:number, finalPrice:number, dateAdded:Date, User:User,
        //Product:Product
        ){

    }
        
}