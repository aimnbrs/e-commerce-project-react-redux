import React , { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import logo from './logo-01.png';


function  Navbar(props)  {
    return (
        <Fragment>
            <nav className="ltl-nv">
        <p>Free shipping for standard order over $100</p>
        <div className="rght">
            <a href="#">Help {'&'} FAQs</a>
            <Link to="/SignIn">Sign in</Link>
            <Link to="/SignUp">sign up</Link>
            <a href="#">EN</a>
            <a href="#">USD</a>
        </div>
    </nav>
    <nav className="bg-nv">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="menu">
            <Link to="/"><li>Home</li></Link>
            <Link to="Shop"><li>Shop</li></Link>
            <Link to="Features"><li>Features</li></Link>
            <Link to="blog"><li>Blog</li></Link>
            <Link to="About"><li>About</li></Link>
            <Link to="Contact"><li>Contact</li></Link>
        </ul>
        <div className="mn-icns">
            <Link to="Production"><i className="fas fa-search fa-lg"/></Link>
            <a href="#"><i className="fas fa-shopping-cart fa-lg"></i></a>
            <a href="#"><i className="far fa-heart fa-lg"></i></a>
        </div>
    </nav>
        </Fragment>
    );
}


export default Navbar;