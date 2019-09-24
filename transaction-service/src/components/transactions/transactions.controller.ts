import {Request, Response} from "express";
import * as TransactionService from './transactions.service';
import {createTransactionCriticism} from './transactions.helper';
import {CreateTransactionDTO} from "./dto";

export const createTransaction = async (req: Request, res: Response) => {
    let transaction = new CreateTransactionDTO(req.body);
    try {
        const errors = await createTransactionCriticism(transaction);
        if (errors.length) return res.status(400).send(errors);
        const result = await TransactionService.createTransaction(transaction);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(500).send("something go wrong");
    }
};

export const listTransactions = async (req: Request, res: Response) => {
    try {
        const filter = req.query;
        const result = await TransactionService.listAllTransactions(filter);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(400).send(e);
    }
};

export const findTransaction = async (req: Request, res: Response) => {
    const {_id} = req.params;
    const result = await TransactionService.findTransactionById(_id);
    return res.send(result);
};

