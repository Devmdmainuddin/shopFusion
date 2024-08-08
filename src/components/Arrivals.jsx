import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import Card from "./card/Card";
import { useEffect, useRef } from "react";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import { register } from "swiper/element/bundle";
// register();

import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='w-12 h-12 absolute right-5 top-1/2 -translate-y-1/2  rounded-full bg-[#979797] text-center leading-[48px]'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white inline-block" />
    </div>
  );
}

function SampleNextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:right-5 right-1 top-1/2 translate-y-[-100%] rounded-full bg-[#c3c3c2] !flex justify-center items-center'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowRightLong />

    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className='w-12 h-12 absolute left-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#979797] text-center leading-[48px]'
      style={{ ...style, }}
      onClick={onClick}
    >
      <IoIosArrowBack className="text-white inline-block" />
    </div>
  );
}

function SamplePrevArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='lg:w-16 lg:h-16 w-10 h-10 absolute lg:left-5 left-1 top-1/2 translate-y-[-100%] rounded-full bg-[#c3c3c2] !flex justify-center items-center z-50'
      style={{ ...style, display: "block", }}
      onClick={onClick}
    >
      <FaArrowLeftLong />

    </div>
  );
}

const Arrivals = () => {
  // const swiperRef = useRef(null);
  // useEffect(() => {
  //   const swiperContainer = swiperRef.current;
  //   const params = {
  //     navigation: true,
  //     loop: true,
  //     //  slidesPerView: 2,
  //     breakpoints: {
  //       640: {
  //         slidesPerView: 2,
  //         spaceBetween: 10,
  //       },
  //       768: {
  //         slidesPerView: 3,
  //         spaceBetween: 20,
  //       },
  //       1024: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },

  //     },
  //     // spaceBetween:30,
  //     // These are new...
  //     injectStyles: [
  //       `
  //           .swiper-button-next,
  //           .swiper-button-prev {
  //           width:30px;
  //           height:30px;
  //             background-color: #979797;
  //             padding: 16px 16px;
  //             border-radius: 100%;
  //             border:1px solid #979797;
  //             color: white;
  //             transition:all 0.4s;
  //           }
  //           // .swiper-button-next:hover,
  //           // .swiper-button-prev:hover{
  //           // border:1px solid #0156FF;
  //           // color:#0156FF;
  //           // background-color: #A2A6B0;
  //           // }
          
  //       `,
  //     ],
  //   };

  //   Object.assign(swiperContainer, params);
  //   swiperContainer.initialize();
  // }, []);

  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },    {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          nextArrow: <SampleNextArrow2 />,
          prevArrow: <SamplePrevArrow2 />,

        }
      }
    ]


  };
  return (
    <div className="my-36">
      <Container>
        <Heading className='mb-12' text='New Arrivals'></Heading>
        {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-3'> */}
      </Container>
      {/* <div className="flex justify-center gap-6 flex-wrap"> */}
      <div className="max-w-[1640px] mx-auto">
        
          {/* <swiper-container ref={swiperRef} init="false" className='flex flex-wrap py-6'>
          <swiper-slide> <ProductCard className='w-full' src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard></swiper-slide>
          <swiper-slide><ProductCard className='w-full' src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard></swiper-slide>
          <swiper-slide><ProductCard className='w-full' src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard></swiper-slide>
          <swiper-slide><ProductCard className='w-full' src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard></swiper-slide>
          <swiper-slide><ProductCard className='w-full' src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard></swiper-slide>

        </swiper-container> */}
        <Slider {...settings}>
          <div >
          <ProductCard  src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
          </div>
          
          <div >
          <ProductCard  src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
          </div>
          <div >
          <ProductCard  src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
          </div>
          {/* <ProductCard src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
          <ProductCard src='/card-3.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
          <ProductCard src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
          <ProductCard src='/card-4.jpg' offer='25%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
         */}
        </Slider>
      </div>


      {/* <Card src='/card-1.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
      <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
      <Card src='/card-1.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
      <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
      <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
      <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
       */}
    </div>

  
  );
};

export default Arrivals;