import React , {Component}from 'react'


class Payment extends Component {

    render(){
        let status = <p>processing your order please wait......</p>;
        setTimeout(()=>{
            window.location.href = "/orderStatus"
        },3000)
        return <div className="container"><br/><br/><br/><br/><br/><div className="row">{status}</div></div>
    }
}

export default Payment