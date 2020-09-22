import * as React from 'react';

export default class Header extends React.Component<any, any> {
  render() {
    const children = this.props.children;
    return(
      <header>
        <section className="logo">
          logo
        </section>
        <nav className="menu">
          <ul>
            {React.Children.map(children, child => <li>{child}</li>)}
          </ul>
        </nav>
        <nav className="menu">
          user menu
        </nav>
      </header>
    );
  }
}