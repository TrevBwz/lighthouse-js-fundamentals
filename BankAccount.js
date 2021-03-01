let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function (amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
            return savingsAccount.balance
        }
    },
    withdraw: function (amount) {
        let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
            return savingsAccount.balance
        }
    },
   
printAccountSummary: function() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    }
};

//to call it up savings account
console.log(savingsAccount.printAccountSummary());

// To call other stuff
savingsAccount.deposit(50);
savingsAccount.withdraw(175);
