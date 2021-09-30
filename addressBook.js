const prompt = require("prompt-sync")();
let addressBook = {};
let contacts=[];//to store multiple contacs
const FIRST_NAME_PATTERN1 = /^[A-Z]{1}[a-z]{2,}$/;
const LAST_NAME_PATTERN1 = /^[A-Z]{1}[a-z]{2,}$/;
const FourChar_pattern = /^[A-Za-z]{4,}/;
const EMAIL_PATTERN1 = /[a-z0-9_+-]*(.[a-z0-9_+-]*?)@[a-z0-9]*.[a-z]*[a-z]*?$/;
const PHONE_PATTERN1 = /^[0-9]{10}$/;
const zip_patter = /^[0-9]{4,}$/;

let flag = true;
while (flag) {
    addressBook["firstName"] = prompt("enter ur first name ");
    while (!FIRST_NAME_PATTERN1.test(addressBook["firstName"])) {
        console.log("invalid input,type again");
        addressBook["firstName"] = prompt("enter ur first name ");
    }
    addressBook["lastName"] = prompt("enter ur lastName ");
    while (!LAST_NAME_PATTERN1.test(addressBook["lastName"])) {
        console.log("invalid input,type again");
        addressBook["lastName"] = prompt("enter ur lastName ");
    }
    addressBook["address"] = prompt("enter ur address ");
    while (!FourChar_pattern.test(addressBook["address"])) {
        console.log("invalid input,type again");
        addressBook["address"] = prompt("enter ur address ");
    }
    addressBook["city"] = prompt("enter ur city name ");
    while (!FourChar_pattern.test(addressBook["city"])) {
        console.log("invalid input,type again");
        addressBook["city"] = prompt("enter ur city name ");
    }
    addressBook["state"] = prompt("enter ur state name ");
    while (!FourChar_pattern.test(addressBook["state"])) {
        console.log("invalid input,type again");
        addressBook["state"] = prompt("enter ur state name ");;
    }
    addressBook["zip"] = prompt("enter ur zip ");
    while (!zip_patter.test(addressBook["zip"])) {
        console.log("invalid input,type again");
        
    }
    addressBook["phoneNumber"] = prompt("enter ur phoneNumber ");
    while (!PHONE_PATTERN1.test(addressBook["phoneNumber"])) {
        console.log("invalid input,type again");
        addressBook["phoneNumber"] = prompt("enter ur phoneNumber ");
    }
    addressBook["email"] = prompt("enter ur email ");
    while (!EMAIL_PATTERN1.test(addressBook["email"])) {
        console.log("invalid input,type again");
        addressBook["email"] = prompt("enter ur email ");
    }
    
    if(prompt("enter Y to add new contact")=='Y')
    {contacts.push(addressBook);
     flag = true;}
     else
     flag=false;
     console.log(contacts);
}