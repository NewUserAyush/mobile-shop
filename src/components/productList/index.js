import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class ProductList extends React.Component {
  state={
    arr:[
      {"count":"0","title":"HeadPhone","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"EyerPhone","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"Mobile","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"Laptop","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"Desktop","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"HeadPhone","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"HeadPhone","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"HeadPhone","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')},
      {"count":"0","title":"HeadPhone","subtitle":"headphone","description":"this will describ the detail of ptoduct","img":require('../../asset/headphone2.jpg')}
    ],
  }
  
  addItem=(item)=>{
    this.setState({count:item.count+1})
    return item.count=+item.count+1;
  }

  removeItem=(item)=>{
    if(item.count<1) return;
    this.setState({count:item.count-1})
    return item.count=item.count-1;
  }

  checkoutFun=(arr)=>{
    var newArr=[];
    arr.forEach(item => {
      if(+item.count)
        newArr.push(item);
    });
    sessionStorage.setItem('checkout-data',JSON.stringify(newArr));
    
  }

  render() {
    let categoryName=(this.props.match.params.name);
    return (
            <div className="categoryStyle">
            <div className="header">
               <div className="header-title">{categoryName}</div>
               <NavLink to="/checkout" >
                 <div className="checkout-button" onClick={this.checkoutFun(this.state.arr)}>checkout</div>
               </NavLink>
            </div>
              
              <hr/>
              <div className="list-row">
                {this.state.arr.map((d,i) =>
                        <div className="list-item">
                          <div style={{flex:1}}>
                            <div className="category-title">{d.title}</div>
                            <div className="category-subtitle">{d.subtitle}</div>
                          </div>
                          <div className="description">
                            <div style={{flex:9}}>{d.description}</div>
                            <div className="buttons">
                              <i class="fas fa-plus-circle" onClick={()=>this.addItem(d)}></i>
                              <span class="badge">{d.count}</span>
                              <i class="fas fa-minus-circle" onClick={()=>this.removeItem(d)}></i>
                            </div>
                            
                          </div>
                        </div>
                
                  )}
                </div>
            </div>
            
    );
  }
}

export default ProductList;


