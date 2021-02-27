import userConst from "./userConstant";

function signReducer(state = {}, action) {
  switch (action.type) {
    case userConst.SIGNIN_REQUEST:
      return { loading: true };
    case userConst.SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConst.SIGNIN_FAILURE:
      return { err: action.payload };
    case userConst.SIGNOUT:
      return null;
    default:
      return state;
  }
}

// function signUpReducer(state = {}, action) {
//   switch (action.type) {
//     case userConst.SIGNUP_REQUEST:
//       return { loading: true };
//     case userConst.SIGNUP_SUCCESS:
//       return { loading: false, userInfo: action.payload };
//     case userConst.SIGNUP_FAILURE:
//       return { loading: false, err: action.payload };
//     default:
//       return state;
//   }
// }

function updateReducer(state = {}, action) {
  switch (action.type) {
    case userConst.UPDATE_REQUEST:
      return { loading: true };
    case userConst.UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConst.UPDATE_FAILURE:
      return { err: action.payload };
    default:
      return state;
  }
}

export { signReducer, updateReducer };
