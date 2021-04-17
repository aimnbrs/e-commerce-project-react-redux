import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductBox from "../ProductBox";
import ReactModal from 'react-modal';
import 'react-spring-modal/styles.css';
import "./index.css";
import ProductionDetails from "../ProductionDetails";
import { StateSwitch, DispatchSwitch, switchConsts } from "../Navbar/switchContext";
import Button from "../../microComponents/button";
import Loader from "../../microComponents/loader";




export default function ImageGalery() {
  const data = useSelector((state) => state.productCollection);
  const { loading, products, err } = data;

  const stateContext = React.useContext(StateSwitch)
  const dispatchContext = React.useContext(DispatchSwitch);
  let modalVisibility = stateContext.productDetailsToggel
  
  
  return (
 
    <Fragment>
 
  {loading ? (
    <Loader></Loader>
      ) : err ? (
        <div>{err} </div>
      ) : (
        <>
      <div className="mainGridImage">
      <ReactModal 
     
      isOpen = {modalVisibility}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>dispatchContext({ type: switchConsts.productDetailsToggelSwitch })}
      closeTimeoutMS={400}
 

      style={{
        overlay: {
          backgroundColor:'rgba(0, 0, 0, 0.75)' ,
          zIndex : 22
         },
      }}
      >
      <ProductionDetails/>

      </ReactModal>
      <div className="grid-img">
        <div className="imgg" id="imgg">
          {products.map((item) => (
            <ProductBox  price={item.price} model={item.model} url={item.url} />
          ))}
        </div>
      </div>
      </div>

      <div className="buttonContainer">
        <div className="insideButton">
        <Button
        buttonWidth="150px"
        buttonColor="#201B1B"
        buttonBgColor='#e6e6e6'
        >
        ADD PRODUCT
        </Button>
        <Button
          buttonWidth="150px"
          buttonColor="#201B1B"
          buttonBgColor='#e6e6e6'
        >
        LOAD MORE
        </Button>
      </div>
        </div>
       </>)}


    </Fragment>
  );
}
