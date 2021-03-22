import React, { Fragment, useState, useRef, useEffect } from "react";
import ProductMin from "../BlogMin";
import { StateSwitch, DispatchSwitch, switchConsts } from "../Navbar/switchContext";
import { useTransition , animated } from "react-spring";
import "./index.css";

function Aside(props) {
  const stateContext = React.useContext(StateSwitch)
  const dispatchContext = React.useContext(DispatchSwitch)
  let visible = stateContext.sideToggel

  const refAside = useRef(null);
  // let asideBg = refAside.current.style.backgroundColor
  
  const transitions = useTransition(visible, null ,{
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    enter : {opacity : 1, transform: 'translate3d(-260px,0,0)', backgroundColor : "rgba(0, 0, 0, 0.7)"},
    leave : {opacity : 0, transform: 'translate3d(20px,0,0)'},
    
  })
 
  return transitions.map(({item, key, props})=>
  item &&
      <animated.aside key={key} style={props}
      onClick={(e)=>{
        if(e.target.tagName == "ASIDE"){
          console.log(e.target.tagName);
          dispatchContext({ type : switchConsts.sideToggelSwitch })
        }
       
      }}
    >
     
  <div 
      className="listWishItems"
      >
        <div className="wishItems">
        <ProductMin />
        <ProductMin />
        <ProductMin />
        <div className="wishListPay">
            <h2>
              Total : <span>90$</span>
            </h2>
            <button>VIEW CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      
     
      </div>
    
 
        
    </animated.aside>
 
  )   }   
  


export default Aside;
