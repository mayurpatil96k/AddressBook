"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./contact");
const createContact_1 = __importDefault(require("./createContact"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const fs_1 = __importDefault(require("fs"));
const prompt = (0, prompt_sync_1.default)();
(function () {
    console.log("Welcome to Address Book Program");
})();
const AddressBook = new Set();
const System = new Map();
System.set("AddressBook1", AddressBook);
AddressBook.add((0, createContact_1.default)());
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
// deleteContact("Mayur","Patil");   deleting contact...
// console.log(AddressBook);
function search(name) {
    let cnt = 0;
    for (let addbook of System.values()) {
        addbook.forEach((element) => {
            if (element instanceof contact_1.Contact) {
                if (element.city == name || element.state == name) {
                    console.log(cnt + " contact found with matching state and city...");
                    console.log(element);
                    cnt++;
                }
            }
        });
    }
}
// search("sakri"); search the contact by city or state
function getCount(name) {
    let cnt = 0;
    for (let addbook of System.values()) {
        addbook.forEach((element) => {
            if (element instanceof contact_1.Contact) {
                if (element.city == name || element.state == name) {
                    cnt++;
                }
            }
        });
    }
    return cnt;
}
// console.log(getCount("Sakri")); get the count of contacts in specific city
function sort() {
    for (let [key, addressBook] of System) {
        console.log(`Sorting contacts in AddressBook: ${key}`);
        let sortedContacts = Array.from(addressBook);
        sortedContacts.sort((a, b) => a.fName.localeCompare(b.fName));
        System.set(key, new Set(sortedContacts));
    }
}
function sortByParam(param) {
    for (let [key, addressBook] of System) {
        console.log(`Sorting contacts in AddressBook: ${key}`);
        let sortedContacts = Array.from(addressBook);
        sortedContacts.sort((a, b) => {
            switch (param) {
                case 'city':
                    return a.city.localeCompare(b.city);
                case 'state':
                    return a.state.localeCompare(b.state);
                case 'zip':
                    return a.zip - b.zip;
                default:
                    throw new Error('Invalid parameter for sorting.');
            }
        });
        System.set(key, new Set(sortedContacts));
    }
}
// sortByParam("city"); 
// console.log(System); code usage for sort by parameter use case 12
function writeInFile() {
    fs_1.default.writeFileSync("contacts.txt", JSON.stringify(Array.from(AddressBook)));
}
// writeInFile();
// make it correct
function readFile() {
    console.log(fs_1.default.readFileSync("contacts.txt", 'utf8'));
}
readFile();
