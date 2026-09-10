
// celcius to fahrenheit conversion
let celcius = 25;
let fahrenheit = (celcius * 9/5) + 32;
console.log(fahrenheit);
console.log ("=========================================")


// Calculating marks with percentage
let maths = 80;
let science = 72;
let english = 75;

let totalMarks= maths + science + english;
let percentage = (totalMarks / 300) * 100;
console.log("Total marks = " + totalMarks);
console.log("Percentage = " + percentage + "%");
if (percentage >= 75 && maths >= 60 && science >= 60 && english >= 60 ) {
    console.log("Scholarship Eligible");
}
else if (percentage >= 40){
    
console.log("Passed but No Scholarship");
   }
else
{
    console.log ("Failed");
}
console.log("===========================================");



// Calculate discount and shipping
let amount = 6500;
let isPremium = true;
let discount = 0;
let shipping = 0;
if (amount >=5000 && isPremium){
   discount = amount*20/100;
  
}
else if (amount >= 5000 || isPremium){
    discount = amount*10/100;
    
}
else
{
   discount = 0;
}
let priceAfterDiscount = amount - discount;
if (priceAfterDiscount > 5000) {
    shipping = 0;
} else {
    shipping = 200;
}
let finalAmount = priceAfterDiscount + shipping;
console.log("Discount amount = " + discount);
console.log("Shipping charge = " + shipping);
console.log("Final payable amount = " + finalAmount);
console.log("====================================");


// Calculate electricity bill
let unit = 180;
let rate;

if (unit <= 100){
    rate = 5;
}
else if (unit <=200){
    rate = 7;
}
else {
    rate = 10;
}
let bill =  unit * rate;
if (bill > 1500){
    bill = bill + (bill * 10/100);
}
console.log("final bill = Rs. "+ bill)
console.log("===========================================")

//Loan Eligibility
let salary = 45000;
let creditScore  = 720;
let existingEMI = 12000;

if (salary <=30000 && creditScore >= 700 && existingEMI < salary * 0.4) {
    console.log("Loan Eligible");
}
else {
    console.log("Loan Not Eligible");
}
console.log("====End of Loan Eligibility Check====");

//Cab fare calculator
let distance = 18;
let isNight = true;
let totalFare;

if (distance <= 5) {
    totalFare = 50;
}
else {
    totalFare = 50 + (distance - 5) * 12;
}

if (isNight && totalFare > 150) {
    totalFare += totalFare * 0.20;
}

console.log("Final fare = Rs. " + totalFare);

//#8. Restaurant Bill and Free Dessert
let billAmount = 2400;
let memberOfPeople = 4;
let isMember = false;
let restaurantDiscount = 0;

if (billAmount > 2000  && isMember == true) {
 discount = billAmount*20/100
}

else if
(billAmount <= 2000){
discount = billAmount*10/100
}
 else {
    restaurantDiscount = 0;
 }
 
 