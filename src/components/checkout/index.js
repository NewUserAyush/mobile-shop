import React from 'react';
import './index.css';

class Checkout extends React.Component{
    render(){
        var data=JSON.parse(sessionStorage.getItem('checkout-data'));
        console.log(data);
        return(
            <div className="checkout">
                <div className="user-detail">
                    <label>Name</label>
                        <input type="text" placeholder="Enter Your Name"/>
               
                </div>
                <div className="user-detail">
                    <label>Phone Number</label>
                        <input type="text" placeholder="Enter Your Mobile"/>
                  
                </div>
                <div className="user-detail">
                    <label>Address</label>
                        <textarea type="text" placeholder="Enter Your Name"></textarea>
                    
                </div>
                <hr/>
                <div>
                    <div className="card-titile">Card Detail</div>
                    
                        {data.map(item=>(
                            <div className="card-detail">
                            <div className="card-detail-title">{item.title}</div>
                            <div className="card-detail-count">{item.count}</div>
                            </div>
                        ))}
                    
                </div>
                <div className="submit-btn">
                     <div className="submit">Submit</div>
                </div>
                
            </div>
        )
    }
}

export default Checkout;