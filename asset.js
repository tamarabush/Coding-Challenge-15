// TASK 1 - Create the Asset Module:

// Creating the array of assets
export const assets = [
    {id: 9, name: "Nestle India", type: "stock", price: 200, quantity: 120},
    {id: 1, name: "Tesla Inc.", type: "stock", price: 550, quantity: 50},
    {id: 6, name: "Corporate Bond XYZ", type: "bond", price: 1020, quantity: 20},
    {id: 8, name: "Municipal Bond ABC", type: "bond", price: 1100, quantity: 15},
    {id: 2, name: "Amazon.com Inc.", type: "stock", price: 3200, quantity: 30},
];

// Create function to get asset details
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}
