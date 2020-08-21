import React from 'react';
import Transaction from '../components/Transaction';
import TransactionUtils from '../api/TransactionUtils';
import TransactionAPI from '../api/TransactionAPI';
import Table, { tableDataType } from './Table';

const headerDefinition = [
  {"name": "Date", "key": "date", "type": tableDataType.DATE },
  {"name": "Payee", "key": "payee", "type": tableDataType.TEXT },
  {"name": "Category", "key": "category", "type": tableDataType.TEXT },
  {"name": "Amount", "key": "amount", "type": tableDataType.TEXT },
  {"name": "Memo", "key": "memo", "type": tableDataType.TEXT },
  {"name": "Cleared", "key": "isCleared", "type": tableDataType.TEXT }
];

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: TransactionAPI.getTransactions(this.props.id)
    };

    this.handleUpdateTransaction = this.handleUpdateTransaction.bind(this);
  }

  handleUpdateTransaction(transaction) {
    //check if this is a new transaction or not
    //if empty id: add
    //else: update
    console.log(transaction);
  }

  render() {
    return (
      <section className="account">
        {this.props.name}
        <Table 
          rows={this.state.transactions} 
          columns={headerDefinition} 
          onUpdate={this.handleUpdateTransaction} />
      </section>
    );
  }
}

export default Account;