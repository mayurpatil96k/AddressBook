"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_1 = require("./contact");
const createContact_1 = __importDefault(require("./createContact"));
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
