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
           <div>
           <h1 className=' mt-[128px] mb-12 text-[#262626] text-[39px] font-bold'>New Arrivals</h1>
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3'>
           <Card></Card>
            </div>
           </div>
          
           <Ads></Ads>
        </div>
    );
};

export default Home;