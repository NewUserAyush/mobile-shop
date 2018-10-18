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
       <Product></Product>
      </div>
    );
  }
}

export default LandingPage;
