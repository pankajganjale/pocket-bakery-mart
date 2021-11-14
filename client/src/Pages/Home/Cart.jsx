import { useState } from "react";
import "./Carousel.css";
import { RequestCake } from "../Utils/Request";
import axios from "axios";
export const Cart = function Cart({ keep,toggle, onAdd, onRemove }) {
	const [counter, setCounter] = useState(1);
	const [state, setState] = useState(true);
	const [show, setShow] = useState(true);

	const plusCounter = () => {
		onAdd(keep);
		setCounter(counter + 1);
	};
	const minusCounter = () => {
		onRemove(keep);
		return counter <= 1 ? !state : setCounter(counter - 1);
	};
	const handlClick = () => {
		onAdd(keep);
		setState(!state);
	};
	const handleAdd = async () => {
		// await axios.post("/cart", {
		// 	image: val.image,
		// 	name: val.name,
		// 	seller: val.seller,
		// });
	};
	return (
		<div>
			{state ? (
				<button
					onClick={handlClick}
					style={{
						margin: "35% 35%",
						padding: "2%",
						fontSize: "14px",
						fontWeight: "bolder",
					}}
				>
					Add
				</button>
			) : (
				<div>
					{/* <div>
						<button onClick={minusCounter}>-</button>
						{counter}
						<button onClick={plusCounter}>+</button>
					</div> */}
					<div style={{ margin: "33% 33%", marginBottom: "0px" }}>
						<button onClick={minusCounter}>-</button>
						{counter}
						<button onClick={plusCounter}>+</button>
						<div>
							<button className="check" onClick={toggle}>
								Proceed to Checkout
							</button>
						</div>
					</div>
					{/* <div className="check">
						<button
							className="check"
							onClick={() => {
								// <Cart2 proceed={addToCart}></Cart2>;
							}}
						>
							Proceed to Checkout
						</button>
					</div> */}
				</div>
			)}
		</div>
	);
};
