import React, { Component } from 'react'
import Item from '../item/item'
import './gallery.css'
import CartItem from '../cart-item/cart-item'
class Gallery extends Component{

    constructor(){
        super()
       
    }

    render(){
        //console.log(this.props)
        let menu= null;
        if(this.props.match.params.menuType=="gallery"){
            menu = <Item menuType={"gallery"} />
        }else if(this.props.match.params.menuType=="special"){
            menu = <Item menuType={"special"} />
        }
           
        return <section id="" className="parallax-section">
            <br/><br/><br/><br/>
            <div className="container">
            <div className="row">
            <div className="col-md-9">
            
                {menu}
            </div>
            <div className="col-md-3">
            <CartItem/>
            </div>
            </div>
            </div>
            

            
     
    </section>
    
    }
}

export default Gallery