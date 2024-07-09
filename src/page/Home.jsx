import Ads from "../components/ads/Ads";
import Banner from "../components/banner/Banner";
import HerroBanner from "../components/banner/HerroBanner";
import Card from "../components/card/Card";
import Searchbar from '../components/share/Searchbar'
import Product from "./Product";
const Home = () => {
    return (
        <div>
            <Searchbar></Searchbar>
           <HerroBanner></HerroBanner>
           <Banner></Banner>
           <Product></Product>
           <Card></Card>
           <Ads></Ads>
        </div>
    );
};

export default Home;