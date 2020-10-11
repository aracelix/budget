import express from 'express';
import { addNewTransaction, getTransactions, getTransactionById, updateTransaction, deleteTransaction } from '../controllers/transactionController';

const router = express.Router();

router.get('/', (req, res, next) => {
  //example of middleware
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  next();
}, getTransactions);

router.get('/:transactionId', getTransactionById);

router.post('/', addNewTransaction);

router.put('/:transactionId', updateTransaction);

router.delete('/:transactionId', deleteTransaction);

export default router;