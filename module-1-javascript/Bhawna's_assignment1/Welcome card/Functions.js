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


// create function which returns the largets number out of three numbers
function largestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
let largest = largestNumber(10, 20, 15);
console.log("Largest number: " + largest);

// pass a number to a function and return +ve , -ve or 0
function checkSign(number) {
    if (number > 0) {
        return "+ve";
    } else if (number < 0) {
        return "-ve";
    } else {
        return "0";
    }
}
let sign = checkSign(-5);
console.log("Sign of the number: " + sign);


//create a function on student result 
function calculatePercentage(math, science, english) {
    let total = math + science + english;
    let percentage = (total / 300) * 100;
    return percentage;
}
function getResult(math, science, english) {
    if (calculatePercentage(math, science, english) >= 75) {
        return "Distinction";
    } else if (calculatePercentage(math, science, english) >= 40) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log("Student 1:", getResult(80, 70, 75));   // Distinction
console.log("Student 2:", getResult(50, 45, 40));   // Pass
console.log("Student 3:", getResult(20, 25, 30));   // Fail

//SALARY AND BONUS SCENARIO
function calculateBonus(salary, rating){
    let bonusPercentage;
    if(rating === 5){
        bonus = salary * 0.2;
    }
    
    else if(rating === 4){
        bonus = salary * 0.1;
    }
    
     else{
      bonus =  0.05;
     }
    return salary + bonus;
     }

function finalSalary(salary, rating){
    let bonus = calculateBonus(salary, rating);
    return salary + bonus;
}
console.log("Emp 1,Final Salary with Bonus: " + finalSalary(70000, 5)); 
console.log("Emp 2,Final Salary with Bonus: " + finalSalary(50000, 4)); 

// Palindrome Using Another Function
function reverseNumber (num){
    function isPalindrome(num) {
        let reversed = 0;
        let original = num;
        while (num > 0) {
            reversed = (reversed * 10) + (num % 10);
            num = Math.floor(num / 10);
        }
        return original === reversed;
    }
    return isPalindrome(num);
}
console.log("Is 1221 a palindrome? " + reverseNumber(1221)); 
console.log("Is 1234 a palindrome? " + reverseNumber(1234));
console.log("Is 7 a palindrome? " + reverseNumber(7));

//Count Digits Using a Function
function countDigits(num) {
    let count = 0;
    while (num > 0){
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log("Count of digits in 12345: " + countDigits(58321));
console.log("Count of digits in 9: " + countDigits(9));
console.log("Count of digits in 987654: " + countDigits(987654));

//11. Login Access Scenario
function canLogin(username, password, isBlocked) {
    if(username === "admin" && password === "password123" && !isBlocked) {
        return "Login successful"
    }
    else{
        return "Access Denied"
    }
}
console.log(canLogin("admin", "password123", false)); 
console.log(canLogin("admin", "password345", false));
console.log(canLogin("user", "password123", false));
console.log(canLogin("admin", "password123", true));

//7. Sum and Reverse Digits with Separate Functions
function sumDigits(num) {
    
    let sum = 0;
    
    while (num > 0) {

        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
function reverseNumber(num) {
        let reversed = 0;
        while (num > 0) {
            reversed = (reversed * 10) + (num% 10);
            num = Math.floor(num / 10);
        }
        return reversed;
    }
console.log("Sum of digits in 58321: " + sumDigits(58321));
console.log("Reverse of 58321: " + reverseNumber(58321));


//square of a number
 let square = function (num) {
    return num * num;
}
console.log("Square of 5: " + square(5));


// Arrow function to decide grade based on marks
let decideGrade = (marks) => {
    if (marks >= 95) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 35) {
        return "D";
    } else {
        return "Failed";
    }
};
console.log("Grade for 95 marks: " + decideGrade(95));
console.log("Grade for 80 marks: " + decideGrade(80));
console.log("Grade for 60 marks: " + decideGrade(60));
console.log("Grade for 50 marks: " + decideGrade(50));
console.log("Grade for 35 marks: " + decideGrade(35));
console.log("Grade for below 35 marks: " + decideGrade("Failed"));


//Callback function for payment processing
function processPayment(amount, successPayment, failedPayment) {
    
    // Simulate payment processing
    if (amount > 0) {
        successPayment();
    } else {
        failedPayment();
    }
}



//create a function using call back to calculate discount on a product price
function tenPercent(price){
 return price * 0.10;
}
function twentyPercent(price){
    return price * 0.20;
}

   function finalPrice(price,discountCallBack){
    let discount = discountCallBack(price);
    return price - discount;
   } 
   console.log(finalPrice(1000,tenPercent));
   console.log(finalPrice(1000,twentyPercent));



//Create a food delivery app calculate the final price based on different discount types using callback function
//Student Discount (price - 10%
//Festival discount -(price - 20%)
//Premium discounts -  price - 30%
function studentDiscount(price){
    return price * 0.10;
}
function festivalDiscount(price){
    return price * 0.20;
}
function premiumDiscount(price){
    return price * 0.30;
}
 function finalPrice(price, discountCallback){
    let discount = discountCallback(price);
    return price - discount;
 }
 console.log("Final Price with Student Discount: " + finalPrice(1000, studentDiscount));
 console.log("Final Price with Festival Discount: " + finalPrice(1000, festivalDiscount));
 console.log("Final Price with Premium Discount: " + finalPrice(1000, premiumDiscount));

 // Create funtion to process a transaction use annonymous call to perform withdrawl
 function transaction(balance,amount,callback){
 return callback (balance, amount);
 }

 let newBalance = transaction(1000, 2500, function(balance, amount){
    return balance - amount;
 }
);
console.log("New Balance after transaction: " + newBalance);

// create a function to calculate bill with 18% tax using annonymous function
function calculateBill(amount, callback){
    return callback(amount);
}
let billAmount = 4000;
let totalBill = calculateBill(billAmount, function(amount) {
    return amount + (amount * 0.18);
});
console.log("Total Bill with Tax: " + totalBill);

// Create a login function by passing two callback functions one for correct passowrd and another for incorrect password by using annonymous function
function login(username, password, Callback1, Callback2) {
    if (username === "admin" && password === "admin123") {
        Callback1();
    } else {
        Callback2();
    }
}
login("admin", "admin193", function() {
    console.log("Login Successful");
}, function() {
    console.log("Login Failed");
}   
);

// create a function that calculates an employee's final monthly salary using a sequence of callback operations.Use anonymous functions for all callbacks. Do not create separate named callback functions. The bonus callback should add 12% to the base salary and return the new amount.
// The tax callback should receive that amount, deduct 8%, and return the result.
// The display callback should receive the final salary and print it
function processSalary(baseSalary, bonusCallback, taxCallback, displayCallback) {
    let salaryWithBonus = bonusCallback(baseSalary);
    let salaryAfterTax = taxCallback(salaryWithBonus);
    displayCallback(salaryAfterTax);


}

 processSalary(
    50000,
    function (baseSalary) {
        return baseSalary + (baseSalary * 0.12); // 12% bonus
    },
    function (amount) {
        return amount - (amount * 0.08); // 8% tax
    },
    function (finalSalary) {
        console.log("Final Salary: " + finalSalary);
    }
);
   



// ...existing code...

function fulfilOrder(order, validateCallback, paymentCallback, dispatchCallback, failureCallback) {
    const isValid = validateCallback(order);

    if (!isValid) {
        return failureCallback(order);
    }

    const transactionMessage = paymentCallback(order.quantity * order.price);
    return dispatchCallback(transactionMessage, order);
}

// Anonymous callbacks only
const validOrder = { item: "Laptop", quantity: 2, price: 1000 };

fulfilOrder(
    validOrder,
    function (order) {
        return order.quantity > 0 && order.price > 0;
    },
    function (amount) {
        return "Payment successful: $" + amount;
    },
    function (transactionMessage, order) {
        console.log(transactionMessage + " | Dispatching " + order.item);
    },
    function (order) {
        console.log("Order failed validation for " + order.item);
    }
);

const invalidOrder = { item: "Mouse", quantity: 0, price: 200 };

fulfilOrder(
    invalidOrder,
    function (order) {
        return order.quantity > 0 && order.price > 0;
    },
    function (amount) {
        return "Payment successful: $" + amount;
    },
    function (transactionMessage, order) {
        console.log(transactionMessage + " | Dispatching " + order.item);
    },
    function (order) {
        console.log("Order failed validation for " + order.item);
    }
);

// ...Order fulfilment sequence...


function fulfilOrder(order, validateCallback, paymentCallback, dispatchCallback, failureCallback) {
    const isValid = validateCallback(order);

    if (!isValid) {
        return failureCallback(order);
    }

    const transactionMessage = paymentCallback(order.quantity * order.price);
    return dispatchCallback(transactionMessage, order);
}

// Anonymous callbacks only
const validOrd = { item: "Laptop", quantity: 2, price: 1000 };

fulfilOrder(
    validOrd,
    function (order) {
        return order.quantity > 0 && order.price > 0;
    },
    function (amount) {
        return "Payment successful: $" + amount;
    },
    function (transactionMessage, order) {
        console.log(transactionMessage + " | Dispatching " + order.item);
    },
    function (order) {
        console.log("Order failed validation for " + order.item);
    }
);

const invalidOrd = { item: "Mouse", quantity: 0, price: 200 };

fulfilOrder(
    invalidOrd,
    function (order) {
        return order.quantity > 0 && order.price > 0;
    },
    function (amount) {
        return "Payment successful: $" + amount;
    },
    function (transactionMessage, order) {
        console.log(transactionMessage + " | Dispatching " + order.item);
    },
    function (order) {
        console.log("Order failed validation for " + order.item);
    }
);

