import userConst from "./userConstant";

function signInReducer(state = { }, action) {
  switch (action.type) {
    case userConst.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConst.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case userConst.SIGNIN_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case userConst.SIGNOUT:
      return null;
    default:
      return state;
  }
}

function signUpReducer(state = {}, action) {
  switch (action.type) {
    case userConst.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConst.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case userConst.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
}


function updateReducer(state = {}, action) {
  switch (action.type) {
    case userConst.UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConst.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case userConst.UPDATE_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}

export { signInReducer, signUpReducer, updateReducer };
