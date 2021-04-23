import orderConst from "./orderConstant";
import axios from "axios";
import store from "./../../store";


const orderCollection = (user_id) => async (dispatch) => {
  dispatch({ type: orderConst.ORDERCOLLECTION_REQUEST });
  // console.log("ORDERCOLLECTION_REQUEST ", store.getState());
  try {
    let { data } = await axios.get("http://localhost:5000/order", {
      params: { user_id },
    });
    console.log("orderCollectionAction", data);
    dispatch({ type: orderConst.ORDERCOLLECTION_SUCCESS, payload: data });
    console.log("orderCollectionActionStore", store.getState());
  } catch (error) {
    dispatch({
      type: orderConst.ORDERCOLLECTION_FAILURE,
      payload: error.message,
    });
    console.log("ORDERerror", store.getState());
  }
};

const creatOrder = (user_id, product, quantity) => async (dispatch) => {
  const orderQuery = { user_id, product, quantity };
  dispatch({ type: orderConst.CREATORDER_REQUEST });
  try {
    let { data } = await axios.post(
      "http://localhost:5000/order",
      orderQuery
    );
    console.log("creatorderAction", data);
    dispatch({ type: orderConst.CREATORDER_SUCCESS, payload: data  });
    console.log("creatorderStore", store.getState());
  } catch (error) {
    dispatch({
      type: orderConst.CREATORDER_FAILURE,
      payload: error.message,
    });
    console.log("errorORDER", store.getState());
  }
};

const updateOrder = (valueUpate, id) => async (dispatch) => {
  dispatch({ type: orderConst.ORDERCOLLECTION_REQUEST });
  try {
    let { data } = await axios.patch("http://localhost:5000/order/" + id
    , {valueUpate}
    );
    console.log("updateorderAction", data);
    dispatch({ type: orderConst.UPDATEORDER_SUCCESS, payload: data  });
    console.log("updateorderStoreSUCCESS", store.getState());
  } catch (error) {
    dispatch({
      type: orderConst.ORDERCOLLECTION_FAILURE,
      payload: error.message,
    });
    console.log("errorORDER", store.getState());
  }
};

const deleteOrder = (id) => async (dispatch) => {
  dispatch({ type: orderConst.DELETEORDER_REQUEST });
  try {
    let { data } = await axios.delete("http://localhost:5000/order/" + id);
    console.log("deleteorder", data);
    dispatch({ type: orderConst.DELETEORDER_SUCCESS , payload: data });
    console.log("deleteorderStore", store.getState());
  } catch (error) {
    dispatch({
      type: orderConst.DELETEORDER_FAILURE,
      payload: error.message,
    });
    console.log("errorORDER", store.getState());
  }
};

// const orderDisconnect = () => async (dispatch) => {
//   try {
//     dispatch({ type: orderConst.DISCONNECT });
//     console.log("DISCONNECTFAILURE", store.getState());
//   } catch (error) {
//     dispatch({ type: orderConst.DISCONNECT_FAILURE, payload: error.message });
//     console.log("DISCONNECTFAILURE", store.getState());
//   }
// };
export { orderCollection, creatOrder, updateOrder, deleteOrder };
