import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import database from "../Util/util";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    country: "",
    companyName: "",
    mobile: "",
    regNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = database.find((user) => user.email === data.email);
    if (userData) {
      alert("This Email is already registered?");
      setData({
        country: "",
        companyName: "",
        mobile: "",
        regNumber: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    } else {
      database.push(data);
      navigate("/login");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Register Your company</h2>
      <div id="formInput">
        <div className="input">
          <input
            type="text"
            name="country"
            value={data.country}
            onChange={changeHandler}
            placeholder="Country*"
            required
          />
          <input
            type="text"
            name="companyName"
            value={data.companyName}
            onChange={changeHandler}
            placeholder="Company Name*"
            required
          />
        </div>
        <div className="input">
          <input
            type="number"
            name="mobile"
            value={data.mobile}
            onChange={changeHandler}
            placeholder="Phone Number*"
            required
          />
          <input
            type="text"
            name="regNumber"
            value={data.regNumber}
            onChange={changeHandler}
            placeholder="Registeration Number*"
            required
          />
        </div>
        <div className="input">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={changeHandler}
            placeholder="First Name*"
            required
          />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={changeHandler}
            placeholder="Last Name*"
            required
          />
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            placeholder="Email Id*"
            required
          />
          {/* <input type="number" id="" value="(+971)|" /> */}
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            placeholder="Password*"
            required
          />
        </div>
      </div>
      <button>Register Now</button>
      <p>
        Already Register?{" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </p>
    </form>
  );
};

export default SignUp;
