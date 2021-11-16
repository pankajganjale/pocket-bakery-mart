import { useState } from "react";
import "./Carousel.css";
import Last from "./Last";
import Radio from "@material-ui/core/Radio";

export const Cart2 = function Cart2({
	price,
	cartItems,
	onAdd,
	onRemove,
	toggle,
	counter

}) {
	// const [counter, setCounter] = useState(1);
	const [pay, setPay] = useState(true);
	const [method, setMethod] = useState("COD");
	const [ans, setAns] = useState(price);
	// console.log(cartItems);
	console.log('cartItems:', cartItems)

	const handleMethod = (e) => {
		// console.log("e.target.value:", e.target.value);
		setMethod(e.target.value);
	};

	console.log(cartItems);
	console.log('cartItems:', cartItems)
	const handlePay = () => {
		setPay(!pay);
		
	};
	const delivery = 49;
	// console.log(keep);
	let total = 0;
	for (let i = 0; i < cartItems.length; i++){
		let p = +(cartItems[i].sel);
		let q = +(cartItems[i].qty);
		total = total + +p*q;
	}

	


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
									<div style={{ marginLeft: "10px", marginTop: "10px" }}>
										<div style={{ fontSize: "14px" }}>{item.name}</div>
										<div>{item.seller}</div>
										<div>
											{item.qty} x &#8377;{item.sel}
											{/* {setAns(+(item.qty) * +(price))} */}
										</div>
									</div>
									<div
										style={{
											background: "white",
											height: "5%",
											margin: "auto auto",
											width: "auto",
											borderRadius: "10px",
											border: "1px solid #cac7c7"
										}}
									>
										<button
											onClick={() => {
												onRemove(item);
												
											}}
											className="remove"
											style={{ background: "white", borderRadius: "10px" }}
										>
											-
										</button>
										{item.qty}
										<button
											onClick={() => {
												onAdd(item);

												
											}}
											className="add"
											style={{ border: "none", background: "white" }}
										>
											+
										</button>
									</div>
								</div>
							</div>
						))}
						<div>
							<h2>Order Details</h2>
							<div>
								<p>Items Total (inclusive all taxes)</p>
								<p>&#8377;{total}</p>
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
								<p>&#8377;{+total + +delivery}</p>
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
					<div>
						<button
							style={{
								position: "absolute",
								top: "20px",
								left: "12px",
								padding: "5px 7px",
								border: "none",
							}}
							onClick={toggle}
							//
						>
							&#10094;
						</button>
					</div>
				</div>
			) : (
				<Last total={total} price={price} cartItems={cartItems}></Last>
			)}
		</div>
	);
};
