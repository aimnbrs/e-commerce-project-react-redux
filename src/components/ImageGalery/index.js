import React, { Fragment } from "react";
import Cookie from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import ProductBox from "../ProductBox";
import "./index.css";

export default function ImageGalery() {
  
  const data = useSelector(state => state.productCollection) 
  const { loading, products, err } = data;
  console.log("galerystore", products)

  return (
    <Fragment>
      <div className="grid-img">
        <div className="imgg" id="imgg">
          {
              products.map((item) => (
                  <ProductBox
                  price={item.price}
                  model={item.model} 
                  url={item.url}
                  />
                
              ))
          }
        </div>
      </div>
      <div className="btn" id="butn-btnfxd">
      <a className="butn btnfxd">ADD PRODUCT</a>
      <a className="butn btnfxd">LOAD MORE</a>
      </div>
    </Fragment>
  );
}
