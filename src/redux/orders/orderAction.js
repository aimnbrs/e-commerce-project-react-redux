import orderConst from "./orderConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";



const orderCollection = (user_id) => async (dispatch) => {
  const token =  Cookie.get("token")
 
  console.log('this is token action',token);
  dispatch({ type: orderConst.ORDERCOLLECTION_REQUEST });
  // console.log("ORDERCOLLECTION_REQUEST ", store.getState());
  try {
    let { data } = await axios.get("http://localhost:5000/order", {
      params: { user_id },
       headers: {authorization : `Bearer ${token}`} 
    });
    console.log("orderCollectionAction", data);
    if (typeof data == "string")  throw new Error(data.split(' ').slice(3).join(' '))

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
  // const token = Cookie.get("token")
  try {
    let { data } = await axios.post("http://localhost:5000/order", orderQuery, {
      headers:  {authorization : `Bearer ${Cookie.get("token")}`},
    });
    console.log("creatorderAction", data);
  
    if (typeof data == "string")  throw new Error(data.split(' ').slice(3).join(' '))

    dispatch({ type: orderConst.CREATORDER_SUCCESS, payload: data });
    console.log("creatorderStore", store.getState());
  } catch (error) {
    dispatch({
      type: orderConst.CREATORDER_FAILURE,
      payload: error.message,
    });
    console.log("errorORDER", store.getState());
  }
};

const updateOrder = (valueUpate, orderId) => async (dispatch) => {
  dispatch({ type: orderConst.ORDERCOLLECTION_REQUEST });
  try {
    let { data } = await axios.patch(
      "http://localhost:5000/order/" + orderId,
      { valueUpate },
      {
        headers: {authorization : `Bearer ${Cookie.get("token")}`},
      }
    );
    console.log("updateorderAction", data);
        if (typeof data == "string")  throw new Error(data.split(' ').slice(3).join(' '))

    dispatch({ type: orderConst.UPDATEORDER_SUCCESS, payload: data });
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
    let { data } = await axios.delete("http://localhost:5000/order/" + id, {
      headers: {authorization : `Bearer ${Cookie.get("token")}`},
    });
    console.log("deleteorder", data);
    if (typeof data == "string")  throw new Error(data.split(' ').slice(3).join(' '))

    dispatch({ type: orderConst.DELETEORDER_SUCCESS, payload: data });
    console.log("deleteorderStore", store.getState());
  } catch (error) {
    dispatch({
      type: orderConst.DELETEORDER_FAILURE,
      payload: error.message,
    });
    console.log("errorORDER", store.getState());
  }
};

export { orderCollection, creatOrder, updateOrder, deleteOrder };
