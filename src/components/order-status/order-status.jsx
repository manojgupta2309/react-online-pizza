import React , {Component}from 'react'


class OrderStatus extends Component {

    render(){
        let status = <h2>your order has been successfully placed</h2>
        
        return <div className="container"><br/><br/><br/><br/><br/><div className="row">{status}<br/><p>you can track your order with given mobile no.</p></div></div>
    }
}

export default OrderStatus