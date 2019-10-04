import React from 'react';
import {  Link } from 'react-router-dom';
class Home extends React.Component{

    render(){

        return <section id="home" className="home">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <h1>welcome to awesome pizzaa..</h1>
                    <h2>hot &amp; spicy</h2>
                    <Link  to={`/gallery`} className="btn btn-default">order now</Link>
            
                </div>
            </div>
        </div>		
    </section>
    }
}

export default Home;