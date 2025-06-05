import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import SignUp from "./Pages/SignUp";
import Dasboard from "./Pages/Dasboard";
import Navbar from "./Components/Navbar";
import LogIn from "./Pages/Login";

const App = () => {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/signup" element={<SignUp />} />
         <Route path='/login' element={<LogIn />}></Route>
      </Routes>
    </div>
  );
};

export default App;
