import React from 'react'
import logo from "../images/logo.svg";
import { RiFeedbackLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav d-flex justify-content-between">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="signbuttons">
          <button className="button signin btn m-2">Sign In</button>
          <button className="button signup btn m-2">Sign Up</button>
        </div>
        <div className="fun-icons">
          <a className="icon-links" href="#">
            <FiSettings size={28} className="m-4" />
          </a>
          <a className="icon-links" href="#">
            <BsQuestionCircle size={28} className="m-4" />
          </a>
          <a className="icon-links" href="#">
            <RiFeedbackLine size={28} className="m-4" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Nav;