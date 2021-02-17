import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "./logo-01.png";
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom'

function Navbar(props) {
  const refList = useRef(null);
  const history = useHistory() 

// color changing of the menu whenever the pages changes
  useEffect(() => {
     return history.listen((location) => { 
      changePageTitelColor() 
     }) 
  },[history.location.pathname]) 

  const changePageTitelColor = ()=> {
    
    for (const element of refList.current.children) {
      element.innerText === history.location.pathname.split("/")[1] ? 
      element.style.color = "#8E3DF7" : element.style.color = "#3B3737";
    }

  }

  // the menuList impeliment
  //  in a different branch of the dome whenevre the screenSize changes
  const isSmallDScreen =  useMediaQuery({ query: "(max-width:915px)" })
  const menuList = 
  <ul className="menu" ref={refList}>
  <Link  to="Home">
    <li >Home</li>
  </Link>
  <Link to="Shop">
    <li>Shop</li>
  </Link>
  <Link to="Features">
    <li>Features</li>
  </Link>
  <Link to="Blog">
    <li>Blog</li>
  </Link>
  <Link to="About">
    <li>About</li>
  </Link>
  <Link to="Contact">
    <li>Contact</li>
  </Link>
</ul>

console.log(window.location.pathname);
  return (
    
    <Fragment>
   
      <nav className="bg-nv">
      <nav className="ltl-nv">
        <div className="navContainer">
          <div className="paraNav">
            <p>Free shipping for standard order over $100</p>
          </div>
          <div className="rght">
            <a href="#">Help {"&"} FAQs</a>
            <Link to="/SignIn">Sign in</Link>
            <Link to="/SignUp">sign up</Link>
            <a href="#">EN</a>
            <a href="#">USD</a>
          </div>
          {isSmallDScreen && menuList}
        </div>
      </nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {!isSmallDScreen && menuList}
        <div className="mn-icns">
          <Link to="Production">
            <i className="fas fa-search fa-lg" />
          </Link>
          <a href="#">
            <i className="fas fa-shopping-cart fa-lg"></i>
          </a>
          <a href="#">
            <i className="far fa-heart fa-lg"></i>
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
