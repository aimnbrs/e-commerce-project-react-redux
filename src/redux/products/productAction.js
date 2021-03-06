import productConst from "./productConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";

const productCollection = (
  color,
  style,
  status,
  price,
  category,
  model,
  sortPrice
) => async (dispatch) => {
  dispatch({ type: productConst.PRODUCTCOLLECTION_REQUEST });
  console.log("error", store.getState());
  try {
    let { data } = await axios.get("http://localhost:5000/product", {
      params: { color, style, status, price, category, model, sortPrice },
    });
    console.log("productCollectionAction", data);
    
      if (typeof data == "string")  throw new Error(data.split(' ').slice(3).join(' '))
    dispatch({ type: productConst.PRODUCTCOLLECTION_SUCCESS, payload: data });
    
    console.log(store.getState());
  } catch (error) {
    dispatch({
      type: productConst.PRODUCTCOLLECTION_FAILURE,
      payload: error.message,
    });
    console.log("error", store.getState());
  }
};

const creatProduct = (formData) => async (dispatch) => {
  // const productQuery = { category, model, price, color, status, style,imageFile };
  dispatch({ type: productConst.CREATPRODUCT_REQUEST });
  try {
    console.log("color",formData);
    console.log('file',formData);
    let { data } = await axios.post(
      "http://localhost:5000/product",
      formData,
      // {
      //   headers: {
 
          // Authorization: "Bearer" + Cookie.get("token"),
      //   },
      // }
    );
    console.log("creatProductAction", data);
    if (typeof data == "string")  throw new Error(data.split(' ').slice(3).join(' '))
    dispatch({ type: productConst.CREATPRODUCT_SUCCESS, payload: data });
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
    let { data } = await axios.patch("http://localhost:5000/product:" + id, {
      headers: {
        Authorization: "Bearer" + Cookie.get("token"),
      },
    });
    console.log("updateProductAction", data);
    const errorMessage = data.split(' ').slice(3).join(' ')
      if (data.split(" ")[0] == "Error")  throw new Error(errorMessage)
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
    let { data } = await axios.delete("http://localhost:5000/product:" + id, {
      headers: {
        Authorization: "Bearer" + Cookie.get("token"),
      },
    });
    console.log("deleteProduct", data);
    const errorMessage = data.split(' ').slice(3).join(' ')
      if (data.split(" ")[0] == "Error")  throw new Error(errorMessage)
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
