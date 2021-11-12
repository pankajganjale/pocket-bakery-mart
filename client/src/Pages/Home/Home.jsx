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
import { provider, auth } from "./fireBase";
const Home = () => {
  const [cakes, setCakes] = useState([]);
  const [item, setItem] = useState([]);
  const [shop, setShop] = useState([]);
  const [filtermodal, setFiltermodal] = useState("");

  useEffect(() => {
    getData();
    getItem();
    getShop();
  }, []);

  const getData = async () => {
    const { data } = await RequestCake.get("/cake");
    setCakes(data);
  };

  const getItem = async () => {
    const { data } = await RequestCake.get("/item");
    setItem(data);
  };

  const getShop = async () => {
    const { data } = await RequestCake.get("/shop");
    setShop(data);
  };

  const styles = {
    width: "90%",
    margin: "auto",
  };
  let [loggedin, setLoggedIn] = useState(false);
  let [name, setName] = useState("");
  let [url, setUrl] = useState("");
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("result:", result);
        console.log("result1:", "result.bc.bc");
        setName(result.user.displayName);
        setUrl(result.user.photoURL);
        setLoggedIn(result.user);
      })
      .catch((err) => setLoggedIn(false));
    console.log("yep we are here now");
  };
  return (
    <div>
      <Navbar loggedIn={loggedin} signIn={signin} src={url} name={name} />
      <Search></Search>
      <Filter setFiltermodal={setFiltermodal}></Filter>

      <div style={styles}>
        <Heading heading1="Order What Makes You Happy"></Heading>
        {filtermodal === 5 ? (
          <FilterModal setFiltermodal={setFiltermodal} />
        ) : (
          ""
        )}
        <IconSlider></IconSlider>
        <Heading heading1="Recommended Cakes"></Heading>
        <CarouselItem data={cakes}></CarouselItem>
        <Heading heading1="Inspiration For Your Next Order"></Heading>
        <CarouselItem data={item}></CarouselItem>
        <Heading heading1="Bakeries Near You"></Heading>
        <Item data={shop}></Item>
      </div>
      {/* {filtermodal && <FilterModal showModal={setFiltermodal}></FilterModal>} */}
    </div>
  );
};

export default Home;
