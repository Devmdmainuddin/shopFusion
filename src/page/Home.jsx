import Banner from "../components/banner/Banner";
import HerroBanner from "../components/banner/HerroBanner";
import Card from "../components/card/Card";
import Searchbar from '../components/share/Searchbar'
const Home = () => {
    return (
        <div>
            <Searchbar></Searchbar>
           <HerroBanner></HerroBanner>
           <Banner></Banner>
           <Card></Card>
        </div>
    );
};

export default Home;