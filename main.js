// TASK 4 - Create the Main Application:

// Importing functions from the other files
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

// Function to display the portfolio details and transactions
function displayPortfolio() {
    // Get the portfolio value and allocation
    const portfolioValue = calculatePortfolioValue();
    const portfolioAllocation = getPortfolioAllocation();

    // Display the portfolio value
    document.getElementById('portfolio-value').innerHTML = `Total Portfolio Value: $${portfolioValue}`;

    // Display the portfolio allocation
    const allocationList = portfolioAllocation.map(allocation => 
        `<li>${allocation.name}: ${allocation.allocation.toFixed(2)}%</li>`
    ).join('');
    document.getElementById('portfolio-allocation').innerHTML = `<ul>${allocationList}</ul>`;
}

// Function to display transaction details
function displayTransactions(transactions) {
    const transactionList = transactions.map(transaction =>
        `<li>Transaction: ${transaction.type} ${transaction.quantity} of asset ID ${transaction.assetId}</li>`
    ).join('');
    document.getElementById('transaction-log').innerHTML = `<ul>${transactionList}</ul>`;
}

// Perform transactions and update the display
try {
    const transactions = [
        new Transaction(1, "buy", 20), 
        new Transaction(9, "sell", 10),
        new Transaction(8, "buy", 15)
    ];

    // Display the transactions and updated portfolio value
    displayTransactions(transactions);
    displayPortfolio();
} catch (error) {
    console.error(error.message);
}
