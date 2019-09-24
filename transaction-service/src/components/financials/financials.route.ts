import * as  express from 'express';

const router = express.Router();
import {listFinancials, findFinancials, findBalanceByClient} from './financials.controller';


/* GET home page. */
router.get('/', (req, res) => {
    listFinancials(req, res);
});
router.post('/client', (req, res) => {
    findBalanceByClient(req, res);
})
router.get('/:_id', (req, res) => {
    findFinancials(req, res);
});

export default router;
