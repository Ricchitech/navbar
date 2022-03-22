import React, { useState } from "react";
import "./Signin.css";
import { FcGoogle } from "react-icons/fc";
import logo from "../../images/left_background.svg";
import footerlogo from "../../images/ziroh-logo.png";
import { FaRegEye } from "react-icons/fa";

function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);

  const changepasstype = () => {
    setPasswordShown(!passwordShown);
  };

  const responseGoogle = (response) => {
    console.log("Google login");
  };

  const checksignin = (response) => {
    console.log("Stay Signed in!!");
  };

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="box">
            <div className="inner-box">
              {/* corousel starts */}
              <div className="corousel">
                <img src={logo} alt="" draggable="false" />
              </div>
              {/* corousel ends */}

              {/* login form starts */}
              <div className="forms-wrap">
                <div className="form-container">
                  <div className="sign-in-form">
                    {/* this is the form */}
                    <div className="heading">
                      <h2 className="text-header">Welcome to Speakout</h2>
                    </div>

                    {/* Email input */}
                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
                          type="email"
                          placeholder="Email"
                          className="input-field"
                        />
                      </div>
                      {/* Email input ends here */}

                      {/* Password input */}
                      <div className="input-wrap">
                        <input
                          type={passwordShown ? "text" : "password"}
                          id="passtype"
                          placeholder="Password"
                          className="input-field"
                        />
                        <div className="pass-type-change">
                          <FaRegEye
                            className="pass-icon"
                            onClick={changepasstype}
                          />
                        </div>
                      </div>
                      {/* Password input ends here */}

                      {/* Forgot Password input */}
                      <div className="forgot-pass">
                        <a href="/" className="toggle">
                          Forgot password?
                        </a>
                      </div>

                      {/* Stay Signin  */}
                      <div className="stay-signin">
                        <input
                          type="checkbox"
                          className="checkbox"
                          id="checkbox"
                          name="checkbox"
                          onClick={checksignin}
                        />
                        <label className="checkbox-label" htmlFor="checkbox">
                          Stay signed in
                        </label>
                      </div>

                      {/* Statements */}
                      <p className="text-states">
                        By Signing In, I agree to the <br />
                        Ziroh's{" "}
                        <a href="/" className="toggle">
                          {" "}
                          Privacy Statement{" "}
                        </a>
                        and
                        <a href="/" className="toggle">
                          {" "}
                          Terms of Service{" "}
                        </a>
                      </p>
                      {/* Statements ends */}

                      {/* Signin button */}
                      <button className="btn-signin" type="submit">
                        SignIn
                      </button>

                      {/* Google Signin button starts here */}
                      <div className="google-group text-center mt-4">
                        <p>or sign in with</p>
                        <FcGoogle
                          size={24}
                          className="googleicon"
                          onClick={responseGoogle}
                        />
                      </div>
                      {/* Google Signin button ends here */}
                    </div>
                  </div>
                </div>
              </div>
              {/* login form end */}
            </div>
          </div>
        </div>
        {/* Footer starts */}
        {/* <div className="footer-logo d-flex justify-content-center">
          <p className="text-footer">Powered by </p>
          <img src={footerlogo} alt="" />
        </div> */}
        {/* Footer ends here */}
      </div>
    </>
  );
}

export default Signin;
