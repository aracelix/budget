import * as React from 'react';
import TransactionAPI from '../api/TransactionAPI';
import { Transaction } from '../types';
import Table, { ColumnDefinition, DataType } from './Table';

interface AccountProps {
  id: number;
  name: string;
}

interface AccountState {
  transactions: Record<number, Transaction>;
}

const headerDefinition : ColumnDefinition[] = [
  { keyName: "date", displayName: "Date", type: DataType.DATE },
  { keyName: "payee", displayName: "Payee", type: DataType.TEXT },
  { keyName: "category", displayName: "Category", type: DataType.TEXT },
  { keyName: "memo", displayName: "Memo", type: DataType.TEXT },
  { keyName: "amount", displayName: "Amount", type: DataType.NUMBER },
  { keyName: "isCleared", displayName: "Cleared", type: DataType.BOOLEAN }
];

export default class Account extends React.Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props);

    this.state = {
      transactions: TransactionAPI.getTransactionsByAccountId(this.props.id)
    };

    this.handleUpdateTransaction = this.handleUpdateTransaction.bind(this);
  }

  handleUpdateTransaction(id: number, transaction: Transaction) {
    //check if this is a new transaction or not
    //if empty id: add
    //else: update
    console.log(transaction);
  }

  render() {
    return (
      <section className="account">
        <AccountSummary name={this.props.name} />
        <Table rows={this.state.transactions} columns={headerDefinition} onSave={this.handleUpdateTransaction}/>
      </section>
    );
  }
}

interface AccountSummaryProps {
  name: string
}

const AccountSummary = (props: AccountSummaryProps) => {
  const { name } = props;

  return (
    <section>{name}</section>
  );
}