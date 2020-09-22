import * as React from 'react';
import Row from './Row';

export enum DataType {
  TEXT,
  DATE,
  NUMBER,
  BOOLEAN
}

export interface ColumnDefinition {
  keyName: string;
  displayName: string;
  type: DataType;
}

interface TableProps {
  rows: {
    [index: number]: any;
  };
  columns: ColumnDefinition[];
  onSave: (id: number, data: any) => void;
}

interface TableState {
  currentEditRow: number;
}

class Table extends React.Component<TableProps, TableState> {
  constructor(props : TableProps) {
    super(props);

    this.state = {
      currentEditRow: null
    }

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
  }

  handleOnClick(id: number) {
    if(this.state.currentEditRow === null) {
      this.setState({ currentEditRow: id });
    }
  }

  handleOnSave(id: number, data: any) {
    this.props.onSave(id, data);
    this.setState({ currentEditRow: null });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.columns.map((column, index) => <th key={index}>{column.displayName}</th>)}
          </tr>
        </thead>
        <tbody>
            {Object.entries(this.props.rows).map(([id, value]) => 
              <Row 
                key={parseInt(id)}
                id={parseInt(id)}
                data={value} 
                columns={this.props.columns}
                onClick={this.handleOnClick}
                onSave={this.handleOnSave}
                isEditing={this.state.currentEditRow === parseInt(id)}/>
            )}
        </tbody>
      </table>
    );
  }
}

export default Table;