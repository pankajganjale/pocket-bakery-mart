import Carousel from "react-elastic-carousel";
import "./Carousel.css";

const Item = ({ data }) => {

    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 4 },
    // ];
    const breakPoints = [
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
    ];

    const styles = {
        display: "flex",
        height: "355px",
        width: "100%",
        margin: "0 15px",
        borderRadius: "20px",
        boxShadow: "2px 1px 5px grey",
        flexDirection: "column-reverse"
    }

    return (
        <div className="carousel">
            <Carousel breakPoints={breakPoints}>
                {data.map((e) => (
                    <div key={e.id} style={{ ...styles, backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.4)), url(${e.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="bottomDiv">
                            <div>{e.name}</div>
                            <div>{e.rating}★</div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Item;