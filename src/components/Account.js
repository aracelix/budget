import React from 'react';
import Transaction from '../components/Transaction';
import TransactionUtils from '../api/TransactionUtils';
import TransactionAPI from '../api/TransactionAPI';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: TransactionAPI.getTransactions(),
      transactionIsEditing: {},
      accountIsEditing: false
    };

    this.handleAddTransaction = this.handleAddTransaction.bind(this);
    this.handleUpdateTransaction = this.handleUpdateTransaction.bind(this);
    this.handleOnRowClick = this.handleOnRowClick.bind(this);
  }

  handleAddTransaction(e) {
    this.toggleHidden();
  }

  handleUpdateTransaction(transaction) {
    console.log(transaction);
  }

  handleOnRowClick(e) {
    if(!this.state.accountIsEditing) {
      e.target.parentElement.classList.toggle("isEditing");
      this.setState({accountIsEditing: true});
    }
  }

  render() {
    return (
      <section className="account">
        {TransactionUtils.calculateIncome(this.state.transactions)} - {TransactionUtils.calculateExpenses(this.state.transactions)} = {TransactionUtils.calculateTotal(this.state.transactions)}
        <table>
          <thead>
            <tr>
              {this.props.headers.map((header, index) =>
                <th className={header} key={index}>{header}</th>
              )}
            </tr>
          </thead>
          <tbody>
          {this.state.transactions.map(transaction => 
              <tr key={transaction.id} onClick={this.handleOnRowClick}>
                {this.props.headers.map((header, index) =>
                  <td key={index}>{transaction[header]}</td>
                )}
              </tr>
          )}
          </tbody>
        </table>

        
      </section>
    );
  }
}

export default Account;