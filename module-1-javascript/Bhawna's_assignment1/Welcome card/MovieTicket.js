//Movie ticket price
let age = 16;
let isWeekend = true;
let basePrice = 300;
let discount = 0;

if (age < 12){

    discount = 0.5;

}
else if (age >= 60){

    discount = 0.3;
}
else {
    discount = 0;
}

let finalPrice = basePrice - (basePrice * discount);

if (isWeekend) {
   finalPrice += 50;
}

console.log("Final ticket price = Rs. " + finalPrice);