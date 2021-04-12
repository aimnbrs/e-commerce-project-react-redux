import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../../redux/users/userAction";
import "./index.css";
import Loader from "../../microComponents/loader";


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
  let isError = false;

  //dispatch signup action if the input is valid
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    name != "" && isValideEmail && isValidePassword
      ? dispatch(signUp(name, email, password))
      : setSubmited(true);
   };

  const signup = useSelector((state) => state.sign);
  let { loading, userInfo, err } = signup || {};

    if (userInfo) {
      (typeof userInfo === 'string') 
        ? (isError = true)
        : history.push("/Home");
    }
    useEffect(() => {
       console.log('loading',loading);
    }, [loading])

    useEffect(() => {
      const timer = setTimeout(() => {
        if (submited) {
          setSubmited(false)
        }
      }, 4000);
      return () => clearTimeout(timer);
    }, [submited]);
  return (
    <Fragment>
          {loading ? (
    <Loader></Loader>
      ) : (
        <>
      <div className="mainsignup">
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
            <p className="isa_error"  align="center">
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
            <p className="isa_error" style={{ color: "red" }}>
              Invalid Email Format
            </p>
          )}

          {isError && submited && (
            <p className="isa_error" align="center" style={{ color: "red" }}>
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
          {!isValidePassword && submited && (
            <p className="isa_error"  align="center">
              Password should contain at least 8 characters, 1 number, 1
              lowercase, 1 uppercase
            </p>
          )}
          <button className="submit" align="center">
            Sign up
          </button>
          {err && (
            <p className="isa_error"  align="center">
              Fail to connect, Please try again
            </p>
          )}
        </form>
      </div>
      </>
      )}
    </Fragment>
  );
}
