import React, { useState } from "react";
import "./FilterModal.css";
import Modal from "react-modal";


function FilterModal({ setFiltermodal,showFilter }) {
 
  const handleList = (list) => {
    setTimeout(() => {
   showFilter(list)            
    },2000)

      
}

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
            marginTop: "-21px",
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
             <button onClick={()=>handleList('Healthy')}>Healthy</button>
             <button onClick={()=>handleList('Popular')}>Desserts</button>
              <button onClick={()=>handleList('Best Seller')}>Best Offers</button>
            </div>
            <div>Cuisine</div>
            <div>
               <button onClick={()=>handleList('Butterscotch')}>Butter Scotch</button>
                <button onClick={()=>handleList('Red Velvet')}>Red Velvet</button>
                <button onClick={()=>handleList('Chocolate')}>Cakes</button>
              <button>Bread</button>
              <button>Puff</button>
            </div>
          </div>
          <div onClick={() => setFiltermodal(0)} style={{ textAlign:"center",width: "369px", marginTop: "15px",marginLeft:"-20px"}}>APPLY</div>
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
