const prompt = require("prompt-sync")();
let addressBook = {};
let contacts = {};//to store multiple contacs
const FIRST_NAME_PATTERN1 = /^[A-Z]{1}[a-z]{2,}$/;
const LAST_NAME_PATTERN1 = /^[A-Z]{1}[a-z]{2,}$/;
const FourChar_pattern = /^[A-Za-z]{4,}/;
const EMAIL_PATTERN1 = /[a-z0-9_+-]*(.[a-z0-9_+-]*?)@[a-z0-9]*.[a-z]*[a-z]*?$/;
const PHONE_PATTERN1 = /^[0-9]{10}$/;
const zip_patter = /^[0-9]{4,}$/;

function addContact() {
    console.log("------------------------------------------\n");
    let firstName = prompt("enter  first name ");
    addressBook["firstName"] = firstName;
    while (!FIRST_NAME_PATTERN1.test(addressBook["firstName"])) {
        console.log("invalid input,type again");
        addressBook["firstName"] = prompt("enter first name ");
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
    console.log("entered details " + JSON.stringify(addressBook));
    contacts[firstName] = addressBook;
}

function showContacts() {
    console.log("------------------------------------------\n");
    console.log("contacts \n" + JSON.stringify(contacts));
}

function editContact() {
    console.log("------------------------------------------\n");
    let name = prompt("enter first name to edit");
    delete contacts[name];
    addContact();
}
let flag = true;
while (flag) {
    // console.log("existing contacts --\n"+contacts);



    console.log("1.add new contact\n2 edit contact\n3.exit\n4.view contacts");
    let choice = prompt();
    if (choice == 1) {
        // showContacts();
        addContact();
        flag = true;
    }
    else if (choice == 2) {
        // showContacts();
        editContact();
        flag = true;
    }
    else if (choice == 3) {
        showContacts();
        // editContact();
        flag = true;
    }
    else
        flag = false;

}



