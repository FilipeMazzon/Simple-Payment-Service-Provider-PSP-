import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import dB from './config/mongodb';
// getting routes
dB.get();
const {TransactionRoute, FinancialRoute} = require('./factories/Routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// setting routes
app.use('/transactions', TransactionRoute);
app.use('/financials', FinancialRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`connect to port:${PORT}`)
});
