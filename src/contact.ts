export class Contact{
    fName: String;
    lName: String;
    address: String;
    city : String;
    state : String;
    zip: Number;
    pNumber: Number;
    email: String;

    constructor(fname: string,lname: string,address: string,city: string,state: string,zip: Number,pnumber: Number,email: string){
        this.fName=fname;
        this.lName=lname;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.pNumber=pnumber;
        this.email=email;
    }
    changeName(name: String){
        this.fName=name
    }
    changelnmae(lname: String){
        this.lName=lname
    }
    changeAddress(add: String){
        this.address=add
    }
    changeState(state: String){
        this.state=state
    }
    changeZip(zip: Number){
        this.zip=zip
    }
    changePhone(phone: number){
        this.pNumber=phone
    }
    changeEmail(email: String){
        this.email=email
    }
    changeCity(city: String){
        this.city=city
    }

}

const contact = new Contact("Mayur","Patil","21 B Chirai Mata Colony Sakri","Sakri","Maharashtra",424304,7263075543,"mayur1792001@gmail.com");
