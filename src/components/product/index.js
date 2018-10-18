import React from 'react';
import './index.css';

class Product extends React.Component {
  constructor(prop){
    super(prop);
    this.state={
      arr:[12,2,32,4]
    }
  }


  render() {
    return (
        
        <div className="category">
        {this.state.arr.map((d,i) =>
          <div className="item">{d}</div>
        )}
        </div>
    );
  }
}

export default Product;
