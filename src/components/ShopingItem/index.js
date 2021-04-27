import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import Button from "../../microComponents/button";
import { deleteOrder, updateOrder } from "../../redux/orders/orderAction";

import "./index.css";

function ShopingItem({ model, price, url, quantity, orderId }) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="mainItemCart">
        <div className="firstPart">
          <div className="mainPrice">
            <h5>PRODUCT</h5> <h5>PRICE</h5>
          </div>
          <div className="itemCart">
            <div className="productName">
              <img src={url} width="60" height="80" />
              <h4>{model}</h4>
            </div>
            <span>{price} $</span>
          </div>
        </div>
        <div className="secondePart">
          <div className="mainPrice">
            <h5>QUANTITY</h5> <h5>TOTAL</h5>
          </div>
          <div className="itemCart">
            <div className="quantity">
              <span
                onClick={() => {
                  quantity && dispatch(updateOrder(quantity -1, orderId));
                }}
              >
                -
              </span>
              <span>{quantity}</span>
              <span
                onClick={() => {
                  dispatch(updateOrder(quantity + 1, orderId));
              
                }}
              >
                +
              </span>
            </div>
            {quantity ? (
              <span>{price * quantity}</span>
            ) : (
              <div
                onClick={() => {
                  dispatch(deleteOrder(orderId));
                  ;
                }}
              >
                <Button
                  buttonBgColor={"#c0392b"}
                  onButtonColor={"#c0392b"}
                  onButtonBgColor={"white"}
                >
                  <i class="fa fa-trash fa-lg"></i>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

 const ShopingItemMemo = React.memo(ShopingItem);
 export default ShopingItemMemo