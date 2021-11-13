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
            <p style={{ textAlign: "left" }}>Terms</p>
          </div>
          <div>
            <h4 style={{ marginLeft: "20px" }}>HELP AND CONTACT</h4>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>faq</p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>About</p>
          </div>
          <div>
            <h4 style={{ marginLeft: "20px" }}>MORE FROM US</h4>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>faq</p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>About</p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>Career</p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>Blog</p>
            <p style={{ textAlign: "left", marginLeft: "20px" }}>Terms</p>
          </div>
        </div>
        <div id="subFooter2">
          <h3>SUBSCRIBE TO OUR NEWS LETTER</h3>
        </div>
      </div>
    </>
  );
}
export default Footer;
