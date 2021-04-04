import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";
import "./index.css";
import logo from "./logo-01.png";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import Aside from "../Aside";
import { DispatchSwitch, switchConsts } from "./switchContext";

function Navbar(props) {
  const refList = useRef(null);
  const history = useHistory();
  const isSmallDScreen = useMediaQuery({ query: "(max-width:915px)" });
  const signin = useSelector((state) => state.sign);
  //is the state is empty return signin else return userinfo object of sign, you will have
  //problem destructering of a null value
  let { userInfo } = signin || {};

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
  //setting dispatch
  const dispatchContext = React.useContext(DispatchSwitch);

  // sticky position sconde nav
  const navRef = useRef();
  const [scroll, setScroll] = useState(window.pageYOffset);
  const [isTopZero, setIsTopZero] = useState(window.pageYOffset < 50);
  const monNav = useCallback(() => {
    setScroll(() => window.pageYOffset);
    setIsTopZero(window.pageYOffset < 50);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", monNav);
    navRef.current.style.top = `${
      window.pageYOffset <= 50 ? 50 - window.pageYOffset : 0
    }px`;
    return () => {
      window.removeEventListener("scroll", monNav);
    };
  }, [window.pageYOffset]);

  // animating nav when it get to top = 0
  const changeNav = () =>
    isTopZero
      ? { backgroundColor: "" }
      : { backgroundColor: "white", padding: " 8px 0 " };
  // Search pop up

  const [searchBar, setBearchBar] = useState(false);
  const toggleSearch = () => {
    setBearchBar(!searchBar);
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
        <div className="secondNav" ref={navRef} style={changeNav()}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {!isSmallDScreen && menuList}
          <div className="mn-icns">
            <a>
              <i onClick={toggleSearch} className="fas fa-search fa-lg" />
            </a>
            <a>
              <i
                onClick={() =>
                  dispatchContext({ type: switchConsts.sideToggelSwitch })
                }
                className="fas fa-shopping-cart fa-lg"
              ></i>
            </a>
            <a>
              <i className="far fa-heart fa-lg"></i>
            </a>
          </div>
        </div>
      </nav>
      <Aside />
      <Modal
        isOpen={searchBar}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => toggleSearch()}
        closeTimeoutMS={400}
        className="galeryModal"
        overlayClassName="galeryOverlay"
        style={{
          overlay: {
            zIndex: 22,
    transform : !searchBar ? 'translate(0, -50%)' : 'translate(0, 0)'
          },
   
    content: { opacity: searchBar ? 1 : 0, transition: "opacity 0.4s"},
        }}
      >
        <a href="#" class="closeSearch" onClick={() => toggleSearch()} />
        <input className="searchInput" placeholder="Search" />
      </Modal>
    </Fragment>
  );
}

export default Navbar;
