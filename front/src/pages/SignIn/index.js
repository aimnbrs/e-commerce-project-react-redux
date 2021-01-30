import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {signIn} from "../../redux/users/userAction";
import store from "../../store";

import "./index.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
    console.log("componentfunction",store.getState());
  };

  return (
    <Fragment>
      <div className="main">
        <p className="sign" align="center">
          Sign In
        </p>
        <form onSubmit={submitHandler} className="form1">
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit" align="center" type="submit">
            Sign In
          </button>
          <p className="forgot" align="center">
            <a href="#" />
            Forgot Password?
          </p>
        </form>
      </div>
    </Fragment>
  );
}
