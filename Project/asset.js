//TASK 1 - Create the Asset Module:

//creating the array of assets
export const assets = [
    {id: 1089, name: "Nestle India", type: "stock", price: 200, quantity: 120},
    {id: 1569, name: "Tesla Inc.", type: "stock", price: 550, quantity: 50},
    {id: 6, name: "Corporate Bond XYZ", type: "bond", price: 1020, quantity: 20},
    {id: 8, name: "Municipal Bond ABC", type: "bond", price: 1100, quantity: 15},
    {id: 2, name: "Amazon.com Inc.", type: "stock", price: 3200, quantity: 30},
]

//create function to get assets details
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

//exporting the assets array and getAssestById function 
module.exports = {assets, getAssetById}