import React from 'react';
import ReactTimeout from 'react-timeout'
import './index.css';

const battery = require('../../asset/images/slide1.jpg')
const cover = require('../../asset/images/slide3.jpg')
const speaker = require('../../asset/images/slide4.jpg')

let myIndex = 0;
let translateValue;
class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            imageList : [battery, cover, speaker],
        }
    }

    componentDidMount(){
        this.startSlide();
        setInterval(this.startSlide, 2000)
        console.log(this.state);
    }

  startSlide(){
    var i;
    var images = document.getElementsByClassName("img-style");
    console.log(" ",i, images)
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > images.length) {
        myIndex = 1;
    }
    images[myIndex-1].style.display = "block";  
  }

  

  render() {
    return (
        <div className = "slide-container">
            { this.state.imageList.map((d,i) =>  
            <img className = "img-style" src = {d} alt="text"></img>
            )}   
        </div>
    );
  }
}

export default ReactTimeout (Slider);

