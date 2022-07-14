import React, { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setUser(null);
        navigate("/login");
      }}
    >
      <h6 class="welcome">WELCOME TO</h6>
      <h2 class="title">
        Digi<span>Comp+</span>
      </h2>
      <h3>{user}</h3>
      <button>Log Out</button>
    </form>
  );
};

export default Welcome;
