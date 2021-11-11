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

import Carousel from "react-elastic-carousel";
import "./Carousel.css";
// import CarouselItem from "./CarouselItem";

const CarouselItem = ({ data }) => {

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
    color: "white"
  }

  return (
    <div className="carousel">
      <Carousel breakPoints={breakPoints}>
        {data.map((e) => (
          <div key={e.id} style={{ ...styles, backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.4)), url(${e.image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div style={{margin: "0px 10px 20px 20px", fontWeight: "500", fontSize: "18px"}}>{`${e.name} - ${e.rating}☆`}</div>
            <div style={{margin: "0px 10px 0px 20px", fontWeight: "500", fontSize: "24px"}}>{e.seller}</div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselItem;