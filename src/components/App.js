import React from 'react';
import Account from './Account';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <Account />
      </div>
    );
  }

}

export default App;