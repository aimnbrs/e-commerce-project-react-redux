import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/users/userAction";
import "./index.css";

export default function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signin = useSelector(state => state.signin)
  let {userInfo} =  signin || {};
  userInfo && (userInfo = userInfo[0])
  const history = useHistory();
  // const {err} =  signin || {};
 
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  };

  if (userInfo) {
    console.log("historysignin",userInfo.name)
    history.push('/Home')
  } 
  // if (err) {
    
  // } 
  
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
          {/* {
          err &&  
          <p className="forgot" align="center" style={{color:"red"}}>
          <a href="#" />
          Invalid Email Or Password
        </p>
          } */}
        </form>
      </div>
    </Fragment>
  );
}
