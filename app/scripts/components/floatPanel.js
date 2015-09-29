import React from 'react';

class FloatPanel extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <div className='div-float-panel'>
        <img src='images/icon_email.png' className='img_float' />
        <br />
        <img src='images/icon_facebook.png' className='img_float' />
        <br />
        <img src='images/icon_instagram.png' className='img_float' />
        <br />
        <img src='images/icon_favorite.png' className='img_float' />
        <br />
        <img src='images/icon_tweeter.png' className='img_float' />
      </div>
    );
  }
}

export default FloatPanel;
