// TASK 4 - Create the Main Application:

//importing functions from the other files
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

//function to display the portfolio details and transactions
function displayPortfolio() {
    const portfolioValue = calculatePortfolioValue();
    const portfolioAllocation = getPortfolioAllocation();

    document.getElementById('portfolio-value').innerHTML = `Total Portfolio Value: $${portfolioValue}`;

    //display the portfolio allocation
    const allocationList = portfolioAllocation.map(allocation => 
        `<li>${allocation.name}: ${allocation.allocation.toFixed(2)}%</li>`
    ).join('');
    document.getElementById('portfolio-allocation').innerHTML = `<ul>${allocationList}</ul>`;
}

//function to display transaction details
function displayTransactions(transactions) {
    const transactionList = transactions.map(transaction =>
        `<li>Transaction: ${transaction.type} ${transaction.quantity} of ${transaction.assetName} (ID: ${transaction.assetId})</li>`
    ).join('');
    document.getElementById('transaction-log').innerHTML = `<ul>${transactionList}</ul>`;
}

//perform transactions and update the display
try {
    const transactions = [
        new Transaction(1, "buy", 20), 
        new Transaction(9, "sell", 10),
        new Transaction(8, "buy", 15)
    ];

    //display the transactions and updated portfolio value
    displayTransactions(transactions);
    displayPortfolio();
} catch (error) {
    console.error(error.message);
}
