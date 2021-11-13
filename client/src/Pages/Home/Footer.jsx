import React from "react";
import "./footer.modules.css";
function Footer() {
  return (
    <>
      <div id="footer">
        <div id="subFooter1">
          <div>
            <h4>COMPANY</h4>
            <p style={{ textAlign: "left" }}>faq</p>
            <p style={{ textAlign: "left" }}>About</p>
            <p style={{ textAlign: "left" }}>Career</p>
            <p style={{ textAlign: "left" }}>Blog</p>
            <p style={{ textAlign: "left", marginTop: "100px" }}>Terms</p>
          </div>
          <div>
            <h4 style={{ marginLeft: "20px" }}>HELP AND CONTACT</h4>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>
              Help centers
            </p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>Email us</p>
            <p
              style={{
                textAlign: "left",
                marginTop: "170px",
                marginLeft: "20px",
              }}
            >
              Privacy
            </p>
          </div>
          <div>
            <h4 style={{ marginLeft: "20px" }}>MORE FROM US</h4>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>
              Bulk party order
            </p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>Cake order</p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>
              Make your own cake
            </p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>offers</p>
          </div>
        </div>
        <div id="subFooter2">
          <h3>SUBSCRIBE TO OUR NEWS LETTER</h3>
          <div>
            <input
              style={{
                outline: "none",
                height: "25px",
                width: "250px",
              }}
              placeholder="Enter your email address"
            />
            <button
              style={{
                backgroundColor: "gray",
                height: "31px",
                borderRadius: "0px",
                fontSize: "small",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
