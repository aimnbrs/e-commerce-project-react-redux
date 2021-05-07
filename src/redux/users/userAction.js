import userConst from "./userConstant";
import axios from "axios";
import store from "./../../store";
import Cookie from "js-cookie";

const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: userConst.SIGNIN_REQUEST });
  const token =  Cookie.get("token")
  console.log("emailandpass", email, password);
  console.log(store.getState());
  try {
    let response = await axios.get(
      "http://localhost:5000/user/signin?email=" +
        email +
        "&password=" +
        password,
      {
        headers: {authorization : `Bearer ${token}`},
        withCredentials: true,
      }
    );
    console.log("userAction",typeof response.data, "response.ok = ");
    if (typeof response.data == "string" ) {
      console.log("this is response signin",response.data);
      const errorMessage = response.data.split(' ').slice(3).join(' ')
      if (response.data.split(" ")[0] == "Error")  throw new Error(errorMessage);
    } else {
      let { data } = response;
      dispatch({ type: userConst.SIGNIN_SUCCESS, payload: data });
      Cookie.set("userInfo", JSON.stringify(data));
      console.log(store.getState());
    }
  } catch (error) {
    console.log("signinerror", store.getState(), error);
    dispatch({ type: userConst.SIGNIN_FAILURE, payload: error.message });
    console.log("signinerror", store.getState(), error);
  }
};

const signUp = (name, email, password) => async (dispatch) => {
  const userQuery = { name, email, password };
  dispatch({ type: userConst.SIGNIN_REQUEST });
  try {
    let { data } = await axios.post(
      "http://localhost:5000/user/signup",
      userQuery,
      {
        headers: {
          Authorization: "Bearer" + Cookie.get("token"),
        },
        withCredentials: true,
      }
    );
    // console.log("userSignUp", data.includes("Error"));
    
    if (typeof data === "string") {
      if(data.includes("E11000")) {throw "Email has been already taken"}
      else {
        throw data
      };
    } else {
      dispatch({ type: userConst.SIGNIN_SUCCESS, payload: data });
      console.log("signupSeccess", store.getState());
    }
  } catch (error) {
    dispatch({ type: userConst.SIGNIN_FAILURE, payload: error });
    console.log("failer", store.getState(), error);
  }
};

const signOut = () => async (dispatch) => {
  try {
    Cookie.remove("token");
    dispatch({ type: userConst.SIGNOUT });
  } catch (error) {
    dispatch({ type: userConst.SIGNOUT_FAILURE, payload: error.message });
    console.log("signoutFAILURE", store.getState());
  }
};

const update = (id) => async (dispatch) => {
  dispatch({ type: userConst.UPDATE_REQUEST });
  try {
    let { data } = await axios.patch("http://localhost:5000/user:" + id, {
      headers: {
        Authorization: "Bearer" + Cookie.get("token"),
      },
    });
    console.log("userAction", data);
    dispatch({ type: userConst.UPDATE_SUCCESS, payload: data });
    console.log("UPDATEaction", store.getState());
  } catch (error) {
    dispatch({ type: userConst.UPDATE_FAILURE, payload: error.message });
    console.log(store.getState());
  }
};

export { signIn, signOut, signUp, update };
