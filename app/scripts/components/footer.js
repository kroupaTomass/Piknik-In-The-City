import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-column">
            <a href="#"><img src='images/logo_piknik_small_transparent.png' alt='Piknik In The City' className='imgFooterLogo' /></a>
          </div>
          <div className="footer-column">
            <a href="https://www.facebook.com/PiknikintheCity" title="Piknik In The City" target="_blank">
              <img src='images/footer_Facebook.png' alt='Piknik In The City' className='imgFooterIcon' />
            </a>
            <a href="https://instagram.com/piknik_in_the_city" title="Piknik In The City" target="_blank">
              <img src='images/footer_Instagram.png' alt='Piknik In The City' className='imgFooterIcon' />
            </a>
          </div>
          <div className="footer-column p-footer-webmaster">
            WEBMASTER: TOMÁŠ KROUPA<span> &copy; 2015</span>
          </div>
      </div>
      </footer>
    );
  }
}

export default Footer;
