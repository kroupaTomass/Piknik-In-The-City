import React from 'react';
import ListItem from '../actions/list-item';

class ItemList extends React.Component {

  constructor(){
    super();
  }

  getItems() {
    return (
      <p>
        {this.props.items.map((item, index) => {
          return <ListItem key={index}
            item={item} />;
        })}
      </p>
    )
  }

  render() {
    let items = this.getItems();
    let loading = this.props.loading ? <div className="loading-label">Probíhá načítání blogu ...</div> : '';

    return (
      <div className='div-blog-panel'>
        { loading }
        <p>
          { items }
        </p>
      </div>
    );
  }
}

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;
