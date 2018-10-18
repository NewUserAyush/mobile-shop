import React from 'react';
import './index.css';

class Product extends React.Component {
  constructor(prop){
    super(prop);
    this.state={
      arr:[12,2,32,4,1,2,3,4,5,6,7,8,9,10,1,12,12,21,31,2,13,13]
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
