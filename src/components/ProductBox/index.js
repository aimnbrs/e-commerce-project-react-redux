import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatOrder, deleteOrder } from "../../redux/orders/orderAction";
import { DispatchSwitch, switchConsts } from "../Navbar/switchContext";
import ModalPopUp from "react-modal";
import "./index.css";
import Button from "../../microComponents/button";

function ProductBox({ model, price, url, productId }) {
  const dispatchContext = React.useContext(DispatchSwitch);
  const sign = useSelector((state) => state.sign);
  const dispatch = useDispatch();

  const { userInfo } = sign || {};
  const orderlist = useSelector((state) => state.orders);
  const { orders } = orderlist || {};

  const find = orders
    ? orders.find((item) => item.product._id === productId)
    : null;
  const [isChecked, setIsChecked] = useState(false);
  console.log("this is find", find);
  useEffect(() => {
    setIsChecked(!(find === undefined));
    console.log("hereorders", orders);
  }, [find]);

  const [popUpvisibility, setPopUpvisibility] = useState(false);
  const togglePopUp = () => {
    setPopUpvisibility(!popUpvisibility);
  };
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
              {userInfo && (
                <i
                  style={{ color: isChecked && "yellow" }}
                  onClick={(e) => {
                    e.preventDefault();
                    !(find === undefined)
                      ? dispatch(deleteOrder(find._id))
                      : dispatch(creatOrder(userInfo._id, productId));
                      (find === undefined) && togglePopUp()
                  }}
                  class="far fa-heart fa-lg"
                ></i>
              )}
            </a>
          </span>
        </div>
        <p>{price} $</p>

        <ModalPopUp
          isOpen={popUpvisibility}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => togglePopUp()}
          closeTimeoutMS={400}
          className="galeryModalPopUp"
          overlayClassName="galeryOverlayPopUp"
          style={{
            overlay: {
              zIndex: 22,
            },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          >
            <path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z" />
          </svg>

          <h2>{model}</h2>
          <p>is added to ListCart</p>
          <div className="popUpButtonOk">
            <span onClick={()=>togglePopUp()}>
            <Button
              
              buttonWidth={"80px"}
              buttonBgColor={"#0074D9"}
            >
              OK
            </Button>
            </span>
 
          </div>
        </ModalPopUp>
      </div>
    </Fragment>
  );
}

export default ProductBox;
