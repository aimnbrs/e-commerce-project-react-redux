import React, { Fragment, useEffect } from "react";
import ShopingItemMemo from "../../components/ShopingItem";
import Button from "../../microComponents/button";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { orderCollection } from "../../redux/orders/orderAction";
export default function Features() {
  const orderlist = useSelector((state) => state.orders);
  const sign = useSelector((state) => state.sign);
  const { userInfo } = sign;
  const { orders } = orderlist || [];
  const dispatch = useDispatch();
  // useEffect(() => {
  //   userInfo && dispatch(orderCollection(userInfo._id));
  // }, [userInfo]);
console.log("orderchang",orders);
  let total =
    orders &&
    orders.map((a) => a.product.price * a.quantity).reduce((a, b) => a + b, 0);
  return (
    <Fragment>
      <div className="ancre">
        Home <span> {">"}</span> Shoping Cart
      </div>

      <div className="featuresSection">
        <div>
          {orders && orders.length ? (
            orders.map((item) => (
              <ShopingItemMemo
                price={item.product.price}
                model={item.product.model}
                url={item.product.url}
                quantity={item.quantity}
                orderId={item._id}
                user_id={item.user_id}
                key= { item._id }
              />
            ))
          ) : userInfo ? (
            <h1>you have no orders in your cart</h1>
          ) : (
            <h1>signUp to choose your own list of items</h1>
          )}
        </div>

        <div
          className="mainOptionCart"
          style={{ display: orders && orders.length ? "block" : "none" }}
        >
          <h2>CART TOTALS</h2>
          <div>
            <p>
              Subtotal: <span>{total}$</span>
            </p>
          </div>
          <div className="optionsItem">
            <div>
              <p>Shipping:</p>
            </div>

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
              <Button>UPDATE TOTALS</Button>
            </div>
          </div>
          <div>
            <h2>
              Total : <span>{total} $</span>
            </h2>
            <Button>PROCEED TO CHECKOUT</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
