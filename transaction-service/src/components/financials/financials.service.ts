import {FinancialsRepository} from './financials.repository';
import {validate} from "class-validator";
import {CreateTransactionDTO} from "../transactions/dto";
import {Financial} from './index';
import {calculateFee, getStatus, getReceivedDate} from './financials.helper';

export const listAllFinancials = async (filter = {}) => {
    const financialsRepository = new FinancialsRepository();
    return financialsRepository.listAll(filter);
};

export const findFinancialsById = async (id: string) => {
    const financialsRepository = new FinancialsRepository();
    return financialsRepository.findById(id);
};

export const createFinancials = async (transaction: CreateTransactionDTO) => {
    try {
        const financial = new Financial();
        financial.status = await getStatus(transaction.type);
        financial.received_date = await getReceivedDate(transaction.type, transaction.installments);
        financial.amount = await calculateFee(transaction.type, transaction.installments, transaction.value);
        financial.client = transaction.card.holder;
        const errors: any[] = await validate(financial);
        if (errors) Promise.reject(errors);
        return financial;
    } catch (e) {
        throw e;
    }
};
export const findBalanceByClient = async (client: string) => {
    const financialsRepository = new FinancialsRepository();
    const balance = await financialsRepository.findBalanceByClient(client);
    return {
        client,
        ...balance
    }
};
