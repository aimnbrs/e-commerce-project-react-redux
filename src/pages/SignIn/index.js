import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/users/userAction";
import "./index.css";
import Loader from "../../microComponents/loader";

export default function SignIn() {
  //declaring variabales
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmited] = useState(false);

  const dispatch = useDispatch();
  const sign = useSelector((state) => state.sign);
  let { loading, userInfo, err } = sign || {};
  console.log("reacterror", err);
  const history = useHistory();

  //dispatching
  const submitHandler = (e) => {
    e.preventDefault();
    ( email != "" && password != "" ) && dispatch(signIn(email, password));
    setSubmited(true)
  };

  
  if (userInfo) {
      console.log("historysignin", userInfo.name);
      history.push("/Home");
  }

  return (
    <Fragment>
       {loading ? (
    <Loader></Loader>
      ) : (
        <>
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
          
          
              {err !== "user is not authenticated" && 
                   (<p className="isa_error" align="center">
                   <a href="#" />{err}</p>
                   )
              }
              {( !password || !email ) && submited && (
            <p className="isa_error" align="center">
            <a href="#" />fill all the inputs</p>
          )}
  
          <button className="submit" align="center" type="submit">
            Sign In
          </button>
        </form>
      </div>
      </>
      )}
    </Fragment>
  );
}
