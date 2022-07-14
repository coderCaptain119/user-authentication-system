import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import database from "../Util/util";

const LogIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessages, setErrorMessages] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = database.find((user) => user.email === data.email);

    if (userData) {
      if (userData.password !== data.password) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setUser(userData.firstName + userData.lastName);
        navigate("/welcome");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <form onSubmit={submitHandler}>
      <h6 class="welcome">WELCOME TO</h6>
      <h2 class="title">
        Digi<span>Comp+</span>
      </h2>
      <div id="formInput">
        <div class="inputtext">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            placeholder="Email ID*"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div class="inputtext">
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            placeholder="Password*"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <span>
          <ul class="item2">
            <li>
              <input type="checkbox" /> Remember Me
            </li>

            <li
              class="forpass"
              style={{ marginTop: "8px", textDecorationLine: "underline" }}
            >
              Forgot Password
            </li>
          </ul>
        </span>
      </div>
      <button class="button1">LOG IN</button>
      <Link to="/" class="links">
        New User? <span class="join">Join DigiComp+</span>{" "}
      </Link>
    </form>
  );
};

export default LogIn;
