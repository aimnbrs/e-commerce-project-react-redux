import React, { Fragment }from "react";



function ProductBox({ model, price, url }) {
  
  return (
    <Fragment>
        <div class="img">
          <div class="imgbtn">
            <img id="asd" src={url} alt="" />
            <a  class="butn" >
              Shop Now
            </a>
          </div>
          <div class="heartlk">
            <a href="#">{model}</a>
            <span>
              <a href="#">
                <i class="far fa-heart fa-lg"></i>
              </a>
            </span>
          </div>
          <p>{price}</p>
        </div>
    </Fragment>
  );
}

export default ProductBox;
