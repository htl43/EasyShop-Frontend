import { User } from "../auth/authModel/user.model";
import { Product } from "./product";


export class Cart {

    cartId:number;
    finalPrice:number;
    dateAdded:Date;
    esUser:User;
    product:Product

    constructor(finalPrice:number, dateAdded:Date, user:User, product:Product){
        this.finalPrice = finalPrice;
        this.dateAdded = dateAdded;
        this.esUser = user;
        this.product = product;
    }


        
}