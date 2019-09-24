import Db from '../../config/mongodb';
import {objectIDParser} from '../../util/mongodb.helper';
import MongodbGenericRepository from "../../util/mongodbGeneric.repository";

export class TransactionsRepository extends MongodbGenericRepository {
    private collectionFinancial: string = "financials";

    constructor() {
        super("transactions");
    }

    async register(transaction, financial) {
        try {
            const db = await Db.get();
            const session = await Db.getSession();
            await session.withTransaction(async () => {
                await db.collection(this.collectionName).insertOne(transaction);
                await db.collection(this.collectionFinancial).insertOne(financial);
            });
            return `the transaction ${JSON.stringify(transaction, null, 2)} and financial :${JSON.stringify(financial, null, 2)}  was inserted on database `;
        } catch (e) {
            throw e;
        }
    };
}

