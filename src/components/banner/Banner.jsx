import Container from "../layer/Container";
import Image from "../layer/Image";
import banner_1 from '/banner-1.jpg'
import banner_2 from '/banner-2.jpg'
import banner_3 from '/banner-3.jpg'
const Banner = () => {
    return (
        <div className="mt-[128px]">
            <Container>
                {/* <div className="flex justify-between flex-col md:flex-row gap-6">
                    <div>
                        <img src={banner_1} alt="" className=" w-full  md:max-w-[780] max-h-[780px] " />
                    </div>
                    <div className="flex flex-col  gap-6">
                        <img src={banner_2} alt="" className="w-full md:max-w-[784] max-h-[370px] " />
                        <img src={banner_3} alt="" className="w-full  md:max-w-[784]max-h-[370px] " />
                    </div>

                </div> */}
                <div className="md:h-[780px] grid grid-cols-2 grid-rows-2 md:gap-10 gap-3">
                    <Image src={banner_1} imgClassName='h-full' className='row-span-2'></Image>
                    <Image src={banner_2} imgClassName='h-full'></Image>
                    <Image src={banner_3} imgClassName='h-full'></Image>
                </div>
            </Container>
        </div>
    );
};

export default Banner;