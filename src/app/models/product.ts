import {Color} from './color';
import {Size} from './size';
import {Category} from './category';

export class Product {

    public productId:number;
    public sku:number;
    public productName:string;
    public metaTitle:string;
    public description:string;
    public modelNo:string;
    public unitPrice:number;
    public size:Size;
    public color:Color;
    public discount:number;
    public unitWeight:number;
    public onOrder:number;
    public stockQuantity:number;
    public isProductAvailable:boolean;
    public isDiscountAvailable:boolean;
    public createDate:Date;
    public pictureId:number;
    public ranking:number;
    public note:string;
    public category:Category;

    constructor( productId:number,sku:number, productName:string, metaTitle:string,
     description:string, modelNo:string, unitPrice:number, size:Size, color:Color,
     discount:number, unitWeight:number, onOrder:number, stockQuantity:number,
     isProductAvailable:boolean, isDiscountAvailable:boolean, createDate:Date, pictureId:number,
     ranking:number, note:string,category:Category){

        this.productId = productId;
        this.sku = sku;
        this.productName = productName;
        this.metaTitle = metaTitle;
        this.description = description;
        this.modelNo = modelNo;
        this.unitPrice = unitPrice;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.unitWeight = unitWeight;
        this.onOrder = onOrder;
        this.stockQuantity = stockQuantity;
        this.isProductAvailable = isProductAvailable;
        this.isDiscountAvailable = isDiscountAvailable;
        this.createDate = createDate;
        this.pictureId = pictureId;
        this.ranking = ranking;
        this.note = note;
        this.category = category;
     }


}
