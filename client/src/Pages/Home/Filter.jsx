import "./Filter.css";

const Filter = ({ setFiltermodal,showVeg}) => {
  return (
    <div className="filter">
      <button onClick={() => setFiltermodal(5)}>
        <img src="./Images/Filter.png" alt="" />
        Filter
      </button>
      <button>
        PRICE <img src="./Images/Price.png" alt="" />
      </button>
      <button  onClick={()=> showVeg(true)}>VEG</button>
      <button>
        <img src="./Images/Order.png" alt="" /> ORDER
      </button>
    </div>
  );
};

export default Filter;
