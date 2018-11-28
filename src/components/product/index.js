import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class Product extends React.Component {
state={
      arr:[
        {"title":"HeadPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"EyerPhone","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"Speekar","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"Mobile","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
        {"title":"Laptop","subtitle":"headphone","img":require('../../asset/headphone2.jpg')},
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
      ],
      selectCategory:''
    }
  


  // checkCategoryStatus(){
  //   console.log("(this.props.selectCategory",this.props.selectCategory)
  //   if(this.props.selectCategory!==''){
  //     return 'hide';
  //   } else {
  //     return 'category';
  //   }
  // }

  getProductList(data){
    this.setState(prvState=>({
      categoryData:data
    }))
  }
  
  render() {
    return (
      <div>
        <div className='category'>
        {this.state.arr.map((d,i) =>
          <NavLink to={"/category/"+d.title} >
              <ProductItem data = {d} categoryData={this.props.categoryData} onClick={()=>this.getProductList(d)}/>
          </NavLink>
        ) }
        </div>
      </div>
        
    );
  }
}

export default Product;

class ProductItem extends React.Component {
  

  render(){
    const styles = {
      backgroundImage: `url(${this.props.data.img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
    return (<div className="item" style={styles}  selectCategory={this.selectCategory}>
                    <div className="title">{this.props.data.title}</div>
                    <div className="subtitle">{this.props.data.subtitle}</div>
                </div>);
  }
}