import {mock_transactions} from './MOCK_DATA';

class TransactionAPI {
  constructor() {

  }

  getTransactions(accountId) {
    return mock_transactions;
  }

  addTransaction(transaction) {
    
  }

  updateTransaction(transaction) {
    
  }
}

const instance = new TransactionAPI();
Object.freeze(instance);

export default instance;