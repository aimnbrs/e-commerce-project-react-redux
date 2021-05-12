import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductBox from "../ProductBox";
import ReactModal from "react-modal";
import ModalProduct from "react-modal";
import "react-spring-modal/styles.css";
import "./index.css";
import ProductionDetails from "../ProductionDetails";
import {
  StateSwitch,
  DispatchSwitch,
  switchConsts,
} from "../Navbar/switchContext";
import Button from "../../microComponents/button";
import Loader from "../../microComponents/loader";
import { orderCollection } from "../../redux/orders/orderAction";
import AddProduct from "../AddProduct";


export default function ImageGalery() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productCollection);
  const { loading, products, err } = data;

  const sign = useSelector((state) => state.sign);
  const { userInfo } = sign || {};
  const orderlist = useSelector((state) => state.orders);
  const { orders } = orderlist || {};

  useEffect(() => {
    userInfo && dispatch(orderCollection(userInfo._id));
  }, [userInfo]);
  console.log("orderchanggalary", orders);

  const stateContext = React.useContext(StateSwitch);
  const dispatchContext = React.useContext(DispatchSwitch);
  let modalVisibility = stateContext.productDetailsToggel;

  const [addProductVisibility, setAddProductVisibility] = useState(false);

  return (
    <Fragment>
      {loading ? (
        <Loader></Loader>
      ) : err ? (
        <div>{err} </div>
      ) : (
        <>
          <div className="mainGridImage">
            <ReactModal
              isOpen={modalVisibility}
              shouldCloseOnOverlayClick={true}
              onRequestClose={() =>
                dispatchContext({
                  type: switchConsts.productDetailsToggelSwitch,
                })
              }
              closeTimeoutMS={400}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.75)",
                  zIndex: 22,
                },
              }}
            >
              <ProductionDetails />
            </ReactModal>
            <div className="grid-img">
              <div className="imgg" id="imgg">
                {products.map((item) => (
                  <ProductBox
                    price={item.price}
                    model={item.model}
                    url={item.url}
                    productId={item._id}
                    key={item._id}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="buttonContainer">
            <div className="insideButton">
              <div
                onClick={() => setAddProductVisibility(!addProductVisibility)}
              >
                <Button
                  buttonWidth="150px"
                  buttonColor="#201B1B"
                  buttonBgColor="#e6e6e6"
                >
                  ADD PRODUCT
                </Button>
              </div>

              <Button
                buttonWidth="150px"
                buttonColor="#201B1B"
                buttonBgColor="#e6e6e6"
              >
                LOAD MORE
              </Button>
              <ModalProduct
                isOpen={addProductVisibility}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setAddProductVisibility(false)}
                closeTimeoutMS={400}
                style={{
                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    zIndex: 22,
                  },
                  content: {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection : "column",
                    alignItems: "center",
                    width: "400px",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  },
                }}
              >
                <AddProduct/>
              </ModalProduct>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
}
