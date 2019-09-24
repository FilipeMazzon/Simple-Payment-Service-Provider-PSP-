import Db from '../../config/mongodb';
import MongodbGenericRepository from '../../util/mongodbGeneric.repository';

export class FinancialsRepository extends MongodbGenericRepository {
    constructor() {
        super("financials");
    }

    async findBalanceByClient(client) {
        try {
            const db = await Db.get();
            const match = {
                $match: {
                    client
                }
            };
            const groupBy = {
                $group: {
                    _id: "$status",
                    balance: {$sum: "$amount"}
                }
            };
            return db.collection(this.collectionName).aggregate([
                match,
                groupBy
            ]).toArray();
        } catch (e) {
            throw e;
        }
    };
}
