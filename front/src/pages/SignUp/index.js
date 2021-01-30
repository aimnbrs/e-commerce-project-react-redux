import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {signUp} from "../../redux/users/userAction";
import store from "../../store";

import "./index.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password));
    console.log("componentfunction", store.getState());
  };

  return (
    <Fragment>
      <div className="main">
        <p className="sign" align="center">
          Sign Up
        </p>
        <form onSubmit = {submitHandler} className="form1">
          <input
            onChange = {(e)=> setName(e.target.value)}
            className="pass"
            type="username"
            align="center"
            placeholder="Username"
          />
          <input
            onChange = {(e)=> setEmail(e.target.value)}
            className="un"
            type="text"
            align="center"
            placeholder="Email"
          />
          <input
            onChange = {(e)=> setPassword(e.target.value)}
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <button className="submit" align="center">
            Sign up
          </button>
        </form>
      </div>
    </Fragment>
  );
}
