import Navbar from "../../SharedComponents/Navbar/Navbar";
import Search from "./Search";
import CarouselItem from "./CarouselItem";
import Heading from "./Heading";
import { RequestCake } from "../Utils/Request";
import { useEffect, useState } from "react";
import Item from "./Item";
import IconSlider from "./IconSlider";
import Filter from "./Filter";
import FilterModal from "../Modals/FilterModal/FilterModal";

const Home = () => {

    const [cakes, setCakes] = useState([]);
    const [item, setItem] = useState([]);
    const [shop, setShop] = useState([]);
    const [filtermodal, setFiltermodal] = useState(false);

    useEffect(() => {
        getData();
        getItem();
        getShop();
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

    const styles = {
        width: "90%",
        margin: "auto"
    }

    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Filter displayModal={setFiltermodal}></Filter>
            { filtermodal && <FilterModal showModal={setFiltermodal}></FilterModal> }
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