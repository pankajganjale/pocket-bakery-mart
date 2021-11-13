import "./Navbar.css";
import { useState } from "react";
import SignupModal from "./signup.modal";
import SignupWithPhone from "./SignupWithPhone.modal";
import OtpSetModel from "./otpSet.Model";
import SideBarModal from "./SideBar.modal";
import { Route, Switch, Link } from "react-router-dom";
const Navbar = ({ loggedIn, signIn, src, name }) => {
  let [sideBar, setSideBar] = useState(false);
  let [state, setState] = useState(0);
  let [mobile, setMobile] = useState("");
  let [otp, setOtp] = useState(0);
  let [newMobile, setNewMobile] = useState("");
  let handleOtp = () => {
    if (mobile === "") {
      alert("please enter a valid number");
      return;
    }
    if (mobile.length !== 10) {
      alert("mobile number should be of 10 digits");
    }
    setNewMobile("+91" + mobile);
    setOtp(Math.floor(100000 + Math.random() * 900000));
    setState(3);
  };
  //console.log("otp:", otp);
  return (
    <>
      {loggedIn ? (
        <div className="navbar">
          <div>
            <button>Get the App</button>
            <img src="./Images/AppStore.png" alt="" />
            <img src="./Images/PlayStore.png" alt="" />
          </div>
          <div id="afterLoggedIn">
            <button style={{ backgroundColor: "white" }}>Help</button>
            <button
              style={{ border: "none", backgroundColor: "white !important" }}
            >
              <img
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                }}
                src={src}
                alt="img"
              />
            </button>
            <button
              style={{
                borderRadius: "none",
                color: "black !important",
                width: "200px",
              }}
              onClick={() => setState(4)}
            >
              {name}
              <img
                style={{ width: "12px", height: "10px", marginLeft: "5px" }}
                src="./dropdown.png"
              />
            </button>

            {state === 4 ? (
              <SideBarModal setState={setState} src={src} name={name} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div>
            <button>Get the App</button>
            <img src="./Images/AppStore.png" alt="" />
            <img src="./Images/PlayStore.png" alt="" />
          </div>
          <div>
            <button>Help</button>
            <button onClick={() => setState(1)}>Log in</button>
            <button onClick={() => setState(1)}>Sign up</button>
          </div>

          {state === 1 ? (
            <SignupModal signIn={signIn} setState={setState} />
          ) : (
            ""
          )}

          {state === 2 ? (
            <SignupWithPhone
              setState={setState}
              setMobile={setMobile}
              handleOtp={handleOtp}
            />
          ) : (
            ""
          )}
          {state === 3 ? (
            <OtpSetModel
              setState={setState}
              otpSend={otp}
              newMobile={newMobile}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
