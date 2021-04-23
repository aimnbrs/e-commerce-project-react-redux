import React, { Fragment, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux"
import ProductMin from "../ProductMin";
import { StateSwitch, DispatchSwitch, switchConsts } from "../Navbar/switchContext";
import { useTransition , animated } from "react-spring";
import "./index.css";
import Button from "../../microComponents/button";

function Aside(props) {
  const stateContext = React.useContext(StateSwitch)
  const dispatchContext = React.useContext(DispatchSwitch)
  let visible = stateContext.sideToggel

  const refAside = useRef(null);
  
  
  const transitions = useTransition(visible, null ,{
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    enter : {opacity : 1, transform: 'translate3d(-260px,0,0)', backgroundColor : "rgba(0, 0, 0, 0.7)"},
    leave : {opacity : 0, transform: 'translate3d(20px,0,0)'},
    
  })
 
  const orderlist = useSelector((state) => state.orders);
  const { orders } = orderlist || {};


  return transitions.map(({item, key, props})=>
  item &&
      <animated.aside key={key} style={props}
      onClick={(e)=>{
        if(e.target.tagName == "ASIDE" && (visible === true)){
          console.log(e.target.tagName);
          dispatchContext({ type : switchConsts.sideToggelSwitch })
        }
       
      }}
    >
     
  <div 
      className="listWishItems"
      >
        <div className="wishItems">
         {orders && orders.map((item,index) => (
           index < 3 &&
                  <ProductMin
                    price={item.product.price}
                    model={item.product.model}
                    url={item.product.url}
                  />
                ))}
        <div className="wishListPay">
            <h2>
              Total : <span>90$</span>
            </h2>
            <Button>VIEW CART</Button>
            <Button>CHECKOUT</Button>
          </div>
        </div>
      
     
      </div>
    
 
        
    </animated.aside>
 
  )   }   
  


export default Aside;
