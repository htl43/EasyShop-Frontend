import { User } from "../auth/authModel/user.model";
import { Product } from "./product";


export class Cart {

    cartId:number;
    finalPrice:number;
    dateAdded:Date;
    User:User;
    Product:Product

    constructor(finalPrice:number, dateAdded:Date, User:User, Product:Product){
        this.finalPrice = finalPrice;
        this.dateAdded = dateAdded;
        this.User = User;
        this.Product = Product;
    }


        
}