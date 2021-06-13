import React, { Component } from 'react';
import "./style.css"
class Header extends Component {
    render() {
        return (
            <div className="maindiv">
            <div className="organicdiv"> organic </div>
            <ul className="navbar">
            <li className="home">Home</li>
            <li className="products">Products</li>
            <li className="blog">Blog</li>
            <li className="aboutus">About Us</li>
             </ul>
            </div>
        )
    }
}

export default Header
