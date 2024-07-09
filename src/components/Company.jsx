import Marquee from "react-fast-marquee";
import img1 from '/Alibaba-Logo.png'
import img2 from '/power-point.png'
import img3 from '/BlackRock.png'
import img4 from '/facebook.png'
import img5 from '/google.png'
import img6 from '/microsoft.png'
import img7 from '/twitter.png'
import img8 from '/youtube.png'
import Container from "./layer/Container";



const Company = () => {
    return (
        <div className="my-6">
            <Container>
            <Marquee>
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img1} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img2} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img3} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img4} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img5} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img6} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img7} alt="" />
                <img className="w-28 lg:w-48 flex items-center ml-8 pt-3 justify-center" src={img8} alt="" />
            </Marquee>
            </Container>
           
        </div>
    );
};

export default Company;