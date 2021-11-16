import { useState } from "react";
import "./Carousel.css";
import { RequestCake } from "../Utils/Request";
import axios from "axios";
export const Cart = function Cart({
	cartItems,
	keep,
	toggle,
	onAdd,
	onRemove,
	addPrice,
}) {
	const [counter, setCounter] = useState(1);
	const [state, setState] = useState(true);
	const [show, setShow] = useState(true);

	// const plusCounter = () => {
	// 	onAdd(keep);
	// 	setCounter(counter + 1);
	// };
	// const minusCounter = () => {
	// 	onRemove(keep);
	// 	return counter <= 1 ? !state : setCounter(counter - 1);
	// };
	const handlClick = () => {
		onAdd(keep);
		setState(!state);
		addPrice(keep);
	};
	// console.log(keep);
	console.log("keep:", keep);

	// for (let i = 0; i < cartItems.length; i++) {
	// 	let p = +cartItems[i].sel;
	// 	total = total + +p;
	// }
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
						marginBottom: "0px",
					}}
				>
					Add to cart
				</button>
			) : (
				<div>
					{/* <div>
						<button onClick={minusCounter}>-</button>
						{counter}
						<button onClick={plusCounter}>+</button>
					</div> */}
					<div style={{ margin: "33% 33%", marginBottom: "0px" }}>
						<div
							style={{
								background: "white",
								height: "5%",
								margin: "auto auto",
								width: "50%",
								borderRadius: "10px",
								padding: "1%",
									marginBottom: "1%",
								border: "1px solid #c7c3c3"
							}}
						>
							<button
								onClick={() => {
									onRemove(keep);
									setCounter(counter - 1);
								}}
								className="remove"
								style={{ background: "white", borderRadius: "10px" }}
							>
								-
							</button>
							{+counter}
							<button
								onClick={() => {
									onAdd(keep);
									setCounter(counter + 1);
								}}
								className="add"
								style={{ border: "none", background: "white" }}
							>
								+
							</button>
						</div>
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
