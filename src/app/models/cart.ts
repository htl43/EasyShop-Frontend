import { User } from "../auth/authModel/user.model";
import { Product } from "./product";


export class Cart {

    cartId:number;
    finalPrice:number;
    dateAdded:Date;
    Product:Product

    constructor(cartId:number, finalPrice:number, dateAdded:Date, Product:Product){
        this.cartId = cartId;
        this.finalPrice = finalPrice;
        this.dateAdded = dateAdded;
        this.Product = Product;
    }

}