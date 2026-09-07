// print even number from 1 to 20 - For Loop
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
// // print odd number from 1 to 20
// for (i=1; i<=20; i++){
//     if (i%2 === 1){
//         console.log(i);
//     }
// }

// Find the sum of 1 to 20
// let sum = 0;
// let count = 0;
// for (let i = 1; i <= 20; i++) {
//     sum += i;
//     count += 1;
// }
// console.log("Sum of numbers from 1 to 20 = " + sum);

// // calculate the average
// let average = sum / count;
// console.log("Average of numbers from 1 to 20 = " + average);

// //write multiplication table of 5
// let number = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log("number " +  "X"  +   i  + " = " + (number * i));
// }


//While Loop

// let i = 1;
// while (i <= 5) {
    
//         console.log(i);
//         i++;
// }

// //Print numbers from 10 to 1 using while loop
// let j = 10;
// while (j >= 1) {
//     console.log(j);
//     j--;
// }

// //Print numbers from 1 to 100 which are divisible by 3 and 6 but not by 4
// let k = 1;
// while (k <= 100) {
//     if (k % 3 === 0 && k % 6 === 0 && k % 4 !== 0) {
//         console.log(k);
//     }
//     k++;
// }


//4321. sum of digits, count number of digits, Reverse the digits
let num = 4321;
let sum = 0;
let count = 0;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    sum += digit;
    count++;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Sum of digits = " + sum);
console.log("Number of digits = " + count);
console.log("Reversed number = " + reverse);