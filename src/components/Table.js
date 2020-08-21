import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEditRow: null
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
  }

  handleOnClick(id) {
    if(this.state.currentEditRow === null) {
      this.setState({ currentEditRow: id });
    }
  }

  handleOnUpdate(data) {
    this.props.onUpdate(data);
    this.setState({ currentEditRow: null });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.columns.map((column, index) => <th key={index}>{column.name}</th>)}
          </tr>
        </thead>
        <tbody>
            {this.props.rows.map(row => 
              <TableRow 
                key={row.id} 
                data={row} 
                columns={this.props.columns}
                onClick={this.handleOnClick}
                onUpdate={this.handleOnUpdate}
                isEditing={this.state.currentEditRow == row.id}/>
            )}
        </tbody>
      </table>
    );
  }
}

export default Table;

export const tableDataType = {
  DATE: "date",
  TEXT: "text",
  NUMBER: "number"
};