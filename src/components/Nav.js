import React from 'react'
import logo from "../images/logo.svg";
import { RiFeedbackLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

function Nav() {
  return (
    <div id="header" className="fixed-top header">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo starts here */}
        <div className="p-3">
          <a href="/">
            <img src={logo} alt="Speakout" />
          </a>
        </div>
        {/* Logo starts here */}

        {/* Navigation Menu starts here */}
        <div className="d-flex justify-content-between align-items-center">
          <a className="nav-link" href="/signin">
            <button className="btn sign-btns">SignIn</button>
          </a>

          <a className="nav-link" href="/signup">
            <button className="btn sign-btns">SignUp</button>
          </a>
        </div>
        {/* Navigation Menu starts here */}

        {/* Utils starts */}
        <div className="utils">
          <a className="icon-links" href="/">
            <FiSettings size={28} className="m-4" />
          </a>

          <a className="icon-links" href="/">
            <BsQuestionCircle size={28} className="m-4" />
          </a>

          <a className="icon-links" href="/">
            <RiFeedbackLine size={28} className="m-4" />
          </a>
        </div>
        {/* Utils ends */}
      </div>
    </div>
  );
}

export default Nav;