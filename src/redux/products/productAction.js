import productConst from "./productConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";

const productCollection = (
  color, style, status, price, category, model, sortPrice
) => async (dispatch) => {
  dispatch({ type: productConst.PRODUCTCOLLECTION_REQUEST });
  console.log("error", store.getState());
  try {
    let { data } = await axios.get("http://localhost:5000/product", {
      params: { color, style, status, price, category, model, sortPrice },
    });
    console.log("productCollectionAction", data);
    dispatch({ type: productConst.PRODUCTCOLLECTION_SUCCESS, payload: data });
    Cookie.set("productCollectionStore", JSON.stringify(data));
    console.log(store.getState());
  } catch (error) {
    dispatch({
      type: productConst.PRODUCTCOLLECTION_FAILURE,
      payload: error.message,
    });
    console.log("error", store.getState());
  }
};

const creatProduct = (category, model, price, url) => async (dispatch) => {
  const productQuery = { category, model, price, url };
  dispatch({ type: productConst.CREATPRODUCT_REQUEST });
  try {
    let { data } = await axios.post(
      "http://localhost:5000/user/product",
      productQuery
    );
    console.log("creatProductAction", data);
    dispatch({ type: productConst.CREATPRODUCT_SUCCESS });
    console.log("creatProductStore", store.getState());
  } catch (error) {
    dispatch({
      type: productConst.CREATPRODUCT_FAILURE,
      payload: error.message,
    });
    console.log("error", store.getState());
  }
};

const updateProduct = (id) => async (dispatch) => {
  dispatch({ type: productConst.UPDATE_REQUEST });
  try {
    let { data } = await axios.patch("http://localhost:5000/product:" + id);
    console.log("updateProductAction", data);
    dispatch({ type: productConst.UPDATEPRODUCT_SUCCESS });
    console.log("updateProductStore", store.getState());
  } catch (error) {
    dispatch({
      type: productConst.UPDATEPRODUCT_FAILURE,
      payload: error.message,
    });
    console.log("error", store.getState());
  }
};

const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: productConst.DELETEPRODUCT_REQUEST });
  try {
    let { data } = await axios.delete("http://localhost:5000/product:" + id);
    console.log("deleteProduct", data);
    dispatch({ type: productConst.DELETEPRODUCT_SUCCESS });
    console.log("deleteProductStore", store.getState());
  } catch (error) {
    dispatch({
      type: productConst.DELETEPRODUCT_FAILURE,
      payload: error.message,
    });
    console.log("error", store.getState());
  }
};

export { productCollection, creatProduct, updateProduct, deleteProduct };
