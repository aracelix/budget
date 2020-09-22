import React from 'react';

class Transaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data,
      date: (new Date(this.props.data.date * 1)).toISOString().slice(0,10)
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  bundleTransaction() {
    return allowedFields.reduce((transaction, field) => {
      transaction[field] = this.state[field];
      return transaction;
    }, {});
  }

  handleOnSubmit(e) {
    let transaction = bundleTransaction();
    this.props.onUpdate(transaction);
  }

  handleOnChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleOnClick(e) {
    this.props.onClick(this, e);
  }

  showEditFields() {
    return (
      <React.Fragment>
        <input 
          className="date" 
          name="date" 
          type="date" 
          defaultValue={this.state.date} 
          onChange={this.handleOnChange} />
        <input 
          className="payee" 
          name="payee" 
          type="text" 
          defaultValue={this.state.payee} 
          onChange={this.handleOnChange} />
        <input 
          className="category" 
          name="category" 
          type="text" 
          defaultValue={this.state.category} 
          onChange={this.handleOnChange} />
        <input 
          className="amount" 
          name="amount" 
          type="number" 
          defaultValue={this.state.amount} 
          onChange={this.handleOnChange} />
        <input 
          className="memo" 
          name="memo" 
          type="text" 
          defaultValue={this.state.memo} 
          onChange={this.handleOnChange} />
        <input 
          className="isCleared" 
          name="isCleared" 
          type="text" 
          defaultValue={this.state.isCleared} 
          onChange={this.handleOnChange} />
        <button onClick={this.handleOnSubmit}>Update</button>
      </React.Fragment>
    );
  }

  showDisplayFields() {
    return (
      <React.Fragment>
        <div className="date" onClick={this.handleOnClick}>{this.state.date}</div>
        <div className="payee" onClick={this.handleOnClick}>{this.state.payee}</div>
        <div className="category" onClick={this.handleOnClick}>{this.state.category}</div>
        <div className="amount" onClick={this.handleOnClick}>{this.state.amount}</div>
        <div className="memo" onClick={this.handleOnClick}>{this.state.memo}</div>
        <div className="isCleared" onClick={this.handleOnClick}>{this.state.isCleared}</div>
      </React.Fragment>
    );
  }

  render() {
    return(
      <article className={this.props.isEditing ? 'transaction isEditing' : 'transaction'}>
        {this.props.isEditing ? this.showEditFields() : this.showDisplayFields()}
      </article>
    );
  }
}

export default Transaction;