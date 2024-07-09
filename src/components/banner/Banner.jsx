import Container from "../layer/Container";
import banner_1 from '/banner-1.jpg'
import banner_2 from '/banner-2.jpg'
import banner_3 from '/banner-3.jpg'
const Banner = () => {
    return (
        <div className="mt-[128px]">
            <Container>
                <div className="flex justify-between flex-col md:flex-row gap-6">
                    <div>
                        {/* className=" w-full h-auto md:w-[780] md:h-[780px] " */}
                        <img src={banner_1} alt="" className=" w-full h-auto md:max-w-[780] md:max-h-[780px] " />
                    </div>
                    <div className="flex flex-col  gap-6">
                        {/* className="w-full h-auto md:w-[784] md:h-[370px] " */}
                        <img src={banner_2} alt="" className="w-full h-auto md:max-w-[784] md:max-h-[370px] " />
                        <img src={banner_3} alt="" className="w-full h-auto md:max-w-[784] md:max-h-[370px] " />
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Banner;