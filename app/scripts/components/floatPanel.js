import React from 'react';
import Scroll from 'scrollReveal';

class FloatPanel extends React.Component{

  constructor(props, context) {
   super(props);
  }


  componentDidMount() {
    window.sr = new scrollReveal();
  }

  render() {
    return (
      <div className='div-float-panel' data-sr="enter left, hustle 60px, over 3s">
        <a href="https://www.facebook.com/PiknikintheCity" title="Piknik In The City" target="_blank"><img src='images/icon_facebook.png' className='img_float' /></a>
        <br />
        <a href="https://instagram.com/piknik_in_the_city" title="Piknik In The City" target="_blank"><img src='images/icon_instagram.png' className='img_float' /></a>
        <br />
        <a title="Piknik In The City" id='hrefBookmark'><img src='images/icon_favorite.png' className='img_float' /></a>
      </div>
    );
  }
}

export default FloatPanel;
