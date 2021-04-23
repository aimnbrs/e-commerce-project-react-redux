import React, { Fragment } from "react";
import "./index.css";

export default function ProductMin({ model, price, url }) {
  
  return (
    <Fragment>
      <div className="productMinSection">
        
        <div className="productMin">
          <img src={url} />
          <div className="productMinDetails">
            <h4>{ model }</h4>
            <span>{ price } $</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
