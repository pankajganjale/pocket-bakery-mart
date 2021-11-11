import Navbar from "../../SharedComponents/Navbar/Navbar";
import Search from "./Search";
// import Carousel from "react-elastic-carousel";
// import "./Carousel.css";
import CarouselItem from "./CarouselItem";
import Heading from "./Heading";
import { RequestCake } from "../Utils/Request";
import { useEffect, useState } from "react";
import Item from "./Item";
import IconSlider from "./IconSlider";

const Home = () => {

    const [cakes, setCakes] = useState([]);
    const [item, setItem] = useState([]);
    const [shop, setShop] = useState([]);
    // const [popularProducts, setPopularProducts] = useState([]);
    // let popularProducts = [];

    useEffect(() => {
        getData();
        getItem();
        getShop();
        // getPopular();
        // console.log(popularProducts)
    }, [])

    const getData = async () => {
        const { data } = await RequestCake.get("/cake");
        setCakes(data);
    }

    const getItem = async () => {
        const { data } = await RequestCake.get("/item");
        setItem(data);
    }

    const getShop = async () => {
        const { data } = await RequestCake.get("/shop");
        setShop(data);
    }

    // const getPopular = () => {
    //     const popular = cakes.map((e) => {
    //         if (e.trend === "Best Seller") return e;
    //     }).filter((e) => {if (e !== undefined) return e})
    //     setPopularProducts(popular);
    //     console.log(popularProducts)
    // }

    // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 4 },
    // ];

    const styles = {
        width: "90%",
        margin: "auto"
    }

    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <div style={styles}>
                <Heading heading1="Order What Makes You Happy"></Heading>
                <IconSlider></IconSlider>
                <Heading heading1="Recommended Cakes"></Heading>
                <CarouselItem data={cakes}></CarouselItem>
                <Heading heading1="Inspiration For Your Next Order"></Heading>
                <CarouselItem data={item}></CarouselItem>
                <Heading heading1="Bakeries Near You"></Heading>
                <Item data={shop}></Item>
            </div>
        </div>
    )
}

export default Home;