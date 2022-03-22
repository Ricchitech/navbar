
import React from 'react';
import Nav from './components/navbar/Nav';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Footer from "./components/Footer";
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
