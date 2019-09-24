'use strict';
import * as mongo from 'mongodb';

const uri = process.env.MONGO_URI || "mongodb+srv://mazzon:mazzon123456@cluster0-gpvsz.mongodb.net/Users?retryWrites=true";
const dbName = process.env.MONGO_DB_NAME || "psp";

//`mongodb+srv://${user}:${password}@cluster0-6zlfo.mongodb.net/${dbName}?retryWrites=true`;
class Database {
    private db: mongo.MongoClient;
    private client;

    constructor() {
        this.db = null;
        this.client = null;
    }

    get(): Promise<mongo.MongoClient> {
        return new Promise(async (resolve, reject) => {
            try {
                //check if already have the connection;
                if (this.db !== null) {
                    resolve(this.db);
                } else {
                    //if don't have try to connect.
                    this.db = await this.connect();
                    resolve(this.db);
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    async connect(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                //generate the client
                this.client = mongo.MongoClient(uri, {"useNewUrlParser": true, useUnifiedTopology: true});
                //try to connect;
                let _db = await this.client.connect();
                //set dbName, if in you application change 2 dbs
                // please erase this line and do in your models (my GenericDAO will not work)
                _db = _db.db(dbName);
                resolve(_db);
            } catch (e) {
                reject(e);
            }
        });
    }

    async getSession(): Promise<any> {
        return this.client.startSession({
            defaultTransactionOptions: {
                readConcern: {level: 'local'},
                writeConcern: {w: 'majority'},
                readPreference: 'primary'
            }
        });
    }

    disconnect() {
        if (this.db) {
            this.db.close();
        } else {
            return "don't have any connection to close";
        }
    }
}

export default new Database();
