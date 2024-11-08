//TASK 4 - Create the Main APPlication:

//impoting functions from the other files
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio';
import { Transaction } from './transaction';

//console log portfolio vale
console.log("Total Portfolio Value: $" + calculatePortfolioValue());
//console log portfolio allocation 
console.log("Portfolio Allocation: ", getPortfolioAllocation());

//create new transaction 

try {
    const transaction1 = new Transaction(1, "buy", 20); 
    const transaction2 = new Transaction(9, "sell", 10);
    const transaction3 = new Transaction(8, "buy", 15);

    //display transaction details
    console.log("Transactions are Completed:");
    console.log(transaction1);
    console.log(transaction2);
    console.log(transaction3);

    console.log("Updated Portfolio Value: $" + calculatePortfolioValue());
} catch (error) {
    console.error(error.message);
}