import { mock_transactions } from './mock_transactions';
import { Transaction } from '../types';

class TransactionAPI {
  getAllTransactions(): Record<number, Transaction> {
    return mock_transactions;
  }

  getTransactionsByAccountId(accountId: number): Record<number, Transaction> {
    return mock_transactions;
  }

  addTransaction(transaction: Transaction) {
    
  }

  updateTransaction(id: number, transaction: Transaction) {
    
  }
}

const instance = new TransactionAPI();
Object.freeze(instance);

export default instance;