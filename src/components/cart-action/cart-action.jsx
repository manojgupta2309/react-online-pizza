import React, {Component}from 'react'
import {connect} from 'react-redux'
import './cart-action.css'
class CartAction extends Component{


    render(){
        let qty=this.props.item_qty;
        let qtyAction=null;
        if(qty==1)
        qtyAction= <span className="delete" onClick={()=>this.props.delete_cart_item(this.props.item_id)}><img src="/icons/delete_icon.svg"/></span>
        else 
        qtyAction= <span className="delete" onClick={()=>this.props.delete_qty_item(this.props.item_id)}><img src="/icons/minus.svg"/></span>

        //console.log("cart-action",this.props)
        return <div className="cart-action">
        {qtyAction}
        <span className="delete">{this.props.item_qty}</span>
        <span className="delete" onClick={()=>this.props.add_qty_item(this.props.item_id)}><img src="/icons/plus.svg"/></span>
        </div>
    }
}


function mapDispatchToProps(dispatch){
    
    return {
        add_qty_item : (item_id)=>{
            dispatch({type:"Add_Qty_Item", payload:item_id})
        },
        delete_qty_item : (item_id)=>{
            dispatch({type:"Delete_Qty_Item", payload:item_id})
        },
        delete_cart_item : (item_id)=>{
            dispatch({type:"Delete_Cart_Items", payload:item_id})
        }
    }
}

export default connect(null,mapDispatchToProps)(CartAction)