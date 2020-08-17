import React from 'react';
import Account from './Account';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="App">
        <Account headers={["date", "payee", "category", "amount", "memo", "isCleared"]}/>
      </div>
    );
  }

}

export default App;