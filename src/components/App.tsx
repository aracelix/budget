import * as React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Account from './Account';
import Header from './Header';
import './style.css';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      accounts: {}
    }
  }

  render() {
    return (
      <div>
        <Header>
          <Link to="/budget">Budget</Link>
          <Link to="/account">Account</Link>
        </Header>
        <main>
          <Switch>
            <Route path="/budget">
              <section>random</section>
            </Route>
            <Route path="/account">
              <Account id={123} name="Bank of America" />
            </Route>
            <Route path="/">
              <section>main</section>
            </Route>
          </Switch>
        </main>
        <footer>
          footer
        </footer>
      </div>
    );
  }

}

export default App;