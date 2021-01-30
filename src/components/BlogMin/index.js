import React, { Fragment } from 'react';
import './index.css';
import productmin01 from './product-min-01.jpg';


export default function ProductMin(props) {
    return (
      <Fragment>
  <div className="productMinSection">
              <h2>Featured Products</h2>
            <div className="productMin">
              <img src={ productmin01}/>
              <div className="productMinDetails">
                <h4>White Shirt With Pleat Detail Back</h4>
                <span>$19.00</span>
              </div>
            </div>
            
            </div>
      </Fragment>
    )
  }