import React,{Component} from 'react'
import './contact.css'
import {  Link } from 'react-router-dom';
import axios from 'axios'
import {API_BASE_URL} from '../../config/config'

class Contact extends Component{
    constructor(){
        super()
        this.state={
                name:"",
                email:"",
                message:"",
                query:true
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

      handleSubmit=()=>{
        let contactForm = {
           "name": this.state.name,
            "email": this.state.email,
            "msg": this.state.message
        }
       //console.log("contactForm",contactForm)
         axios.post(API_BASE_URL+'contacts',contactForm).then(
             (resp)=>{
                 //console.log("resp post",resp)
                if(resp.data.status){
                    this.setState({
                        query:false
                    });
                }
             },(err)=>{
               //console.log("submit error",err)
            })

    }
    render(){
        let queryForm = null;
        if(this.state.query)
        queryForm=<div>
       
        <form className="form-group">
        <div className="">
        <p><i className="fa fa-user"></i>Name</p>
        <input type="text" className="form-control"  name="name"  value={this.state.name}
        onChange={this.handleInputChange}  />
        </div>
        <div className="submit">
        <p><i className="fa fa-envelope"></i>Email</p>
        <input type="text" className="form-control"  name="email"  value={this.state.email}
        onChange={this.handleInputChange}  />
        </div>
      <div className="submit">
      <p><i className="fa fa-comments-o"></i>Message/Feedback</p>
      <textarea type="text" className="form-control" name="message" value={this.state.message}
      onChange={this.handleInputChange}  ></textarea>
      </div>
      <div className="submit">
      <button type="button"  className="btn btn-success" onClick={this.handleSubmit} >submit</button>
      </div>
      
      </form>
        </div>
        else 
        queryForm = <p>Thanks for your query/feedback</p>
        return <footer className="parallax-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-3 wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="heading">Contact Us</h2>
               {queryForm}
                </div>
                <div className="col-md-3 col-sm-3 wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="heading">Contact Info.</h2>
                    <div className="">
                        <p><i className="fa fa-phone"></i> Phone</p>
                        <h4>+91-7972393094</h4>
                    </div>
                    <div className="address">
                        <p><i className="fa fa-map-marker"></i> Our Location</p>
                        <h4>Hyderabad India</h4>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="heading">Open Hours</h2>
                        <p>Sunday <span>10:30 AM - 10:00 PM</span></p>
                        <p>Mon-Fri <span>9:00 AM - 8:00 PM</span></p>
                        <p>Saturday <span>11:30 AM - 10:00 PM</span></p>
                </div>
                <div className="col-md-2 col-sm-2 wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="heading">Follow Us</h2>
                    <ul className="social-icon">
                        <li><Link to={"/external/https://www.facebook.com/awesome-pizza"} className="fa fa-facebook wow bounceIn" data-wow-delay="0.3s"></Link></li>
                        <li><Link to={"/external/https://www.twitter.com/awesome-pizza"} className="fa fa-twitter wow bounceIn" data-wow-delay="0.6s"></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    }
}


export default Contact;