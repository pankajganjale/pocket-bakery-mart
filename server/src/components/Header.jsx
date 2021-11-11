import React, { useState } from "react";
import "./header.modules.css";
import SignupModal from "./signup.modal";
import SignupWithPhone from "./SignupWithPhone.modal";
import OtpSetModel from "./otpSet.Model";
function Header({ signIn, loggedin, src, name }) {
  console.log("1:", signIn);
  let [state, setState] = useState(0);
  return (
    <>
      {loggedin ? (
        <div id="mainDiv">
          <div className="head">
            <div>
              <button className="button1">Get the App</button>
              <button className="icon1">
                <img style={{ height: "20px" }} src="./vector.png" />
              </button>
              <button className="icon2">
                <img
                  style={{ height: "20px" }}
                  src="./ion_logo-google-playstore.png"
                />
              </button>
            </div>
            <div>
              <button className="button2">Help</button>
              <button className="imgButton">
                <img
                  style={{
                    height: "32px",
                    borderRadius: "50%",
                  }}
                  src={src}
                  alt="img"
                />
              </button>
              <button className="sharath">
                {name}
                <span>
                  <img src="./dropdown.png" />
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div id="mainDiv">
          <div className="head">
            <div>
              <button className="button1">Get the App</button>
              <button className="icon1">
                <img style={{ height: "20px" }} src="./vector.png" />
              </button>
              <button className="icon2">
                <img
                  style={{ height: "20px" }}
                  src="./ion_logo-google-playstore.png"
                />
              </button>
            </div>
            <div>
              <button className="button2">Help</button>
              <button className="button2">Login</button>
              <button className="button2" onClick={() => setState(1)}>
                Sign up
              </button>
            </div>
          </div>
          {state === 1 ? (
            <SignupModal signIn={signIn} setState={setState} />
          ) : (
            ""
          )}
          {state === 2 ? <SignupWithPhone setState={setState} /> : ""}
          {state === 3 ? <OtpSetModel setState={setState} /> : ""}
        </div>
      )}
    </>
  );
}
export default Header;
