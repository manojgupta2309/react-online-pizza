import React, { Component } from 'react'
import {connect} from 'react-redux'
import {  Link } from 'react-router-dom';
import CartAction from '../cart-action/cart-action'

class CartItems extends Component{

    render(){
        //console.log("this.props.cartItems",this.props.cartItems)
        let cartItems = null;
        if(this.props.cartItems.length>0){
            cartItems = this.props.cartItems.map(item=>{
                return <div key={item.item_id} className="cart-item">
                <div className="row">
                <h4 className="col-md-8">{item.item_name}</h4>
                </div>
                <div className="row">
                <div className="col-md-8 qty">
                <CartAction item_qty={item.item_qty} item_id={item.item_id}/>
                </div>
                <span className="col-md-4">${item.item_amount}</span>
                </div>
                </div>
            })
            return  <section   className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="card">
            <h3 className="cart-heading">cart items</h3>
            <hr/>
            
            {cartItems}
            
            <br/>
            <div className="cart-total">
            
            <h5 className="col-md-8">subtotal</h5>
            <h5 className="col-md-4">${this.totalAmount()}</h5>
            <Link  to={`/checkout`} className="btn btn-success chk-out">order now</Link>
            </div>
            </div>
            </section>
        }
         
       return cartItems; 
        
       
    }

    totalAmount = ()=>{
        let tot = 0;
        for(let item of this.props.cartItems)
            tot+=item.item_amount;

        return tot;
    }
}

function mapStateToProps(state){
   
    return {
        cartItems:state.cartItemsReducer
    }
}
function mapDispatchToProps(dispatch){
    
    return {
        
        delete_cart_item : (item_id)=>{
            //console.log("item",item_id)
            dispatch({type:"Delete_Cart_Items", payload:item_id})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItems)