import React from 'react';
import Slider from '../slider'
import './index.css';
import Product from '../product/index.js';

let imageList = [1,2,3,4,5,6,7,8,9];
class LandingPage extends React.Component {
  constructor(prop){
    super(prop);
    this.state={}
  }


  render() {
    return (
      <div>
       <div className="slider">
       <Slider images = {imageList}></Slider>
       </div>
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
