import React, {Component} from 'react';

class ListItem extends Component {

  getContent() {
    let htmlInput = <div></div>;
    if(this.props.item.image != '')
    {
      let srcImage = this.props.item.image
        htmlInput = <div className='div-content-text'>
          <table>
            <tr>
              <td>
                <img src={`${this.props.item.image}`} alt={`${this.props.item.title}`} className='img-blog-item' />
              </td>
              <td className='td-blog-text'>
                { this.props.item.text }
              </td>
            </tr>
          </table>
        </div>;
    }
    else {
        htmlInput = <div className='div-content-text'>
          { this.props.item.text }
        </div>;
    }

    return ( htmlInput );
  }

  render() {
    /* { this.props.item.id }
     */
    return (
      <div className='div-blog-item'>
        <p className='p-blog-header'>
            { this.props.item.header }
        </p>
        <br />
        { this.getContent() }
        <p className='p-text-autor'>
          { this.props.item.title }
          <br />
        </p>
        Vložil: { this.props.item.href }
      </div>
    );
  }
}

export default ListItem;
