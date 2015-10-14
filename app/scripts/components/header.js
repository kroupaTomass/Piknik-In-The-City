import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <header className="clearfix">
        <a href="#"><img src='images/logoPiknik-min.jpg' alt='Piknik In The City' /></a>
      </header>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Header;

/*<nav className="clearfix">
  <div className="nav-item">
    <Link to="home">Home</Link>
  </div>
  <div className="nav-item">
    <Link to="info">Info</Link>
  </div>
</nav>*/
