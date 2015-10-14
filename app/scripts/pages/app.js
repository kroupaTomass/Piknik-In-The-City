import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import FloatPanel from '../components/floatPanel.js';
import PanelFacebook from '../components/panelFacebook.js';
import Scroll from 'scrollReveal';

class App extends React.Component {
  componentDidMount() {
    window.sr = new scrollReveal();
  }

  render() {
    return (
      <div>
        <div id="fb-root"></div>
        <Header />
        <FloatPanel />
        <div className="content" data-sr="move 16px scale down 20%, over 2s">
          <RouteHandler/>
        </div>
        <br />
        <hr />
        <br />
        <PanelFacebook />
        <Footer />
      </div>
    );
  }

}

export default App;
