import Carousel from "react-elastic-carousel";
import "./Carousel.css";

const IconSlider = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 230, itemsToShow: 2 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
    ];

    const styles = {
        display: "flex",
        height: "275px",
        width: "100%",
        margin: "0 15px",
        borderRadius: "20px",
        boxShadow: "2px 1px 5px grey",
        flexDirection: "column-reverse",
        textAlign: "left",
        color: "white"
    }

    const data = [
        {
            id: 1,
            image: "./Images/SliderIcons/Cake.jpg",
            name: "CAKE"
        },
        {
            id: 2,
            image: "./Images/SliderIcons/Puff.jpg",
            name: "PUFF"
        },
        {
            id: 3,
            image: "./Images/SliderIcons/Cupcake.jpg",
            name: "CUP CAKE"
        },
        {
            id: 4,
            image: "./Images/SliderIcons/Bread.jpg",
            name: "BREAD"
        },
        {
            id: 5,
            image: "./Images/SliderIcons/Biscuit.jpg",
            name: "BISCUIT"
        },
        {
            id: 6,
            image: "./Images/SliderIcons/Donut.jpg",
            name: "DONUT"
        },
    ]

    return (
        <div className="carousel">
            <Carousel breakPoints={breakPoints}>
                {data.map((e) => (
                    <div key={e.id} style={{ ...styles, backgroundImage: `linear-gradient(rgb(255, 255, 255, 0), rgb(0, 0, 0, 0.4)), url(${e.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div style={{
                            fontWeight: "700",
                            fontSize: "32px",
                            backgroundColor: "#FFE24D",
                            textAlign: "center",
                            color: "black",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderBottom: "1px solid gray",
                            padding: "5px"
                        }}>{e.name}</div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default IconSlider;