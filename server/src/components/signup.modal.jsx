import React from "react";
import "./signup.modules.css";
import Modal from "react-modal";
function SignupModal({ signIn, setState }) {
  console.log(signIn);
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
            width: "54%",
            border: "none",
            background: "#fff",
            overflow: "auto",
            marginLeft: "20%",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            overflow: "hidden ",
          },
        }}
      >
        <div className="modalDiv">
          <img
            style={{ height: "80vh", marginTop: "1px", Blend: "Pass through" }}
            src="./unsplash_QsYXYSwV3NU.png"
          ></img>
          <div className="container">
            <img style={{ height: "13vh" }} src="./Group 54.png" />
            <h3 style={{ marginTop: "-5px" }}>Get your Favourite</h3>
            <br />
            <h3 style={{ marginTop: "-50px" }}>Snack Instantly</h3>
            <div className="threeType1" onClick={() => setState(2)}>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                <img
                  style={{
                    height: "15px",
                    marginLeft: "15px",
                    marginRight: "5px",
                  }}
                  src="./Vector (1).png"
                />
                Continue with phone number
              </p>
            </div>
            <div className="threeType2" onClick={() => signIn()}>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                <img
                  style={{
                    height: "15px",
                    marginLeft: "15px",
                    marginRight: "5px",
                  }}
                  src="./Vector (1).png"
                />
                Continue with Google
              </p>
            </div>
            <div className="threeType3">
              <p style={{ fontWeight: "bold" }}>
                {" "}
                <img
                  style={{
                    height: "15px",
                    marginLeft: "15px",
                    marginRight: "5px",
                  }}
                  src="./Vector (1).png"
                />
                Continue with Facebook
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default SignupModal;
