import React, { useState } from "react";
import "./FilterModal.css";
import Modal from "react-modal";
function FilterModal({ setFiltermodal }) {
  return (
    <>
      <Modal
        onRequestClose={() => setFiltermodal(0)}
        isOpen={true}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(250, 250, 250, 0.05)",
          },
          content: {
            position: "absolute",
            // height: "90vh",
            width: "23%",
            border: "1px solid black",
            background: "#fff",
            overflow: "auto",
            marginLeft: "60%",
            WebkitOverflowScrolling: "touch",
            borderRadius: "20px",
            outline: "none",
            overflow: "hidden ",
            marginTop: "-20px",
          },
        }}
      >
        <div className="filterModal">
          <div onClick={() => setFiltermodal(0)}>X</div>
          <div className="buttonsStyle">
            <div>FILTERS</div>
            <div>Food Preferences</div>
            <div>
              <button>Veg</button>
              <button>Containing Egg</button>
              <button>Non Veg</button>
            </div>
            <div>Trending</div>
            <div>
              <button>Healthy</button>
              <button>Desserts</button>
              <button>Best Offers</button>
            </div>
            <div>Cuisine</div>
            <div>
              <button>Top</button>
              <button>Bakeries</button>
              <button>Cakes</button>
              <button>Bread</button>
              <button>Ice Cream</button>
              <button>Puffs</button>
              <button>Chips</button>
              <button>Rolls</button>
              <button>Bun</button>
            </div>
          </div>
          <div style={{ width: "369px", marginTop: "-3px" }}>APPLY</div>
        </div>
      </Modal>
    </>
  );
}
export default FilterModal;

{
  /* <Modal>
  {" "}
  <div className="filterModal">
    <div onClick={() => showModal(false)}>X</div>
    <div className="buttonsStyle">
      <div>FILTERS</div>
      <div>Food Preferences</div>
      <div>
        <button>Veg</button>
        <button>Containing Egg</button>
        <button>Non Veg</button>
      </div>
      <div>Trending</div>
      <div>
        <button>Healthy</button>
        <button>Desserts</button>
        <button>Best Offers</button>
      </div>
      <div>Cuisine</div>
      <div>
        <button>Top</button>
        <button>Bakeries</button>
        <button>Cakes</button>
        <button>Bread</button>
        <button>Ice Cream</button>
        <button>Puffs</button>
        <button>Chips</button>
        <button>Rolls</button>
        <button>Bun</button>
      </div>
    </div>
    <div>APPLY</div>
  </div>
</Modal>; */
}
