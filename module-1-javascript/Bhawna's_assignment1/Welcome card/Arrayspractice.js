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
