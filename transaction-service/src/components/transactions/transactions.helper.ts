import {validate} from "class-validator";
import {CreateCardDto, CreateTransactionDTO} from "./dto";

export const createTransactionCriticism = async (transaction: CreateTransactionDTO): Promise<any[]> => {
    try {
        let card = new CreateCardDto(transaction.card);
        let errors = await validate(transaction);
        if (errors.length) return errors;
        errors = await validate(card);
        if (errors.length) return errors;
        return []
    } catch (e) {
        throw "something go wrong";
    }
};
