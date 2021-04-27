import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatOrder, deleteOrder, orderCollection } from "../../redux/orders/orderAction";
import { productCollection } from "../../redux/products/productAction";
import { DispatchSwitch, switchConsts } from "../Navbar/switchContext";


function ProductBox({ model, price, url, productId }) {
  const dispatchContext = React.useContext(DispatchSwitch);
  const sign = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  const {  userInfo } = sign || {};
  const orderlist = useSelector((state) => state.orders);
  const { orders } = orderlist || {};
  

  const find = orders ? orders.find((item)=>
  item.product._id === productId
) : null
const [isChecked, setIsChecked] = useState(false)
 console.log('this is find',find);
useEffect(() => {
  setIsChecked(!(find === undefined))
  console.log('hereorders',orders);
 }, [find])
   
 
   
console.log('isChecked', !(find === undefined) );

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
              {  userInfo && <i style = {{ color : isChecked  &&  "yellow" }} onClick = {(e)=> {
                e.preventDefault();
                !(find === undefined) ? dispatch(deleteOrder(find._id)) : dispatch(creatOrder(userInfo._id ,productId));
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
