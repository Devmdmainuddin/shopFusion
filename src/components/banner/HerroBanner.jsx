
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner from '/banner-1.jpg'
import { Navigation, Autoplay } from 'swiper/modules';


const HeroBanner = () => {

    console.log('banner', banner)
    return (
        <>
            <Swiper
                style={
                    {
                        "--swiper-navigation-background-color": "#fff",
                        "--swiper-navigation-color": "#fff",
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
                modules={[Navigation, Autoplay]} className="mySwiper">
                {/* {banner} */}
                <SwiperSlide className=''>
                {/* className={`h-[328px] rounded-xl carousel-item relative w-full bg-[url('${banner}')] bg-cover bg-center`} */}
                    <div id="slide1" className={`h-[328px] rounded-xl carousel-item relative w-full bg-[url(${banner})] bg-cover bg-center`}>
                        {/* <img  src="https://i.ibb.co/3TttPjT/pexels-dom-j-7304-227405.jpg" className="w-full h-[500px]  object-cover" /> */}
                        {/* <p className='w-1/2 mx-auto'>Every year, millions of students worldwide apply for scholarships. Whether these scholarship opportunities are for private education tuition or to cover the cost of college education</p> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="carousel-item relative w-full  ">

                        <img src={banner} className="w-full h-[328px] object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={banner} className=" w-full h-[328px]  object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide4" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[328px] bg-center  object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[328px]  object-cover rounded-xl" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[328px]  object-cover rounded-xl" />

                    </div>
                </SwiperSlide>



            </Swiper>
            <div  className={`h-[328px] rounded-xl  w-full bg-[url('${banner}')] bg-cover bg-center`}>

            </div>

        </>
    );
};

export default HeroBanner;