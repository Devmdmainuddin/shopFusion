// import { useState } from "react";
import Ads from "../components/ads/Ads";
import Banner from "../components/banner/Banner";
import Slider01 from "../components/banner/Slider01";
import Offers from "../components/Offers";
import Arrivals from "../components/Arrivals";
import Intro from "../components/Intro";
import Bestsellers from "../components/Bestsellers";





const Home = () => {

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