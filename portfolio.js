//TASK 2 - Create the portfolio module

const {assetsList} = require (',/assetsList');

//create function to calculate the total value 
function calculatePortfolioValue()  {
    return assetsList.reduce((total, asset) => (total + asset.price * asset.quantity), 0);
}

//create function to calculate the percentage for each
function getPortfolioAllocation() {
    const totalSum = calculatePortfolioValue();
    return assetsList.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalSum ) * 100
    }));
}

//export the functions using export mehtod
module.exports = {calculatePortfolioValue, getPortfolioAllocation};