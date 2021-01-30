import React, { Fragment } from "react";
import './index.css';
import itemcart from './item-cart-04.jpg';
export default function Features() {
  return (
    <Fragment>
      <div className="ancre">
        Home <span> {">"}</span> Shoping Cart
      </div>
      
        <div className="featuresSection">
          <div className="mainItemCart">
            <div className="mainPrice">
              <h5>PRODUCT</h5> <h5>PRICE</h5> <h5>QUANTITY</h5> <h5>TOTAL</h5>
            </div>
            <div className="itemCart">
              <div className="productName">
              <img src={itemcart} />
              <h4>Fresh Strawberries</h4>
              </div>  
              <span>$36.00</span>
              <div>
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <span>$49</span>
            </div>
          </div>
          <div className="mainOptionCart">
            <h2>CART TOTALS</h2>
            <div>
              <p>Subtotal: <span>94,99$</span></p>
            </div>
            <div className="optionsItem">
                <div><p>Shipping:</p></div>
              
              <div className="optionsItemDetails">
                <h4>
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </h4>
                <h5>CALCULATE SHIPPING</h5>
                <div className="inputs">
                <select>
                <option value="">Selecte a country...</option>
                <option value="">Canada</option>
                <option value="">USA</option>
                </select>
                <input placeholder="State / country" />
                <input placeholder="Postcode / zip" />
                </div>
                
                <button>UPDATE TOTALS</button>
              </div>
            </div>
            <div>
                <h2>
                  Total : <span>90$</span>
                </h2>
                <button>PROCEED TO CHECKOUT</button>
              </div>
          </div>
        </div>
      
    </Fragment>
  );
}
