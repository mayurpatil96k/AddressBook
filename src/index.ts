import { Contact } from "./contact";
import createContact from "./createContact";
import PromptSync from "prompt-sync";
import fs from "fs";
import { json } from "stream/consumers";
import { stringify } from "querystring";

const prompt = PromptSync();
(function () {
  console.log("Welcome to Address Book Program");
})();

const AddressBook = new Set();

const System = new Map();
System.set("AddressBook1",AddressBook)


AddressBook.add(createContact());
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
// console.log(AddressBook);


function search(name: string){
    let cnt = 0;
    for(let addbook of System.values()){
        addbook.forEach((element: any) =>{
            if(element instanceof Contact){
            if(element.city==name || element.state==name){
                console.log(cnt+" contact found with matching state and city...")
                console.log(element)
                cnt++;
            }
        }
        })
    }
}

// search("sakri"); search the contact by city or state

function getCount(name: string){
    let cnt = 0;
    for(let addbook of System.values()){
        addbook.forEach((element: any) =>{
            if(element instanceof Contact){
            if(element.city==name || element.state==name){
                cnt++;
            }
        }
        })
    }
    return cnt;
}

// console.log(getCount("Sakri")); get the count of contacts in specific city

function sort() {
  for (let [key, addressBook] of System) {
      console.log(`Sorting contacts in AddressBook: ${key}`);
      let sortedContacts: Contact[] = Array.from(addressBook);
      sortedContacts.sort((a, b) => a.fName.localeCompare(b.fName as string));
      System.set(key, new Set(sortedContacts));
  }
}


function sortByParam(param: string) {
  for (let [key, addressBook] of System) {
      console.log(`Sorting contacts in AddressBook: ${key}`);
      let sortedContacts: Contact[] = Array.from(addressBook);

      sortedContacts.sort((a, b) => {
          switch (param) {
              case 'city':
                  return a.city.localeCompare(b.city as string);
              case 'state':
                  return a.state.localeCompare(b.state as string);
              case 'zip':
                  return (a.zip as number) - (b.zip as number);
              default:
                  throw new Error('Invalid parameter for sorting.');
          }
      });

      System.set(key, new Set(sortedContacts));
  }
}

// sortByParam("city"); 
// console.log(System); code usage for sort by parameter use case 12

function writeInFile(){
  fs.writeFileSync("contacts.txt",JSON.stringify(Array.from(AddressBook)))
}


// writeInFile();
// make it correct

function readFile(){
  console.log(fs.readFileSync("contacts.txt",'utf8'))
}
// readFile();


import { createObjectCsvWriter } from 'csv-writer';

function writeInCsv() {

    const header = [
        { id: 'fName', title: 'First Name' },
        { id: 'lName', title: 'Last Name' },
        { id: 'address', title: 'Address' },
        { id: 'city', title: 'City' },
        { id: 'state', title: 'State' },
        { id: 'zip', title: 'Zip' },
        { id: 'pNumber', title: 'Phone' },
        { id: 'email', title: 'Email' }
    ];


    const data = Array.from(AddressBook).map(contact => ({
      fName: (contact as any).fName,
      lName: (contact as any).lName,
      address: (contact as any).address,
      city: (contact as any).city,
      state: (contact as any).state,
      zip: (contact as any).zip,
      phone: (contact as any).pnumber,
      email: (contact as any).email
  }));
    

    // Create CSV writer
    const csvWriter = createObjectCsvWriter({
        path: 'contacts.csv',
        header: header
    });

    // Write to CSV file
    csvWriter.writeRecords(data)
        .then(() => console.log('CSV file written successfully'))
        .catch((error) => console.error('Error writing CSV file:', error));
}

// writeInCsv();
// Example usage:
// writeInCsv();


function writeInJson(){
  fs.writeFileSync("json.json",JSON.stringify(Array.from(AddressBook)))
}
// writeInJson();

function readOnJson(){
  const data = fs.readFileSync("json.json", 'utf8');
  console.log(JSON.parse(data))
}

// readFile();