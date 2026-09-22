//Create an object for an employee with name, salary and company with company name and location as nested object. Print the employee details in the following format:

let employee = {
    name: "John smith",
    salary: 50000,
    company: {
        name: "ABC Corp",
        location: "New York"
    }
};

console.log(employee.name);
console.log("Salary: " + employee.salary);
console.log(employee.company["name"]);
console.log(employee.company["location"]);


// create an obeject account with holder anme, balance , account type and add method to show balance deposit amount withdrawl amount. 
let account = {
    holderName: "John Doe",
    balance: 10000,
    accountType: "Savings",
   
    
    showBalance: function() {
        console.log("Balance: " + this.balance);
    },
    depositAmount: function(amount) {
        this.balance += amount;
        console.log("Amount deposited: " + amount);
    },
    withdrawlAmount: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Amount withdrawn: " + amount);
        } else {
            console.log("Insufficient balance");
        }
       
    }
}
    console.log("Account Holder: " + account.holderName);
    console.log("Account Type: " + account.accountType);
    account.showBalance();
    account.depositAmount(5000);
    account.showBalance();
    account.withdrawlAmount(3000);
    account.showBalance();



