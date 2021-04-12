import userConst from "./userConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: userConst.SIGNIN_REQUEST });
  console.log(store.getState());
  try {
    let response  = await axios.get(
      "http://localhost:5000/user/signin?email=" +
        email +
        "&password=" +
        password
    );
    console.log("userAction", response.data,"response.ok = ",response.ok);
    if (response.status<300 && response.data=='') {
      throw new Error(response.status);
    } else {
      let { data } = response;
      dispatch({ type: userConst.SIGNIN_SUCCESS, payload: data[0] });
      Cookie.set("userInfo", JSON.stringify(data));
      console.log(store.getState());
    }
  } catch (error) {
    console.log("signinerror",store.getState(),error);
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    dispatch({ type: userConst.SIGNIN_FAILURE, payload: message });
    console.log("signinerror",store.getState(),error);
  }
};

const signUp = (name, email, password) => async (dispatch) => {
  const userQuery = { name, email, password };
  dispatch({ type: userConst.SIGNUP_REQUEST });
  try {
    let response = await axios.post(
      "http://localhost:5000/user/signup",
      userQuery
    );
    console.log("userSignUp", response);
    if (response.status<300 && response.data=='') {
      throw new Error(response.status);
    } else {
      let { data } = response;
      dispatch({ type: userConst.SIGNIN_SUCCESS, payload: data });
      console.log("signupSeccess", store.getState());
    }
   
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({ type: userConst.SIGNUP_FAILURE, payload: message });
    console.log('failer',store.getState(),error);
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
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({ type: userConst.UPDATE_FAILURE, payload: message });
    console.log(store.getState());
  }
};

export { signIn, signOut, signUp, update };
