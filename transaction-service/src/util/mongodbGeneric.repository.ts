import Db from "../config/mongodb";
import {objectIDParser} from "./mongodb.helper";


class MongodbGenericRepository {
    protected collectionName: string = "";

    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    async listAll(filter = {}) {
        try {
            const db = await Db.get();
            return await db.collection(this.collectionName).find(filter).toArray();
        } catch (e) {
            throw e;
        }
    };

    async findById(parameters) {
        try {
            const params = await objectIDParser(parameters);
            const db = await Db.get();
            return db.collection(this.collectionName).findOne(params);
        } catch (e) {
            throw e;
        }
    };
}

export default MongodbGenericRepository;
