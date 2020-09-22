class TransactionUtils {
  calculateIncome(transactions) {
    if(!transactions) return 0;

    return transactions.reduce((total, transaction) => {
      if(transaction.amount > 0) {
        return total + transaction.amount;
      }
      else {
        return total;
      }
    }, 0);
  }

  calculateExpenses(transactions) {
    if(!transactions) return 0;

    return transactions.reduce((total, transaction) => {
      if(transaction.amount < 0) {
        return total + transaction.amount
      }
      else {
        return total;
      }
    }, 0);
  }

  calculateTotal(transactions) {
    if(!transactions) return 0;

    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  }
}

const instance = new TransactionUtils();
Object.freeze(instance);

export default instance;