import {ObjectID} from 'mongodb';

export const objectIDParser = async (parameters) => {
    let query = {};
    if (typeof parameters === "string") {
        query = {"_id": ObjectID(parameters)}
    } else {
        query = {"_id": ObjectID(parameters._id)};
    }
    return query;
};
