import React from 'react';
import Field, { FieldType } from './Field';

const allowedFields = ['date', 'payee', 'category', 'memo', 'amount', 'isCleared'];

class Transaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.parseTransactionData(this.props.data)
    };
  }

  parseTransactionData(data) {
    return allowedFields.reduce((transaction, field) => {
      if(data && field in data) {
        transaction[field] = data[field];
      }
      else {
        transaction[field] = null;
      }

      return transaction;
    }, {})
  }

  render() {
    return(
      <article className="transaction">
        <Field type={FieldType.DATE} value={this.state.data.date}/>
        <Field type={FieldType.TEXT} value={this.state.data.payee}/>
        <Field type={FieldType.TEXT} value={this.state.data.category}/>
        <Field type={FieldType.TEXT} value={this.state.data.amount}/>
        <Field type={FieldType.TEXT} value={this.state.data.memo}/>
        <Field type={FieldType.TEXT} value={this.state.data.isCleared}/>
      </article>
    );
  }
}

export default Transaction;