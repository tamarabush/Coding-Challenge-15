//TASK 2 - Create the portfolio module

import { assets } from "./asset.js";

//create function to calculate the total value 
export function calculatePortfolioValue()  {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

//create function to calculate the percentage for each
export function getPortfolioAllocation() {
    const totalSum = calculatePortfolioValue();
    //using map method 
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalSum ) * 100
    }));
}