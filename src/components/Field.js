import React from 'react';

class Field extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.type) {
      case FieldType.DATE:
        return <input type="date" defaultValue={(new Date(this.props.value * 1)).toISOString().slice(0,10)}/>;
      case FieldType.TEXT:
        return <input type="text" defaultValue={this.props.value}/>;
      default:
        return <div>{this.props.value}</div>
    }
  }
}

export default Field;

export const FieldType = {
  DATE: 'date',
  TEXT: 'text'
};