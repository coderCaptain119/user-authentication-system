import React, { createContext, useState } from "react";
import NavBar from "./Components/NavBar";
import SignUp from "./Components/SignUp";
import LogIn from "./Components/LogIn";
import Welcome from "./Components/Welcome";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="body">
          <img
            src="https://aquio.com.au/wp-content/uploads/2021/05/food-grade-shipping-containers-aquio-1000x500.jpg"
            alt="companies"
          />
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route exact path="/" element={<SignUp />} />
              <Route exact path="/login" element={<LogIn />} />
              <Route exact path="/welcome" element={<Welcome />} />
            </Routes>
          </UserContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
