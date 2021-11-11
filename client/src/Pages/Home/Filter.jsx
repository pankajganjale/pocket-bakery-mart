import "./Filter.css";

const Filter  = ({displayModal}) => {

    return (
        <div className="filter">
            <button onClick={() => displayModal(true)}><img src="./Images/Filter.png" alt="" />Filter</button>
            <button>PRICE <img src="./Images/Price.png" alt="" /></button>
            <button>VEG</button>
            <button><img src="./Images/Order.png" alt="" /> ORDER</button>
        </div>
    )
}

export default Filter;