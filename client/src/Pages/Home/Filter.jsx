import "./Filter.css";

const Filter  = () => {

    return (
        <div className="filter">
            <button><img src="./Images/Filter.png" alt="" />Filter</button>
            <button>PRICE <img src="./Images/Price.png" alt="" /></button>
            <button>VEG</button>
            <button><img src="./Images/Order.png" alt="" /> ORDER</button>
        </div>
    )
}

export default Filter;