const prompt=require("prompt-sync")();
let addressBook={};
// {"firstName":,"lastName":,"address":,"city":,"state":,"zip":,"pNumber":,"email":};
let flag=true;
while(flag){
    addressBook["firstName"]=prompt("enter ur first name ");
    addressBook["lastName"]=prompt("enter ur lastName ");
    addressBook["address"]=prompt("enter ur address ");
    addressBook["city"]=prompt("enter ur city name ");
    addressBook["state"]=prompt("enter ur state name ");
    addressBook["zip"]=prompt("enter ur zip ");
    addressBook["phoneNumber"]=prompt("enter ur phoneNumber ");
    addressBook["email"]=prompt("enter ur email ");
    console.log(addressBook);
    flag=false;
}