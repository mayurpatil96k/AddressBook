import { Contact } from "./contact";
import createContact from "./createContact";
import PromptSync from "prompt-sync";

const prompt = PromptSync();
(function () {
  console.log("Welcome to Address Book Program");
})();

const AddressBook = new Set();
AddressBook.add(createContact());

for (const contact of AddressBook) {
  if (contact instanceof Contact) {
    console.log(contact.fName);
  }
}

function editContact(name: String) {
  console.log("Searching Contact...");
  AddressBook.forEach((element) => {
    if (element instanceof Contact) {
      if ((element.fName = name)) {
        console.log("Contact found...");
        console.log("Enter all details of person once again.");
        const address = prompt("Enter your Address ");
        element.changeAddress(address as string);
        const city = prompt("Enter your city ");
        element.changeCity(city as string);
        const state = prompt("Enter your state ");
        element.changeState(state as string);
        const zip = prompt("Enter your zip ");
        element.changeZip((zip as unknown)as number)
        const pNumber = prompt("Enter your phone number ");
        element.changePhone(pNumber as unknown as number);
        const email = prompt("Enter your email ");
        element.changeEmail(email as string);
        element.changeCity("");
      }
    }
  });
}

// editContact("mayur");  Editing contact

function deleteContact(fname: String,lName: string){
    console.log("Searching Record for name "+fname+" "+lName)
    AddressBook.forEach(element=>{
        if(element instanceof Contact){
            if(element.fName == fname && element.lName==lName){
                AddressBook.delete(element);
                console.log("contact deleted...")
            }
        }
    })
    console.log("Contact not found...")
}

// deleteContact("Mayur","Patil");   deleting contact...
console.log(AddressBook);