import React, { useState } from "react";
import "./signup.modules.css";
import Modal from "react-modal";
function OtpSetModel({ setState }) {
  let [otp, setOtp] = useState(new Array(6).fill(""));
  let handleChange = (ele, i) => {
    if (isNaN(ele.value)) return false;
    setOtp([...otp.map((e, ind) => (ind === i ? ele.value : e))]);
    if (ele.nextSibling) {
      ele.nextSibling.focus();
    }
  };
  return (
    <>
      <Modal
        onRequestClose={() => setState(0)}
        isOpen={true}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(250, 250, 250, 0.15)",
          },
          content: {
            position: "absolute",
            height: "80vh",
            width: "40%",
            border: "none",
            background: "#fff",
            overflow: "auto",
            marginLeft: "20%",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            overflow: "hidden ",
            borderRadius: "10px",
          },
        }}
      >
        <div className="modalDiv2">
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "-20px",
              justifyContent: "space-between",
            }}
          >
            <p onClick={() => setState(1)}>
              <img src="./arrow.png" />
            </p>
            <p onClick={() => setState(0)}>X</p>
          </div>
          <h3 style={{ color: "#5C5C5C", fontFamily: "Roboto" }}>
            Enter your code
          </h3>
          <div>
            {otp.map((el, index) => {
              return (
                <input
                  key={index}
                  maxLength="1"
                  name="otp"
                  type="text"
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}
          </div>
          <p style={{ fontSize: "small", fontFamily: "roboto" }}>
            We’ll senD an SMS with a 6-digit code to
            <br /> +918970452155
          </p>
          <button
            style={{
              width: "78px",
              height: "44px",
              marginTop: "50px",
              background: "#FFE24D",
              border: "none",
              borderRadius: "50px",
              fontSize: "bold",
            }}
            onClick={(e) => setOtp([...otp.map((x) => "")])}
          >
            Next
          </button>
          <p
            style={{
              fontSize: "small",
              fontFamily: "roboto",
              marginTop: "50px",
            }}
          >
            <img
              style={{ height: "15px", marginRight: "10px" }}
              src="./msg.png"
            />
            Resend SMS
          </p>
          <p style={{ fontSize: "small", fontFamily: "roboto" }}>
            <img
              style={{ height: "15px", marginRight: "10px" }}
              src="./pen.png"
            />{" "}
            Edit phone number
          </p>
        </div>
      </Modal>
    </>
  );
}
export default OtpSetModel;
