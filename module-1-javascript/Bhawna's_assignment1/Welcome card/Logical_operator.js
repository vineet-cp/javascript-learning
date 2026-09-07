//Logical Operators
//Q1: check who can DeviceOrientationEvent, a person whose age is 25 and has a license can drive
const prompt = require("prompt-sync")();
let  age = prompt("Enter your age:");
let hasLicense = prompt("Do you have a license? ");

if (age >=25 && hasLicense){
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}
// Take a number from the user,if the number is divisible by 2 and 3 , will consider this number as valid number otherwise invalid number, print valid or invalid based on that//

let mynum = Number(prompt("Enter Number"))


if(mynum % 2 == 0 && mynum % 3 == 0)
{
    console.log("valid Number")
}
else
{
    console.log("invalid Number")
}