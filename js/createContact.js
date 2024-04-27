"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const contact_1 = require("./contact");
function createContact() {
    const prompt = (0, prompt_sync_1.default)();
    const fName = prompt("Enter your First Name ");
    const lName = prompt("Enter your Last Name ");
    const address = prompt("Enter your Address ");
    const city = prompt("Enter your city ");
    const state = prompt("Enter your state ");
    const zip = prompt("Enter your zip ");
    const pNumber = prompt("Enter your phone number ");
    const email = prompt("Enter your email ");
    console.log("Creating Contact...");
    const contactperson = new contact_1.Contact(fName, lName, address, city, state, zip, pNumber, email);
    console.log("Contact Created...");
    // console.log(contactperson)
    return contactperson;
}
exports.default = createContact;
