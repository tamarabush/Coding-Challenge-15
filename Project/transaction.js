//TASK 3 - Create the Transaction Module:

//importing the getAssetById function 
const { getAssetById } = require('./asset');

//defining the transasction class
class Transaction {
    constructor(assetId, type, quantity) {
        const asset = getAssetById(assetId); 

        if (type === "buy") {
            asset.quantity += quantity;
        } else if (type === "sell") {
            if (asset.quantity < quantity) {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }
            asset.quantity -= quantity;
        } else {
            throw new Error("Invalid transaction type");
        }
    }
}

//export the Transaction class
module.exports = { Transaction };