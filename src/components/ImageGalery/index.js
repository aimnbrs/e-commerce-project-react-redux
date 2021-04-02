import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductBox from "../ProductBox";
import ReactModal from 'react-modal';
import 'react-spring-modal/styles.css';
import "./index.css";
import ProductionDetails from "../ProductionDetails";
import { StateSwitch, DispatchSwitch, switchConsts } from "../Navbar/switchContext";




export default function ImageGalery() {
  const data = useSelector((state) => state.productCollection);
  const { loading, products, err } = data;

  const stateContext = React.useContext(StateSwitch)
  const dispatchContext = React.useContext(DispatchSwitch);
  let modalVisibility = stateContext.productDetailsToggel

  return (
    <Fragment>

      <div className="mainGridImage">
      <div className="grid-img">
        <div className="imgg" id="imgg">
          {products.map((item) => (
            <ProductBox  price={item.price} model={item.model} url={item.url} />
          ))}
        </div>
      </div>
      </div>

      <div className="btn" id="butn-btnfxd">
        <a className="butn btnfxd">ADD PRODUCT</a>
        <a className="butn btnfxd">LOAD MORE</a>
      </div>
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
      content : {opacity : modalVisibility ? 1 : 0, transition: 'opacity 0.4s'} 
      }}
      >
      <ProductionDetails/>

      </ReactModal>

    </Fragment>
  );
}
