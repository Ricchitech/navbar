import React, { useState } from "react";
//import "./UserAuth.css";
import { FcGoogle } from "react-icons/fc";
import logo from "../../images/left_background.svg";
import { FaRegEye } from "react-icons/fa";

function Signin() {
  const [passwordShown, setPasswordShown] = useState(false);
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

  const changepasstype = () => {
    setPasswordShown(!passwordShown);
  };

  const responseGoogle = (response) => {
    console.log("Google login");
  };

  const checksignin = (response) => {
    console.log("Stay Signed in!!");
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Incorrect Email ID";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must contain at least 8 characters!";
    } else if (values.password.length > 25) {
      errors.password = "Password cannot exceed more than 25 characters";
    }
    return errors;
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
                    <form onSubmit={handleSubmit} className="forms">
                      {/* this is the form */}
                      <div className="heading">
                        <h2 className="text-header">Welcome to Speakout</h2>
                      </div>

                      {/* Email input */}
                      <div className="actual-form">
                        <div className="input-wrap">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="input-field"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                        </div>
                        <p className="error">{formErrors.email}</p>
                        {/* Email input ends here */}

                        {/* Password input */}
                        <div className="input-wrap">
                          <input
                            type={passwordShown ? "text" : "password"}
                            id="passtype"
                            name="password"
                            placeholder="Password"
                            className="input-field"
                            value={formValues.password}
                            onChange={handleChange}
                          />
                          <div className="pass-type-change">
                            <FaRegEye
                              className="pass-icon"
                              onClick={changepasstype}
                            />
                          </div>
                        </div>
                        <p className="error">{formErrors.password}</p>
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
                        <button
                          className="btn-signin"
                          type="submit"
                          
                        >
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
                    </form>
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
