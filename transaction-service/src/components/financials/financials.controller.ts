import {Request, Response} from "express";
import * as FinancialsService from './financials.service';

export const listFinancials = async (req: Request, res: Response) => {
    try {
        const filter = req.query;
        const result = await FinancialsService.listAllFinancials(filter);
        return res.status(200).send(result);
    } catch (e) {
        return res.status(400).send(e);
    }
};

export const findFinancials = async (req: Request, res: Response) => {
    const {_id} = req.params;
    const result = await FinancialsService.findFinancialsById(_id);
    return res.send(result);
};
export const findBalanceByClient = async (req: Request, res: Response) => {
    const {client} = req.params;
    const result = await FinancialsService.findBalanceByClient(client);
    return res.send(result);
};
