import userConst from "./userConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: userConst.SIGNIN_REQUEST });
  console.log(store.getState());
  try {
    let { data } = await axios.get(
      "http://localhost:5000/user/signin?email=" +
        email +
        "&password=" +
        password
    );
    console.log("userAction", data);
    dispatch({ type: userConst.SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
    console.log(store.getState());
  } catch (error) {
    dispatch({ type: userConst.SIGNIN_FAILURE, payload: error.message });
    console.log(store.getState());
  }
};

const signUp = (name, email, password) => async (dispatch) => {
  const userQuery = { name, email, password };
  dispatch({ type: userConst.SIGNUP_REQUEST });
  try {
    let { data } = await axios.post(
      "http://localhost:5000/user/signup",
      userQuery
    );
    console.log("userAction", data);
    dispatch({ type: userConst.SIGNUP_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
    console.log("signupaction", store.getState());
  } catch (error) {
    dispatch({ type: userConst.SIGNUP_FAILURE, payload: error.message });
    console.log(store.getState());
  }
};

const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: userConst.SIGNOUT });
    Cookie.remove("userInfo");
    console.log(store.getState());
  } catch (error) {
    dispatch({ type: userConst.SIGNOUT_FAILURE, payload: error.message });
    console.log("signoutFAILURE", store.getState());
  }
};

const update = (id) => async (dispatch) => {
  dispatch({ type: userConst.UPDATE_REQUEST });
  try {
    let { data } = await axios.patch("http://localhost:5000/user:" + id);
    console.log("userAction", data);
    dispatch({ type: userConst.UPDATE_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
    console.log("UPDATEaction", store.getState());
  } catch (error) {
    dispatch({ type: userConst.UPDATE_FAILURE, payload: error.message });
    console.log(store.getState());
  }
};

export { signIn, signOut, signUp, update };
