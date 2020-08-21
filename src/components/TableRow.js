import React from 'react';
import { render } from 'enzyme';

class TableRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.data
    }

    this.displayData = this.displayData.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  displayData(column, index) {
    return this.props.isEditing ? this.getField(column, index) : <td key={index}>{this.state[column.key]}</td>;
  }

  getField(column, index) {
    return <td key={index}><input name={column.key} type={column.type} value={this.state[column.key]} onChange={this.handleOnChange}/></td>;
  }

  handleOnChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnSubmit(e) {
    this.props.onUpdate(this.state);
  }

  render() {
    return (
      <tr className={this.props.isEditing ? 'isEditing' : undefined} onClick={(e) => this.props.onClick(this.state.id)}>
          {this.props.columns.map((column, index) => this.displayData(column, index))}
          <button onClick={this.handleOnSubmit}>submit</button>
      </tr>
    );
  }
}

export default TableRow;