import React from 'react';
import Account from './Account';
import Budget from './Budget';
import AccountAPI from '../api/AccountAPI';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: AccountAPI.getAccounts()
    }
  }

  render() {
    return (
      <div id="App">
        <section id="sidebar">
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Budget</Link>
                </li>
                <li>
                  <Link to="/account">Account</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/account">
                <Account id="303" name="Bank of America"/>
              </Route>
              <Route path="/">
                <Budget/>
              </Route>
            </Switch>
          </Router>
        </section>
      </div>
    );
  }

}

export default App;