import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import LandingPage from '../landingPage/index.js';
import ProductList from '../productList/index.js';
import Checkout from '../checkout/index.js';

class RoutePage extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/category/:name" component={ProductList } />
                    <Route path="/checkout" component={Checkout } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RoutePage;