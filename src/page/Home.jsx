import Ads from "../components/ads/Ads";
import Banner from "../components/banner/Banner";
import HerroBanner from "../components/banner/HerroBanner";
import Card from "../components/card/Card";
import Company from "../components/Company";
import Container from "../components/layer/Container";

const Home = () => {
    return (
        <div>

            <HerroBanner></HerroBanner>
            <Banner></Banner>
            <Container>
                <div>
                    <h1 className=' mt-[128px] mb-12 text-[#262626] text-[39px] font-bold'>New Arrivals</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3'>
                        <Card></Card>
                    </div>
                </div>
            </Container>


            <Ads></Ads>
            <Container>
                <div>
                    <h1 className=' mt-[128px] mb-12 text-[#262626] text-[39px] font-bold'>Special Offers</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3'>
                        <Card></Card>
                    </div>
                </div>
            </Container>
           
            <Company></Company>
        </div>
    );
};

export default Home;