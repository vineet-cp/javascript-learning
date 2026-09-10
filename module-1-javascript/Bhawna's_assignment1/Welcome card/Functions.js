function  add(a,b){
    return a+b;

}
let result =add (3,4);
console.log(result);


// Multiplication table
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " X " + i + " = " + (number * i));
    }
}

//Count digits
function countDigits(n){
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

let addResult = add(10,20);
let countResult = countDigits(12345);
console.log("Addition Result: " + addResult);
console.log("Count of Digits: " + countResult);
multiplicationTable(7);
multiplicationTable (8);
