import React, { useState, useEffect } from "react";
//import { auth } from "../fireBase";
import firebase from "./firebase_otp";
import auth from "firebase-auth";
//import firebase from "firebase";
//import { , RecaptchaVerifier } from "firebase/auth";
//import  firebase.getAuth  from "firebase/auth";
function PhoneLogin() {
  const auth = firebase.auth();
  let [input, setInput] = useState({});
  let [viewOtpForm, setViewOtpForm] = useState(false);
  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
        },
        defaultCountry: "IN",
      }
    );
  }, []);
  function handleChange(e) {
    let { name, value } = e.target;
    setInput({ [name]: value });
  }
  function configureCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response) {
          console.log("here");
          onSignInSubmit();
        },
      }
    );
  }

  function onSignInSubmit(e) {
    e.preventDefault();
    configureCaptcha();
    let phone_number = "9771907913";
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        return window.confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  }
  function onOTPSubmit(e) {
    e.preventDefault();
    //const code = input.otp;
    let opt_number = input.otp;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  }
  return (
    <>
      <h1>phone login</h1>
      <form onSubmit={onSignInSubmit}>
        <div id="recaptcha-container">8</div>
        <input
          id="signbutton"
          placeholder="enter number"
          type="number"
          name="mobile"
          required
          onChange={handleChange}
        />
        <input type="submit" name="submit" />
      </form>
      <h3>enter otp</h3>
      <form onSubmit={onOTPSubmit}>
        <input
          placeholder="enter number"
          type="number"
          name="otp"
          required
          onChange={handleChange}
        />
        <input type="submit" name="submit" />
      </form>
    </>
  );
}
export default PhoneLogin;
