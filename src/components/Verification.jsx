import React from "react";
import logo from "../images/logo.svg";
const Verification = () => {
  return (
    <div className="backgroundscreen">
      <div>
        <header className="headerlogo">
          <img src={logo} alt="logo" />
        </header>
        <div className="verification-center-section">
          <p className="hellouser">Hello, Prajakta </p>
          <p className="verify-line-font">Verify your email address </p>
          <p className="enter-otp-text">Enter your OTP number below</p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
