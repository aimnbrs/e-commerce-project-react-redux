import React, { Fragment, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./index.css";
import logo from "./logo-01.png";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

function Navbar(props) {
  const refList = useRef(null);
  const history = useHistory();
  const isSmallDScreen = useMediaQuery({ query: "(max-width:915px)" });
  const signin = useSelector((state) => state.signin);
  //is the state is empty return signin else return userinfo object of sign, you will have
  //problem destructering of a null value
  let { userInfo } = signin || {};
  userInfo && (userInfo = userInfo[0]);

  // the menuList impeliment
  //  in a different branch of the dome whenevre the screenSize changes
  const menuList = (
    <ul className="menu" ref={refList}>
      <Link to="Home">
        <li>Home</li>
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
  );

  //log signin/signup or signout depending on the user connection state, same for the profile
  let signType = null;
  let profile = null;
  if (userInfo) {
    signType = <Link to="/SignOut">Sign out</Link>;
    profile = <Link to="Shop">{userInfo.name}</Link>;
  } else {
    profile = null;
    signType = (
      <>
        <Link to="/SignIn">Sign in</Link>
        <Link to="/SignUp">sign up</Link>
      </>
    );
  }

  
 
  // color changing of the menu whenever the pages changes
  useEffect(() => {
    changePageTitelColor();
    return history.listen(() => {
      changePageTitelColor();
    });
  }, [history.location.pathname, isSmallDScreen]);

  const changePageTitelColor = () => {
    //set the color of the mainPages items as the url of the page
    for (const element of refList.current.children) {
      element.innerText === history.location.pathname.split("/")[1]
        ? (element.style.color = "#8E3DF7")
        : (element.style.color = "#3B3737");
    }
  };

  return (
    <Fragment>
      <nav className="bg-nv">
        <nav className="ltl-nv">
          <div className="navContainer">
            <div className="paraNav">
              <p>Free shipping for standard order over $100</p>
            </div>
            <div className="rght">
              {profile}
              <a href="#">Help {"&"} FAQs</a>
              {signType}
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
          <a>
            <i className="fas fa-shopping-cart fa-lg"></i>
          </a>
          <a>
            <i className="far fa-heart fa-lg"></i>
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
