import "./FilterModal.css";

const FilterModal = ({showModal}) => {
    return (
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
    )
}

export default FilterModal;