export class Category {

    public categoryId:number;
    public categoryName:string;
    public description:string;
    public pictureId:number;
    public isActive:boolean;

    constructor( categoryId:number,categoryName:string,description:string,pictureId:number,isActive:boolean){

        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.pictureId =pictureId;
        this.isActive = isActive
    }
}
