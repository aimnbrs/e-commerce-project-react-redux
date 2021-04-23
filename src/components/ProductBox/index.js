import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatOrder } from "../../redux/orders/orderAction";
import { DispatchSwitch, switchConsts } from "../Navbar/switchContext";


function ProductBox({ model, price, url, productId }) {
  const dispatchContext = React.useContext(DispatchSwitch);
  const sign = useSelector((state) => state.sign);
  let {  userInfo } = sign || {};
  
  const dispatch = useDispatch();

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
              { userInfo && <i onClick = {(e)=> {
                e.preventDefault();
                dispatch(creatOrder(userInfo._id ,productId));
                console.log('dispatched');
              }} class="far fa-heart fa-lg"></i>}
            </a>
          </span>
        </div>
        <p>{price} $</p>
      </div>
    </Fragment>
  );
}

export default ProductBox;
