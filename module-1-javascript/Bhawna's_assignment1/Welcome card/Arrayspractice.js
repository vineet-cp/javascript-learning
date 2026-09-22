// let numbers = [10,20,30,40]
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// // print every element multiplied by 2
// for(let i = 0;i<numbers.length;i++){
//     console.log(numbers[i]*2);
// }

// // for..of

// let fruits = ["Apple","Mango","Banana","Kiwi"]

// for (let x of fruits){
//     console.log(x)
// }

// forEach()
let numbers2 = [10,20,30];

// numbers2.forEach(function(num){
//     console.log(num);
// });
// // callback(10),callback(20), callback(30)

// numbers2.forEach(num => {
//     console.log(num);
// });

//Important forEach() parameters : 
// the callback can receive : 
// array.forEach(function(value,index,array))


numbers2.forEach(function(num,index,numbers2){
    console.log(index,num,numbers2.length);
});


let numbers3 = [1,2,3,4,5,6,7,8,9,10];
let doubled = numbers3.map(function(num){
    return num*2;

});
console.log(doubled);


//Salary increment scenario using map()
let salaries = [30000,40000,50000,60000];
let incrementedSalaries = salaries.map(function(salary){
    return salary + (salary*0.1);
});
console.log(incrementedSalaries);

//Student names in array  and print them in uppercase using map()
let students = ["alex","john","sophia"];
let uppercaseStudents = students.map(function(name){
    return name.toUpperCase();
});
console.log(uppercaseStudents);

//Basic Arrays methods practice

let vegetables = ["Carrot","Potato","Tomato","Onion"];
    vegetables.push("Cabbage");
    console.log(vegetables);

    vegetables.pop();
    console.log(vegetables);

    vegetables.unshift("Spinach");
    console.log(vegetables);

    vegetables.shift();
    console.log(vegetables);

    console.log(vegetables[0]);
    console.log(vegetables[vegetables.length-1]);
    console.log(vegetables.length);


let marks = [90,80,70,60,50];
let subjects = ["Maths","Science","English","History","Geography"];

subjects[5] = "Computer Science";
console.log(subjects);

marks[3] = 65;
console.log(marks);




//Filter method practice
let ages = [12,17,20,25,30,15,18];
let adults = ages.filter(function(age){
    return age >= 18;
});
console.log(adults);


//Filter method practice
let marks2 = [34,67,30,22,49,91]
let passmarks = marks2.filter(function(mark){
    return mark >= 40;
});
console.log(passmarks);

//find method practice
let numbers4 = [10,20,30,40,50];        
let foundNumber = numbers4.find(function(num){
    return num === 30;
});
console.log(foundNumber);   



//Find all products that are in stock using filter() method
let products = [
    {name:"Laptop", price:50000, inStock:true},
    {name:"Mobile", price:20000, inStock:false},
    {name:"Tablet", price:30000, inStock:true},
    {name:"Headphones", price:2000, inStock:false}
];
let inStockProducts = products.filter(function(x){
    return x.inStock === true;
});
console.log(inStockProducts);

//Create an array containing only products names using map() method
let productNames = products.map(function(x){
    return x.name;
});
console.log(productNames);

// Find the first product costing more than 10000 using find() method
let expensiveProduct = products.find(function(x){
    return x.price > 10000;
});
console.log(expensiveProduct);

// find the sum of all the products using reduce() method
let totalPrice = products.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.price;
}, 0);
console.log(totalPrice);

let total  =  products.reduce(function(sum,products){
    return sum + products.price;},0);               


//Consider only those products in stock and give 20% discount  to each and calculates total amount that customer needs to pay using filter, map and reduce() method
let totalAmount = products.filter(function(x){
    return x.inStock === true; 
}).map(function(product){
    return product.price - product.price*0.2;
}).reduce(function(total, price){
    return total + price;
}, 0);
console.log(totalAmount);


