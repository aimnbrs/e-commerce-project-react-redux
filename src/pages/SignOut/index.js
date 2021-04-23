import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import {signOut} from "../../redux/users/userAction";
import { useHistory } from "react-router-dom";
import store from "../../store";

import "./index.css";


export default function SignOut() {

 
  const dispatch = useDispatch();
  const history = useHistory();
 
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signOut());
    history.push('/Home')
    console.log("componentfunction", store.getState());
  };

  return (
    <Fragment>
      <div className="mainout">
        <p className="signout" align="center">
          Sign out
        </p>
          <button onClick = {submitHandler} className="submitout" align="center">
            Sign out
          </button>
      </div>
    </Fragment>
  );
}
