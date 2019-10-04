import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {API_BASE_URL} from '../../config/config'

class Item extends Component{

    constructor(){
        super()
        this.state={
            
        }
    
    }
    componentDidMount(){
        axios.get(API_BASE_URL+"items").then(
            (resp)=>{
                //console.log("resp data",resp)
                this.props.getItems(resp.data.data)
            },(err)=>{
                //console.log("Error",err)
            }
        )
    }   
  
    render(){
        //console.log("props",this.props)
        let item = <p>loading hot pizza....</p>
        if(this.props[this.props.menuType].length>0)
         item = this.props[this.props.menuType].map((item)=>{
            return <section id="item"  key={item.item_id} className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="card">
            
           <img src={item.item_img} className="img-cvr" alt="..." width="10%" height="20%"/>
            <div className="card-body">
           
            <span className="itm-dsc__nm">{item.item_name}</span>
            <span className="itm-dsc__nm amount">${item.item_amount}</span>
           
            <br/>
            <span className="itm-dsc__dscrptnt">{item.item_des}</span>
            <div className="card-footer">
            <button className="add-to-cart" onClick={()=>this.props.addToCart(item)}><span>add to cart</span></button>
            </div>
            </div>
            </div>
            </section> 
            
        })
        

        return <div>{item}</div> 
    }
}

function mapStateToProps(state){
    //console.log(state)
    return {
        gallery : state.ItemsReducer.filter(i=> !i.isSpecial),
        special:state.ItemsReducer.filter(i=> i.isSpecial)
    }
}
function mapDispatchToProps(dispatch){
    
    return {
        
        addToCart : (item)=>{
            //console.log("item",item)
            let itemObj = {
                item_id:item.item_id,
                item_name:item.item_name,
                item_amount:item.item_amount,
                item_img:item.item_img,
                item_des:item.item_des,
                item_qty:item.item_qty,
            }
            dispatch({type:"Add_To_Cart", payload:itemObj})
        },
        getItems:(data)=>{
            dispatch({
                type:"Get_Items",payload:data
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Item) 