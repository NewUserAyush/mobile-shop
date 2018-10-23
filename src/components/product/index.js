import React from 'react';
import './index.css';

class Product extends React.Component {
  constructor(prop){
    super(prop);
    this.state={
      arr:[
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
      ]
    }
  }


  render() {
    return (
        
        <div className="category">
        {this.state.arr.map((d,i) =>
          <ProductItem data = {d}></ProductItem> 
          )}
        </div>
    );
  }
}

export default Product;

export const ProductItem = (props) =>
  {
            
                    const styles = {
                      backgroundImage: `url(${props.data.img})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }
                return (<div className="item" style={styles}>
                    <div className="title">{props.data.title}</div>
                    <div className="subtitle">{props.data.subtitle}</div>
                </div>);
                
                
}
