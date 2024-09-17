import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";
import Slider from "react-slick";
import LoadingSpinner from "./share/LoadingSpinner";
import {  useGetproductsQuery } from "../services/productApi";



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

const Arrivals = () => {

  const { data, error, isLoading, } = useGetproductsQuery()
  // const [deleteProduct] = useDeleteProductMutation()
  // const handleDelete=async(id)=>{
  //  await deleteProduct(id)
  // }
 
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

    ]


  };


  return (
    <div className="my-36">
      <Container>
        <Heading className='mb-12' text='New Arrivals'></Heading>
      </Container>

      <div className="max-w-[1640px] mx-auto">
        <Slider {...settings}>
          {isLoading && <LoadingSpinner />}
          {error && <p>error:{error.message}</p>}
          {!isLoading && !error && data && data.length > 0 && (
            data.map((item, key) => <ProductCard key={key} item={item}   ></ProductCard>)
          )}
        </Slider>
      </div>


    </div>


  );
};

export default Arrivals;