import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import FloatPanel from '../components/floatPanel.js';
import PanelFacebook from '../components/panelFacebook.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <div id="fb-root"></div>
        <Header />
        <FloatPanel />
        <div className="content">
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
