import React, {Component}from 'react'
import './checkout.css'
import CartAction from '../cart-action/cart-action'
import axios from 'axios'
import {connect} from 'react-redux'
import {API_BASE_URL} from '../../config/config'
import  { Redirect } from 'react-router-dom'

class Checkout extends Component{
    constructor(){
        super()
        this.state={
                name:"",
                email:"",
                mobile:"",
                address:"",
                addressSaved:false,
                tax:5,
                deliveryCharges:10,
                grandTotal:0
            }
            this.handleInputChange = this.handleInputChange.bind(this);
        
    }
    handleInputChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
      }
      handleOrder(order){
          order.grandTotal=this.totalAmount()+order.tax +order.deliveryCharges
        //console.log("order",order) 
        //console.log("cart ",this.props.cartItems)
        let orders =[]
        for(let item of this.props.cartItems){
            orders.push(
                {
                    "item_id": item.item_id,
                    "item_qty": item.item_qty,
                    "item_name": item.item_name,
                    "cust_name": order.name,
                    "cust_mobile_no": order.mobile,
                    "grand_total":order.grandTotal,
                    "cust_email": order.email,
                    "cust_address": order.address
                }
            )
        }
         axios.post(API_BASE_URL+'orders',{"orders":orders}).then(
             (resp)=>{
                 //console.log("resp post",resp.data.status)
                 if(resp.data.status){
                    this.props.history.push('/payment')
                 }
                
             },(err)=>{
                 //console.log("Add error",err)
             }
             )
        
      }
      handleSave=()=>{
        let addressForm = {
           "name": this.state.name,
            "email": this.state.email,
            "mobile": this.state.mobile,
            "address": this.state.address
        }
       //console.log("addressForm",addressForm)
       this.setState({
        addressSaved:true
       })
       
       
    }
   
    totalAmount = ()=>{
        let tot = 0;
        if(this.props)
        for(let item of this.props.cartItems)
            tot+=item.item_amount;
       
        return tot;
    }
    totalItems = ()=>{
        let tot = 0;
        if(this.props)
        for(let item of this.props.cartItems)
            tot+=item.item_qty;
       
        return tot;
    }
    render(){
        let address= null;
        let cartItemHeading=null;
        let cartItem = <p>Your cart is empty please select hot pizza</p> ;
        let priceDetails=null;
        if(!this.state.addressSaved && this.props.cartItems.length>0){
           let  addressform = <form className="form-group">
            <div className="">
                <span>name : </span>
                <input type="text" className="form-control"  name="name"  value={this.state.name}  onChange={this.handleInputChange}  />
            </div>
            <div className="submit">
            <span>email : </span><br/>
            <input type="text" className="form-control"  name="email"  value={this.state.email}  onChange={this.handleInputChange}   />
            </div>
            <div className="submit">
            <span>mobile no. : </span>
            <input type="text" className="form-control"  name="mobile"  value={this.state.mobile}  onChange={this.handleInputChange}  />
            </div>
            <div className="submit">
            <span>address : </span>
            <textarea rows="3" cols="50" className="form-control" name="address" value={this.state.address}  onChange={this.handleInputChange}  > </textarea>
            </div>
            <div className="submit">
            <button type="button"  className="btn btn-success chk-out" onClick={this.handleSave} >save & continue</button>
            </div>
            </form>
            address = <div className="delivery">
            <span className="hdng">delivery address</span>
            <br/>
            <br/>
            <section   className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="card">
            <div className="address">
                {addressform}
             </div>
          
            </div>
            
            </section>
            <br/>
            </div>
        }
          
        else if(this.state.addressSaved ){
            address = <div className="delivery">
            <span className="hdng">delivery address</span>
            <br/>
            <br/>
            <div className="card address-saved">
            <div className="">
            <span className="sub-hdng">name</span>
            <span className="">{this.state.name}</span>
            </div>
            
            <span className="sub-hdng">email</span>
            <span className="">{this.state.email}</span>
            
            <div className="">
            <span className="sub-hdng">mobile no.</span>
            <span className="">{this.state.mobile}</span>
            </div>
            <div className="">
            <span className="sub-hdng">delivery address</span>
            <span className="">{this.state.address}</span>
            </div>
           <div>
           </div>
           </div></div>
            priceDetails =  <div className="price-details">
            <span className="hdng">price details</span>
            <br/>
            <br/>
              <section   className="wow fadeInUp" data-wow-delay="0.3s">
              <div className="card price-card">
              <div className="cart-item">
              <span className="sub-hdng">subtotal</span>
              <span className="sub-hdng amount">${this.totalAmount()}</span>
              </div>
              <div className="cart-item">
              <span className="sub-hdng">tax</span>
              <span className="sub-hdng amount">${this.state.tax}</span>
              </div>
              <div className="cart-item">
              <span className="sub-hdng">delivery charges</span>
              <span className="sub-hdng amount">${this.state.deliveryCharges}</span>
              </div>
              <div className="cart-item">
              <span className="sub-hdng">grandtotal</span>
              <span className="sub-hdng amount">${this.totalAmount() + this.state.tax + this.state.deliveryCharges}</span>
              </div>
              <div className="payment">
              <button className="btn btn-success chk-out" onClick={()=>this.handleOrder(this.state)}>place order</button>
              </div>
             
             <div>
             </div>
              
              </div>
              </section>
              
            </div>  
          
            
        }
        if(this.props.cartItems.length>0){
            cartItemHeading = <span className="hdng">{this.totalItems()} items you have selected</span>
            cartItem= this.props.cartItems.map(item=>{
                return <section   id="item" key={item.item_id} className="wow fadeInUp" data-wow-delay="0.3s">
                <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src={item.item_img} alt="pizza" width="100%" height="70%"/>
                        <div className="mt-20">
                        <CartAction item_qty={item.item_qty} item_id={item.item_id}/></div>
                        </div>
                    <div className="cart-card-body">
                        <h4 className="card-title">{item.item_name}</h4>
                        <p className="card-text">{item.item_des}</p>
                        
                    </div>
                    </div>
                </div>
                </section>
            })
        }
       
        return <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="row">
            <div className="col-md-9">
            {cartItemHeading}
            {cartItem}
            <br/>
            </div>
            <div className="col-md-3">
            {address}
           {priceDetails}
          </div>
        </div>
    </div>
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
            ////console.log("item",item_id)
            dispatch({type:"Delete_Cart_Items", payload:item_id})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
