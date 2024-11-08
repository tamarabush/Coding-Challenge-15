import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.mjs';
import { Transaction } from './transaction.mjs';

// Function to update the HTML content
function updateHTMLContent() {
    // Display portfolio value
    const portfolioValue = calculatePortfolioValue();
    document.getElementById('portfolio-value').innerHTML = `Total Portfolio Value: $${portfolioValue}`;

    // Display portfolio allocation
    const allocation = getPortfolioAllocation();
    let allocationHtml = '<h2>Portfolio Allocation:</h2><ul>';
    allocation.forEach(asset => {
        allocationHtml += `<li>${asset.name}: ${asset.allocation.toFixed(2)}%</li>`;
    });
    allocationHtml += '</ul>';
    document.getElementById('portfolio-allocation').innerHTML = allocationHtml;

    // Create new transactions and display details
    try {
        const transaction1 = new Transaction(1, "buy", 20); 
        const transaction2 = new Transaction(9, "sell", 10);
        const transaction3 = new Transaction(8, "buy", 15);

        // Display transaction details
        let transactionsHtml = '<h2>Transactions Completed:</h2><ul>';
        transactionsHtml += `<li>${JSON.stringify(transaction1)}</li>`;
        transactionsHtml += `<li>${JSON.stringify(transaction2)}</li>`;
        transactionsHtml += `<li>${JSON.stringify(transaction3)}</li>`;
        transactionsHtml += '</ul>';
        document.getElementById('transaction-details').innerHTML = transactionsHtml;

        // Display updated portfolio value
        const updatedPortfolioValue = calculatePortfolioValue();
        document.getElementById('portfolio-value').innerHTML = `Updated Portfolio Value: $${updatedPortfolioValue}`;
    } catch (error) {
        document.getElementById('transaction-details').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}

// Call the function to update the HTML content
updateHTMLContent();
