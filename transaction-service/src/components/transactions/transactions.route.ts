import * as  express from 'express';

const router = express.Router();
import {findTransaction, listTransactions, createTransaction} from './transactions.controller';


/* GET home page. */
router.get('/', (req, res) => {
    listTransactions(req, res);
});
router.get('/:_id', (req, res) => {
    findTransaction(req, res);
});
router.post('/', (req, res) => {
    createTransaction(req, res);
});

export default router;
