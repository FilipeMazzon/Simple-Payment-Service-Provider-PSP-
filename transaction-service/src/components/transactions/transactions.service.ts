import {CreateTransactionDTO} from "./dto";
import {TransactionsRepository} from './transactions.repository';
import {createFinancials} from "../financials/financials.service";

export const createTransaction = async (transaction: CreateTransactionDTO) => {
    try {
        transaction.card.number = transaction.card.number.substr(12, 4);
        const financial = await createFinancials(transaction);
        const transactionsRepository = new TransactionsRepository();
        return await transactionsRepository.register(transaction, financial);
    } catch (e) {
        throw e;
    }
};

export const listAllTransactions = async (filter = {}) => {
    const transactionsRepository = new TransactionsRepository();
    return transactionsRepository.listAll(filter);
};
export const findTransactionById = async (id: string) => {
    const transactionsRepository = new TransactionsRepository();
    return transactionsRepository.findById(id);
};
