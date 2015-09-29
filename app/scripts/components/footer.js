import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <footer className="footer">
        PIKNIK IN THE CITY &copy; 2015
      </footer>
    );
  }
}

export default Footer;

/* <a href='http://www.google.cz'><img src='images/logoPiknik-min.jpg' alt='Piknik In The City' /></a> */
