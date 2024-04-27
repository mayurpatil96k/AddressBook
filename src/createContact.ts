import promptSync from 'prompt-sync'
import { Contact } from './contact';
function createContact(){
const prompt = promptSync();

const fName   = prompt("Enter your First Name ")
const lName = prompt("Enter your Last Name ")
const address = prompt("Enter your Address ")
const city  = prompt("Enter your city ")
const state  = prompt("Enter your state ")
const zip = prompt("Enter your zip ")
const pNumber = prompt("Enter your phone number ")
const email = prompt("Enter your email ")

console.log("Creating Contact...");

const contactperson = new Contact(fName,lName,address,city,state,(zip as unknown)as number,(pNumber as unknown)as number,email);

console.log("Contact Created...");
// console.log(contactperson)

return contactperson;
}

export default createContact;