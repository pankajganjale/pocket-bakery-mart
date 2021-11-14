import { useState } from "react";
import "./Carousel.css";
import Last from "./Last";
import Radio from "@material-ui/core/Radio";

export const Cart2 = function Cart2({ price, cartItems, onAdd, onRemove }) {
	const [counter, setCounter] = useState(1);
	const [pay, setPay] = useState(true);
	const [method, setMethod] = useState("COD");

	const handleMethod = (e) => {
		// console.log("e.target.value:", e.target.value);
		setMethod(e.target.value);

	};

	const handlePay = () => {
		setPay(!pay);
	};
	const delivery = 49;
	// const [cartItems, setCartItems] = useState([]);
	// console.log(price);

	return (
		<div>
			{pay ? (
				<div className="row">
					{/* <h2>Cart Items</h2> */}
					<div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
					<div style={{ flexGrow: "1" }}>
						{cartItems.map((item) => (
							<div key={item.id} className="add">
								<div className="addFlex">
									<img src={item.image} className="image_css" alt="" />
									<div style={{marginLeft:"10px",marginTop:"10px"}}>
										<div style={{ fontSize: "14px" }}>{item.name}</div>
										<div>{item.seller}</div>
										<div>
											{item.qty} x &#8377;{price}
										</div>
									</div>
									<div
										style={{
											background: "white",
											height: "5%",
											margin: "3% 10%",
											borderRadius: "10px",
										}}
									>
										<button
											onClick={() => {
												onAdd(item);
												setCounter(counter + 1);
											}}
											className="add"
											style={{ border: "none", background: "white" }}
										>
											+
										</button>
										{item.qty}
										<button
											onClick={() => {
												onRemove(item);
												setCounter(counter - 1);
											}}
											className="remove"
											style={{ background: "white", borderRadius: "10px" }}
										>
											-
										</button>
									</div>
								</div>
							</div>
						))}
						<div>
							<h2>Order Details</h2>
							<div>
								<p>Items Total (inclusive all taxes)</p>
								<p>&#8377;{price}</p>
							</div>
							<div>
								<p>Delivery charges</p>
								<p>&#8377;{delivery}</p>
							</div>
							<div>
								<p>Total Discount</p>
								<p>&#8377;0</p>
							</div>
							<div>
								<p>Amount Payable</p>
								<p>&#8377;{+(price) + +(delivery)}</p>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "15%" }}>
						<h3>Payment method</h3>
						<div>
							<span>COD</span>
							<span>
								<Radio
									value="COD"
									checked={method === "COD"}
									color="primary"
									onChange={handleMethod}
								/>
							</span>
						</div>
						<div>
							<span>Google Play</span>
							<span>
								<Radio
									value="GooglePay"
									checked={method === "GooglePay"}
									color="primary"
									onChange={handleMethod}
								/>
							</span>
						</div>
						<div>
							<span>Paytm</span>
							<span>
								<Radio
									value="Paytm"
									checked={method === "Paytm"}
									color="primary"
									onChange={handleMethod}
								/>
							</span>
						</div>
						<div>
							<span>Phone pe</span>
							<span>
								<Radio
									value="Phone pe"
									checked={method === "Phone pe"}
									color="primary"
									onChange={handleMethod}
								/>
							</span>
						</div>
						<div>
							<span>Debit card/Credit card</span>
							<span>
								<Radio
									value="Debit card"
									checked={method === "Debit card"}
									color="primary"
									onChange={handleMethod}
								/>
							</span>
						</div>
						<div>Home</div>
						<button onClick={handlePay} className="check2">
							Proceed to Payment
						</button>
					</div>
				</div>
			) : (
				<Last price={price} cartItems={cartItems} ></Last>
			)}
		</div>
	);
};
