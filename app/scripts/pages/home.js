import React from 'react';
import ItemList from '../components/itemList.js';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import Scroll from 'scrollReveal';


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();

    window.sr = new scrollReveal();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <div id="topPage" className='div-home-panel'>
        <a href="https://www.facebook.com/PiknikintheCity" title="Piknik In The City" target="_blank">
        <img src='images/logoPiknik.jpg' className='img-responsive' /></a>
        <p className='p-hash-tag-text'><a href="https://instagram.com/piknik_in_the_city" title="Piknik In The City" target="_blank">#PiknikInTheCity</a></p>
      </div>
    );
  }
}

export default Home;

/* <ItemList { ...this.state } /> */
