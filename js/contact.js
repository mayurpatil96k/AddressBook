"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
class Contact {
    constructor(fname, lname, address, city, state, zip, pnumber, email) {
        this.fName = fname;
        this.lName = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.pNumber = pnumber;
        this.email = email;
    }
}
exports.Contact = Contact;
const contact = new Contact("Mayur", "Patil", "21 B Chirai Mata Colony Sakri", "Sakri", "Maharashtra", 424304, 7263075543, "mayur1792001@gmail.com");
