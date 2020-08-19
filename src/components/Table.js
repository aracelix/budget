import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table></table>
    );
  }
}

export default Table;

export const tableDataType = {
  DATE: "date",
  TEXT: "text",
  NUMBER: "number"
};