import React from "react";
import "./Carousel.css";

export default function Last({ price, cartItems }) {
	// console.log('price, cartItems:', price, cartItems)

	return (
		<div style={{ padding: "10% 10%" }}>
			<h1 style={{textAlign:"center",color:"green" }}>Order Succesful</h1>
			{cartItems.map((item) => (
				<div className="addFlex" style={{background:"#ffe34d",borderRadius: "20px"}}>
					<img src={item.image} className="image_css" alt="" />
					<div style={{ marginLeft: "10px", marginTop: "10px" }}>
						<div style={{ fontSize: "14px" }}>{item.name}</div>
						<div>{item.seller}</div>
						<div>
							&#8377;{+price + 49}
						</div>
					</div>
				</div>
            ))}
            <h2 style={{textAlign:"center",color:"green"}}>Thanks for shopping...</h2>
		</div>
	);
}
