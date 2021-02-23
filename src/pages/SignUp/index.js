import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/users/userAction";
import store from "./../../store.js"
import "./index.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmited] = useState(false);

  //email and password validation
  let emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  let isValidePassword = passwordRegExp.test(password);
  let isValideEmail = emailRegExp.test(email);

  //despatch signin action if the input is valid
  const dispatch = useDispatch();
  const submitHandler = (e) => {
   
    e.preventDefault();
    name != "" && isValideEmail && isValidePassword
      ? (dispatch(signUp(name, email, password)))
      : setSubmited(true);
      console.log("store",store.getState())
      console.log("here",userInfo,err)
  };

  //set error
  const signin = useSelector((state) => state.signin);
  let { userInfo } = signin || {};
  userInfo && (userInfo = userInfo[0]);
  let { err } = signin || {};
  let isError = false;
  useEffect(() => {
    if (err) {
      userInfo.split(" ").includes("duplicate") ? isError = true : isError = false
    }
    return () => {};
  }, [err]);

  return (
    <Fragment>
      <div className="main">
        <p className="sign" align="center">
          Sign Up
        </p>
        <form onSubmit={submitHandler} className="form1">
          <input
            onChange={(e) => setName(e.target.value)}
            className="pass"
            type="username"
            align="center"
            placeholder="Username"
          />
          {!name && submited && (
            <p style={{ color: "red" }} className="sign" align="center">
              name is empty
            </p>
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="un"
            type="text"
            align="center"
            placeholder="Email"
          />
          {!isValideEmail && submited && (
            <p className="sign" align="center" style={{ color: "red" }}>
              Invalid Email Format
            </p>
          )}

          {(isError && submited) && (
            <p className="sign" align="center" style={{ color: "red" }}>
              The email has been already taken
            </p>
          )}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          {(!isValidePassword && submited) && (
            <p style={{ color: "red" }} className="sign" align="center">
              Password should contain at least 8 characters, 1 number, 1
              lowercase, 1 uppercase
            </p>
          )}
          <button className="submit" align="center">
            Sign up
          </button>
        </form>
      </div>
    </Fragment>
  );
}
