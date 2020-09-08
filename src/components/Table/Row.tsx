import * as React from 'react';
import { ColumnDefinition } from './index';
import { Transaction } from '../../types';

interface RowProps {
  id: number;
  data: [any];
  columns: ColumnDefinition[];
  isEditing: boolean;
  onClick: (id: number) => void;
  onSave: (id: number, data: any) => void;
}

export default class TableRow extends React.Component<RowProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      ...this.props.data
    }

    // this.displayData = this.displayData.bind(this);
    // this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e: Event) {
    let element = e.target as HTMLInputElement;
    this.setState({ [element.name]: element.value });
  }

  handleOnSave() {
    this.props.onSave(this.props.id, this.state);
  }

  handleOnClick(id: number) {
    this.props.onClick(id);
  }

  render() {
    return (
      <tr onClick={(e) => this.handleOnClick(this.props.id)}>
        {this.props.columns.map((column: ColumnDefinition, index: number) =>
          this.props.isEditing ?
            <EditCell key={index} type={column.type} data={this.state[column.keyName]}/> :
            <DisplayCell key={index} type={column.type} data={this.state[column.keyName]}/>
        )}
      </tr>
    );
  }
}

const DisplayCell = ({type, data}: any) => {
  return (
    <td>{data}</td>
  );
}

const EditCell = ({type, data}: any) => {
  return (
    <td>Editing:{data}</td>
  );
}
