import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import useProduct from "../hooks/useProduct";
import LoadingSpinner from "./share/LoadingSpinner";
import useProducts from "../hooks/useProducts";


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
  const [products,loading]=useProducts()
  // const [product,loading] =useProduct()

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
        breakpoint: 1484,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,

      //     nextArrow: <SampleNextArrow2 />,
      //     prevArrow: <SamplePrevArrow2 />,

      //   }
      // }
    ]


  };
  if (loading) return <LoadingSpinner />
  return (
    <div className="my-36">
      <Container>
        <Heading className='mb-12' text='New Arrivals'></Heading>
      </Container>
      
      <div className="max-w-[1640px] mx-auto">
        <Slider {...settings}>
        {
          products.map(item => <ProductCard key={item._id} item={item}   ></ProductCard>)
        }
     </Slider>
      </div>


    </div>


  );
};

export default Arrivals;