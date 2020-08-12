import React from 'react';
import Transaction from '../components/Transaction';
import TransactionUtils from '../api/TransactionUtils';
import TransactionAPI from '../api/TransactionAPI';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: TransactionAPI.getTransactions(),
      isHidden: true
    };

    this.handleAddTransaction = this.handleAddTransaction.bind(this);
  }

  handleAddTransaction() {
    this.toggleHidden();
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <section className="account">
        {TransactionUtils.calculateIncome(this.state.transactions)} - {TransactionUtils.calculateExpenses(this.state.transactions)} = {TransactionUtils.calculateTotal(this.state.transactions)}
        <button onClick={this.handleAddTransaction}>Add Transaction</button>
        {!this.state.isHidden && <Transaction />}
        {this.state.transactions
          //.sort((a,b) => b.date - a.date)
          .map(transaction => 
            <Transaction
              key={transaction.id}
              data={transaction} />
        )}
      </section>
    );
  }
}

export default Account;