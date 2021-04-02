import React, { Fragment } from "react";
import { DispatchSwitch, switchConsts } from "../Navbar/switchContext";

function ProductBox({ model, price, url }) {
  const dispatchContext = React.useContext(DispatchSwitch);

  return (
    <Fragment>
      <div class="img">
        <div class="imgbtn">
          <img id="asd" src={url} alt="" />
          <a
            class="butn"
            onClick={() =>
              dispatchContext({ type: switchConsts.productDetailsToggelSwitch })
            }
          >
            Shop Now
          </a>
        </div>
        <div class="heartlk">
          <a href="#" style={{ cursor: "default" }}>
            {model}
          </a>
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
