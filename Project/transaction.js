//TASK 3 - Create the Transaction Module:

//importing the getAssetById function 
import { getAssetById } from './asset';

//defining the transasction class
export class Transaction {
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

