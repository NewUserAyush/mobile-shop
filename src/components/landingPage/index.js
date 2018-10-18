import React from 'react';
import './index.css';
import Product from '../product/index.js';

class LandingPage extends React.Component {
  constructor(prop){
    super(prop);
    this.state={}
  }


  render() {
    return (
      <div>
       <div className="slider">Photo slide</div>
       <div className="content">
         
          <div className="content-title">
            <div>Category</div>
            <div>SeachBox</div>
          </div>
          <Product></Product> 
       </div>
       
      </div>
    );
  }
}

export default LandingPage;
