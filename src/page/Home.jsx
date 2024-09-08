// import { useState } from "react";
import Ads from "../components/ads/Ads";
import Banner from "../components/banner/Banner";
import Slider01 from "../components/banner/Slider01";
import Offers from "../components/Offers";
import Arrivals from "../components/Arrivals";
import Intro from "../components/Intro";
import Bestsellers from "../components/Bestsellers";
import useProduct from "../hooks/useProduct";
import { useState } from "react";


// import HerroBanner from "../components/banner/HerroBanner";
// import Card from "../components/card/Card";
// import Company from "../components/Company";
// import Container from "../components/layer/Container";

// import Offers from "../components/Offers";
// import Card from "../components/card/Card";
// import NewProduct from "../components/NewProduct";
// import Collaps from "../components/Collaps";
import Banner02 from "../components/banner/Banner02";
import Banner03 from "../components/banner/Banner03";
import ProductCard01 from "../components/card/ProductCard01";
import NewProduct from "../components/NewProduct";
// import ProductCard02 from "../components/card/ProductCard02";
// import Heading01 from "../components/layer/Heading01";




const Home = () => {
// const [product]=useProduct()

// const [datalength,setDatalength]= useState(4)
    return (
        <div>
            <Slider01></Slider01>
            <Intro></Intro>
            <Banner></Banner>
            <Arrivals></Arrivals>
            {/* <Banner02></Banner02>
            <Banner03></Banner03> */}
            <Bestsellers></Bestsellers>
            <Ads></Ads>
            <Offers></Offers>
         
            
           
            
        </div>
    );
};

export default Home;