import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return <section className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                </button>
                <Link to={"/"} className="navbar-brand">awesome pizzaa..</Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to={"/"} className="smoothScroll">home</Link></li>
                    <li><Link to={"/gallery"} className="smoothScroll">gallery</Link></li>
                    <li><Link to={"/special"} className="smoothScroll">special menu</Link></li>
                    <li><Link to={"/contact"} className="smoothScroll">contact us</Link></li>
                </ul>
            </div>
        </div>
    </section>
    }
}


export default Header;