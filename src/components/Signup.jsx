import React, { useState } from "react";
import logo from "../images/logo.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Signup = () => {
  // formik
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  const [verifed, setVerifed] = useState(false);

  function Captcha(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  // constemailRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="backgroundscreen">
      <div>
        <header className="headerlogo">
          <img src={logo} alt="logo" />
        </header>
        <div className="signup-center-section">
          <p className="Welcome-text">
            Welcome to doyou<span className="live-text">.live</span>
          </p>
          <p className="signup-text">Sign up</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="inputtag">
              <label className="label-text" htmlFor="email">
                Email ID
              </label>
              <input
                className="input-text"
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email id"
                id="email"
                onBlur={handleBlur}
              />
              <div className="validation-error-line">
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="inputtag">
              <label className="label-text" htmlFor="password">
                Password
              </label>
              <input
                className="input-text"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Enter your Password"
                id="password"
              />
              <div className="validation-error-line">
                {errors.password && touched.password ? (
                  <p className="validation-email">{errors.password}</p>
                ) : (
                  <p className="passwordverification">
                    Minimum 8-20 characters, one capital letter and one number
                  </p>
                )}
              </div>
            </div>
            <div className="inputtag">
              <label className="label-text" htmlFor="username">
                Username
              </label>
              <input
                className="input-text"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Enter your Username"
                id="username"
              />
              <div className="validation-error-line">
                {errors.username && touched.username ? (
                  <p className="validation-email">{errors.username}</p>
                ) : (
                  <p className="passwordverification">
                    Minimum 3-10 characters,all lowercase,can use maximum of 2
                    numbers no special characters allowed
                  </p>
                )}
              </div>
              <div className="recaptcha">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={Captcha}
                />
              </div>
              <button type="submit" className="submit-btn" disabled={!verifed}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
