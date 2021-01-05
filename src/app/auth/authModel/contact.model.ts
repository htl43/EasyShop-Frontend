export class Contact {
    firstname:string;
    lastname:string;
    email:string;
    phone:string;
    address1:string;
    address2:string;
    city:string;
    state:string;
    zipcode:string;
    country:string;

    constructor(firstname:string,lastname:string,email:string,phone:string,address1:string,address2:string,
        city:string,state:string,zipcode:string,country:string) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.phone = phone;
            this.address1 = address1;
            this.address2 = address2;
            this.city = city;
            this.state = state;
            this.zipcode = zipcode;
            this.country = country;
        }
}