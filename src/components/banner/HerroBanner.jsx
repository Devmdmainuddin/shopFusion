
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner from '/hero-1.jpg'
import { Navigation, Autoplay } from 'swiper/modules';


const HeroBanner = () => {


    return (
        <>
            <Swiper
                style={
                    {
                        "--swiper-navigation-background-color": "#828687",
                        "--swiper-navigation-color": "#06c7f7dd",
                        "--swiper-navigation-size": "25px",
                        "--swiper-pagination-color": "#fff"
                    }
                }

                navigation={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]} className="mySwiper z-0 ">
                {/* {banner} */}
                <SwiperSlide className=''>
                {/* className={`h-[328px] rounded-xl carousel-item relative w-full bg-[url('${banner}')] bg-cover bg-center`} */}
                    <div id="slide1" className="carousel-item relative w-full ">
                        {/* <img  src="https://i.ibb.co/3TttPjT/pexels-dom-j-7304-227405.jpg" className="w-full h-[500px]  object-cover" /> */}
                        <img src={banner} className="w-full h-[597px] object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="carousel-item relative w-full  ">

                        <img src={banner} className="w-full h-[597px] object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={banner} className=" w-full h-[597px]  object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide4" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[597px] bg-center  object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[597px]  object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[597px]  object-cover rounded-xl" />

                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default HeroBanner;