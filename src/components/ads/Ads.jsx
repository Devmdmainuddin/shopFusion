import Container from "../layer/Container";
import ads from '/ads_2.jpg'
const Ads = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <div>
                    <img src={ads} alt="" />
                </div>
            </Container>
        </div>
    );
};

export default Ads;