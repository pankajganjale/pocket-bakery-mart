import React from "react";
import "./signup.modules.css";
import Modal from "react-modal";
function SignupWithPhone({ setState }) {
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
            Enter the phone number
          </h3>
          <div
            style={{ backgroundColor: "black", color: "white", height: "50px" }}
          >
            <p
              style={{
                marginTop: "-5px",
                borderBottom: "1px solid white",
              }}
            >
              India
            </p>
            <p
              style={{
                backgroundColor: "black",
                color: "white",
                marginTop: "-17px",
              }}
            >
              +91
              <span style={{ borderLeft: "1px solid white" }}>
                {" "}
                <input
                  style={{
                    backgroundColor: "black",
                    padding: "15px",
                    outline: "none",
                    border: "none",
                    color: "white",
                    overflow: "hidden",
                  }}
                  placeholder="Phone Number"
                  type="number"
                />
              </span>
            </p>
          </div>
          <div style={{ marginTop: "55px" }}>
            <p style={{ fontSize: "small", fontFamily: "roboto" }}>
              We’ll send you a code by SMS to confirm
              <br /> your phone number.
            </p>
            <p style={{ fontSize: "small", fontFamily: "roboto" }}>
              We may occasionally send you service-based
              <br /> messages
            </p>
          </div>
          <button
            style={{
              width: "78px",
              height: "44px",
              marginTop: "100px",
              background: "#FFE24D",
              border: "none",
              borderRadius: "50px",
              fontSize: "bold",
            }}
            onClick={() => setState(3)}
          >
            Next
          </button>
        </div>
      </Modal>
    </>
  );
}
export default SignupWithPhone;
