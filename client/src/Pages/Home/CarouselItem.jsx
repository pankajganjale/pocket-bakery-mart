// import styled from "styled-components";

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 100%;
//   margin: 0 15px;
//   font-size: 4em;
//   border: 1px solid black;
// `;

import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Modal from "react-modal";
import "./Carousel.css";
import { Cart } from "./Cart";
import { Cart2 } from "./Cart2";
import Radio from "@material-ui/core/Radio";

Modal.setAppElement("#root");

const CarouselItem = ({ data }) => {
	const [state, setState] = useState(false);
	const [keep, setKeep] = useState("");
	const [show, setShow] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	// const [price, setPrice] = useState(499);
	const [price, setPrice] = useState(499);

	const handlePrice = (e) => {
		console.log("e.target.value:", e.target.value);
		setPrice(e.target.value);
	};

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 768, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];

	const styles = {
		display: "flex",
		height: "311px",
		width: "100%",
		margin: "0 15px",
		borderRadius: "20px",
		boxShadow: "2px 1px 5px grey",
		flexDirection: "column-reverse",
		textAlign: "left",
		color: "white",
	};

	const toggle = () => {
		setShow(!show);
	};



	const onAdd = (prod) => {
		console.log(prod);
		const exist = cartItems.find((x) => x.id === prod.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === prod.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...prod, qty: 1 }]);
		}
	};

	const onRemove = (prod) => {
		const exist = cartItems.find((x) => x.id === prod.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id === prod.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === prod.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};

	return (
		<div className="carousel">
			<Carousel breakPoints={breakPoints}>
				{data.map((e) => (
					<>
						<div
							key={e.id}
							onClick={() => {
								setKeep(e);
								setState(true);
							}}
							style={{
								...styles,
								backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.4)), url(${e.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						>
							<div
								style={{
									margin: "0px 10px 20px 20px",
									fontWeight: "500",
									fontSize: "18px",
								}}
							>{`${e.name} - ${e.rating}☆`}</div>
							<div
								style={{
									margin: "0px 10px 0px 20px",
									fontWeight: "500",
									fontSize: "24px",
								}}
							>
								{e.seller}
							</div>
						</div>

						<Modal
							isOpen={state}
							onRequestClose={() => setState(false)}
							style={{
								overlay: {
									position: "fixed",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: "rgba(49,49,49,0.4)",
									width: "100vw",
									height: "100vh",

									padding: "0px",
								},
								content: {
									position: "absolute",
									top: "40%",
									left: "40%",
									lineHeight: "1.4",
									// border: "2px solid black",
									margin: "5% 10% 0",
									transform: "translate(-50%, -50%)",
									background: "#f1f1f1",
									borderRadius: "10px",
									width: "50%",
									height: "70%",
									border: "none",
									overflow: "hidden",

									padding: "0px",
								},
							}}
						>
							{show ? (
								<div className="cont">
									<img
										style={{
											width: "437px",
											height: "900px",
											maxHeight: "100%",
										}}
										id="inside_modal"
										src={keep.image}
										alt=""
									/>
									<div className="text_cont">
										<p style={{ marginBottom: "0px", marginRight: "0px" }}>
											{keep.seller}
										</p>
										<div className="cont">
											<p
												style={{
													fontSize: "16px",
													marginRight: "10rem",
													marginTop: "0px",
													fontWeight: "lighter",
												}}
											>
												{keep.name}
											</p>
											<>
												{keep.rating} <span>&#9733;</span>
											</>
										</div>
										{/* --------------------------------------------------------------------------------										 */}
										<div className="prices">
											{/* <Newone
												radio={radio}
												keep.small={keep.small}
												mval={keep.medium}
												lval={keep.large}
											></Newone> */}
											<div className="App">
												<div className="cont">
													<div style={{ marginTop: "11px" }}>
														&#8377;
														<span>{keep.small}</span>
													</div>
													<Radio
														value={keep.small}
														checked={price == keep.small}
														color="primary"
														onChange={handlePrice}
													/>
												</div>
												<div className="cont">
													<div style={{ marginTop: "11px" }}>
														&#8377;
														<span>{keep.medium}</span>
													</div>
													<Radio
														value={keep.medium}
														checked={price == keep.medium}
														color="primary"
														onChange={handlePrice}
													/>
												</div>
												<div className="cont">
													<div style={{ marginTop: "11px" }}>
														&#8377;
														<span>{keep.large}</span>
													</div>
													<Radio
														value={keep.large}
														checked={price == keep.large}
														color="primary"
														onChange={handlePrice}
													/>
												</div>
											</div>
										</div>

										{/* --------------------------------------------------------------------------------										 */}

										<Cart
											keep={keep}
											toggle={toggle}
											onAdd={onAdd}
											onRemove={onRemove}
										></Cart>
									</div>
								</div>
							) : (
								<Cart2
									price={price}
									cartItems={cartItems}
									onRemove={onRemove}
									onAdd={onAdd}
								></Cart2>
							)}

							<div>
								<button
									style={{
										position: "absolute",
										top: "30px",
										right: "10px",
										padding: "5px 7px",
										border: "none",
									}}
									onClick={() => setState(false)}
								>
									X
								</button>
							</div>
						</Modal>
					</>
				))}
			</Carousel>
		</div>
	);
};

export default CarouselItem;
