import React from 'react'
import logo from "../../images/logo.svg";
import { RiFeedbackLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav d-flex justify-content-between">
        <div className="logo1">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="signbuttons">
          <Link to="/signin">
            <button className="button signin btn m-2">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="button signup btn m-2">Sign Up</button>
          </Link>
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