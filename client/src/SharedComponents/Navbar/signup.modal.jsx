import React from "react";
import "./signup.modules.css";
import Modal from "react-modal";
import { withRouter } from "react-router-dom";
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
            width: "40%",
            border: "none",
            background: "white",
            overflow: "auto",
            marginLeft: "20%",
            WebkitOverflowScrolling: "touch",
            backgroundImage: "url(./unsplash_QsYXYSwV3NU1.jpg)",

            outline: "none",
            overflow: "hidden ",
            borderRadius: "10px",
          },
        }}
      >
        <div className="modalDiv"></div>
        <div className="container">
          <img
            style={{ height: "100px", width: "100px" }}
            src="./Group 54.png"
          />
          <h3 style={{ marginTop: "-5px" }}>Get your Favourite</h3>
          <br />
          <h3 style={{ marginTop: "-50px" }}>Snack Instantly</h3>
          <div className="threeType1" onClick={() => setState(2)}>
            <p style={{ fontWeight: "bold" }}>
              {" "}
              <img
                style={{
                  height: "15px",
                  width: "10px",
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
                  width: "10px",
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
                  width: "10px",
                  marginLeft: "15px",
                  marginRight: "5px",
                }}
                src="./Vector (1).png"
              />
              Continue with Facebook
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default withRouter(SignupModal);
