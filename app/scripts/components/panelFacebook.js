  import React from 'react';
  import Scroll from 'scrollReveal';

  class PanelFacebook extends React.Component{

    constructor(props, context) {
     super(props);
    }

    componentDidMount() {
      window.sr = new scrollReveal();
    }

    render() {
      return (
        <div className='div-facebook-panel' data-sr="move 16px scale down 20%, over 2s">
          <div className="fb-page" data-href="https://www.facebook.com/PiknikintheCity" data-width="500" data-small-header="false" data-adapt-container-width="true"
          data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div className="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/PiknikintheCity">
            <a href="https://www.facebook.com/PiknikintheCity">Piknik in the City</a></blockquote></div>
          </div>
        </div>
      );
    }
  }

  export default PanelFacebook;
