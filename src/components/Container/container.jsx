import React, { Component } from 'react'
import Header from '../Header/header'
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../home/home';
import Gallery from '../gallery/gallery';
import Contact from '../contact/contact';
import Checkout from '../checkout/checkout';
import Payment from '../payment/payment';
import OrderStatus from '../order-status/order-status';

class Container extends Component{

    render(){
        return <div>
        <Header/>
        <Switch>
        <Route exact path='/'  component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/payment' component={Payment} />
        <Route path='/orderStatus' component={OrderStatus} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/:menuType' component={Gallery} />
        <Route path='/external/:url' component={props => {
            //console.log("external")
            window.location.replace(props.location.pathname.substr(1)) 
            return null
          }}/>
        </Switch>
        </div> 
    }
}


export default Container;