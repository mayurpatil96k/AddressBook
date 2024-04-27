"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./contact");
const createContact_1 = __importDefault(require("./createContact"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
(function () {
    console.log("Welcome to Address Book Program");
})();
const AddressBook = new Set();
AddressBook.add((0, createContact_1.default)());
for (const contact of AddressBook) {
    if (contact instanceof contact_1.Contact) {
        console.log(contact.fName);
    }
}
function editContact(name) {
    console.log("Searching Contact...");
    AddressBook.forEach((element) => {
        if (element instanceof contact_1.Contact) {
            if ((element.fName = name)) {
                console.log("Contact found...");
                console.log("Enter all details of person once again.");
                const address = prompt("Enter your Address ");
                element.changeAddress(address);
                const city = prompt("Enter your city ");
                element.changeCity(city);
                const state = prompt("Enter your state ");
                element.changeState(state);
                const zip = prompt("Enter your zip ");
                element.changeZip(zip);
                const pNumber = prompt("Enter your phone number ");
                element.changePhone(pNumber);
                const email = prompt("Enter your email ");
                element.changeEmail(email);
                element.changeCity("");
            }
        }
    });
}
// editContact("mayur");  Editing contact
function deleteContact(fname, lName) {
    console.log("Searching Record for name " + fname + " " + lName);
    AddressBook.forEach(element => {
        if (element instanceof contact_1.Contact) {
            if (element.fName == fname && element.lName == lName) {
                AddressBook.delete(element);
                console.log("contact deleted...");
            }
        }
    });
    console.log("Contact not found...");
}
deleteContact("Mayur", "Patil");
console.log(AddressBook);
