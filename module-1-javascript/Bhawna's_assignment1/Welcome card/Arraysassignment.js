 
 //Question 1 - E-commerce Products
 
 let products = [
{ id: 101, name: "Laptop", category: "Electronics", price: 60000, rating: 4.6, stock: 8 },
{ id: 102, name: "Mouse", category: "Electronics", price: 1200, rating: 3.9, stock: 0 },
{ id: 103, name: "Chair", category: "Furniture", price: 7000, rating: 4.3, stock: 15 },
{ id: 104, name: "Monitor", category: "Electronics", price: 18000, rating: 4.7, stock: 4 },
{ id: 105, name: "Desk", category: "Furniture", price: 12000, rating: 4.1, stock: 6 }
]
//Use filter() to create an array containing only products that are currently in stock.
let instockProducts = products.filter(function(x){
    return x.stock > 0;
});
console.log(instockProducts);

//Use map() to create an array containing only product names.
let productNames = products.map(function(x){
    return x.name;
});
console.log(productNames);

//Use find() to get the product whose id is 104.
let product104 = products.find(function(x){
    return x.id === 104;
});
console.log(product104);

//Use filter() to get all products with a rating of at least 4.2.
let highRatedProducts = products.filter(function(x){
    return x.rating >= 4.2;
});
console.log(highRatedProducts);

//Use map() to create a new array of objects containing name and finalPrice, where 18% GST is added to each price.
let productsWithGST = products.map(function(x){
    return {name: x.name, finalPrice: x.price * 1.18};
});
console.log(productsWithGST);


//Use filter() + map() + reduce() to calculate the total price of all products rated at least 4.2 after applying a 10% discount to each of them.
let allProducts = products.filter(function(x){
    return x.rating >= 4.2;
}).map(function(x){
    return x.price * 0.1; // Apply 10% discount
}).reduce(function(sum, price){
    return sum + price;
}, 0);
console.log(allProducts);


//Question 4 - Food Delivery Orders

let orders = [
{ orderId: 501, customer: "Aman", amount: 850, status: "Delivered", items: 3 },
{ orderId: 502, customer: "Riya", amount: 1200, status: "Pending", items: 5 },
{ orderId: 503, customer: "Karan", amount: 650, status: "Delivered", items: 2 },
{ orderId: 504, customer: "Simran", amount: 2100, status: "Cancelled", items: 6 },
{ orderId: 505, customer: "Aman", amount: 1600, status: "Delivered", items: 4 }
];

//Use filter() to create an array containing only delivered orders.
let deliveredOrders = orders.filter(function(x){
    return x.status === "Delivered";
});
console.log(deliveredOrders);   

// Use map() to create an array containing order IDs only.
let orderIds = orders.map(function(x){
    return x.orderId;
});
console.log(orderIds);

//Use find() to locate order 504.
let order504 = orders.find(function(x){
    return x.orderId === 504;
});
console.log(order504);

//Use filter() to get all orders with an amount greater than 1000.
let highValueOrders = orders.filter(function(x){
    return x.amount > 1000;
});
console.log(highValueOrders);

// Use map() to create a new array containing orderId, customer, and amountAfterTax after adding 5% tax.
let ordersWithTax = orders.map(function(x){
    return {orderId: x.orderId, customer: x.customer, amountAfterTax: x.amount * 1.05};
});
console.log(ordersWithTax);

// Use reduce() to calculate total revenue from only delivered orders.
let totalRevenue = deliveredOrders.reduce(function(sum, order){
    return sum + order.amount;
}, 0);
console.log(totalRevenue);

//Use method chaining to get all order IDs belonging to Aman.
let amanOrderIds = orders.filter(function(x){
    return x.customer === "Aman";
}).map(function(x){
    return x.orderId;
});
console.log(amanOrderIds);

// Use filter() + map() + reduce() to calculate the total amount after a 10% discount for all delivered orders whose original amount is greater than 700.
let totalAmountAfterDiscount = orders.filter(function(x){
    return x.status === "Delivered" && x.amount > 700;
}).map(function(x){
    return x.amount * 0.9; // Apply 10% discount
}).reduce(function(sum, amount){
    return sum + amount;
}, 0);
console.log(totalAmountAfterDiscount);
