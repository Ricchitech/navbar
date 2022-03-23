
import React from 'react';
import Nav from './components/Nav';
import Signin from './components/UserAuth/Signin';
import Signup from "./components/UserAuth/Signup";
import Footer from "./components/Footer";
import Trail from './components/Trail';
import "./components/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Signin />} /> 
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
