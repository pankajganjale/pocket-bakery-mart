import React, { useState } from "react";
import "./signup.modules.css";
import Modal from "react-modal";
function SideBarModal({ setState, setMobile, handleOtp, src, name }) {
  //console.log("otp:", otp);
  //console.log("newmob:", newMobile);
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
            height: "500px",
            width: "15%",
            border: "none",
            background: "#fff",
            overflow: "auto",
            marginLeft: "75%",
            marginTop: "10px",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            overflow: "hidden ",
            borderRadius: "10px",
          },
        }}
      >
        <div className="modalDiv2">
          <img style={{ marginTop: "-10px" }} src="./Polygon 2.png" />
          <div
            style={{
              height: "150px",
              width: "100%",
              backgroundColor: "#FFE768",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <p style={{ textAlign: "center" }}>Good morning,</p>
            <h3
              style={{
                textAlign: "center",
                marginTop: "-20px",
                fontFamily: "Roboto",
              }}
            >
              {name}
            </h3>
          </div>
          <div style={{ justifyContent: "center" }}>
            <img
              style={{
                height: "96px",
                width: "96px",
                marginLeft: "40px",
                borderRadius: "50%",
                marginTop: "-50px",
              }}
              src={src}
              alt="proImg"
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Profile
            </p>
            <p
              style={{
                marginTop: "-10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Recent Orders
            </p>
            <p
              style={{
                marginTop: "-10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Transactions history
            </p>
            <p
              style={{
                marginTop: "-10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Favorites
            </p>
            <p
              style={{
                marginTop: "-10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Saved Locations
            </p>

            <p
              style={{
                marginTop: "-10px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Settings
            </p>
            <p
              style={{
                marginTop: "-10px",
                textAlign: "center",
                fontSize: "20px",
              }}
              onClick={() => setState(0)}
            >
              Log out
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default SideBarModal;

//  <div className="filterModal">
//    <div onClick={() => setState(0)}>X</div>
//    <div className="buttonsStyle">
//      <div>FILTERS</div>
//      <div>Food Preferences</div>
//      <div>
//        <button>Veg</button>
//        <button>Containing Egg</button>
//        <button>Non Veg</button>
//      </div>
//      <div>Trending</div>
//      <div>
//        <button>Healthy</button>
//        <button>Desserts</button>
//        <button>Best Offers</button>
//      </div>
//      <div>Cuisine</div>
//      <div>
//        <button>Top</button>
//        <button>Bakeries</button>
//        <button>Cakes</button>
//        <button>Bread</button>
//        <button>Ice Cream</button>
//        <button>Puffs</button>
//        <button>Chips</button>
//        <button>Rolls</button>
//        <button>Bun</button>
//      </div>
//    </div>
//    <div style={{ width: "369px", marginTop: "-3px" }}>APPLY</div>
//  </div>;

{
  /* <div
            style={{
              width: "110%",
              display: "flex",
              marginTop: "-20px",
              justifyContent: "space-between",
            }}
          >
            <p style={{ marginLeft: "20px" }} onClick={() => setState(1)}>
              <img src="./arrow.png" />
            </p>
            <p style={{ marginRight: "30px" }} onClick={() => setState(0)}>
              X
            </p>
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
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
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
            onClick={() => handleOtp()}
          >
            Next
          </button> */
}
