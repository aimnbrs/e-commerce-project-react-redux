import React, { Fragment }from "react";
import product01 from './product-1.jpg';


function ProductBox({ changeSummary }) {
  
  return (
    <Fragment>
        <div class="img">
          <div class="imgbtn">
            <img id="asd" src={product01} alt="" />
            <a  class="butn" onClick={()=> changeSummary()}>
              Shop Now
            </a>
          </div>
          <div class="heartlk">
            <a href="#">T-shirt</a>
            <span>
              <a href="#">
                <i class="far fa-heart fa-lg"></i>
              </a>
            </span>
          </div>
          <p>$16</p>
        </div>
    </Fragment>
  );
}

export default ProductBox;
