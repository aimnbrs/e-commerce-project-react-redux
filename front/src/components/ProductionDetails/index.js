import React, { Fragment } from "react";
import "./index.css";
import productdetail01 from "./product-detail-01.jpg";
import productdetail02 from "./product-detail-02.jpg";
import productdetail03 from "./product-detail-03.jpg";

export default function ProductionDetails() {
  return (
    <Fragment>
      <div className="productionDetails"></div>
      <div className="mainProduction">
        <div className="imageDetails">
          <div className="imagesOptions">
            <div className="SecondaryImages">
              <img src={productdetail01} width="70px"/>
              <img src={productdetail02 } width="70px" />
              <img src={productdetail03} width="70px" />
            </div>
          <div className="currentImage"><img src={productdetail01} style={{width: "auto", height: "auto",maxWidth: "1000px",maxHeight: "650px"}} /></div>
          </div>
        </div>
        <div className="orderOptions">
            <div>
            <h3>Lightweight Jacket</h3>
          <span>$58.79</span>
          <p>
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat.
          </p>
            </div>
          <div className="SizeColorInput">
            <h4>Size</h4>
            <select>
              <option >Choose an option</option>
              <option >Size S</option>
              <option >Size M</option>
              <option >Size L</option>
              <option >Size XL</option>
            </select>
          </div>
          <div className="SizeColorInput">
            <h4>Color</h4>
            <select>
              <option >Choose an option</option>  
              <option >Red</option>
              <option>Bleu</option>
              <option >Black</option>
              <option >White</option>
            </select>
          </div>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <button>ADD TO CART</button>
        </div>
      </div>
      
    </Fragment>
  );
}
