import React from 'react';
import Slider from '../slider'
import './index.css';

let imageList = [1,2,3,4,5,6,7,8,9];
class LandingPage extends React.Component {
  render() {
    return (
      <div>
       <Slider images = {imageList}></Slider>
        <div>Category</div>
      </div>
    );
  }
}

export default LandingPage;
