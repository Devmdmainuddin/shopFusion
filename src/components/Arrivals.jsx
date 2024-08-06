import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "./card/Card";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const {  style, onClick } = props;
    return (
      <div
        className='w-12 h-12 absolute right-5 top-1/2 -translate-y-1/2  rounded-full bg-[#979797] text-center leading-[48px]'
        style={{ ...style, }}
        onClick={onClick}
      >
        <IoIosArrowForward className="text-white inline-block" />
        </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  style, onClick } = props;
    return (
      <div
        className='w-12 h-12 absolute left-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-[#979797] text-center leading-[48px]'
        style={{ ...style,  }}
        onClick={onClick}
      >
        <IoIosArrowBack className="text-white inline-block"/>
        </div>
    );
  }
const Arrivals = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

    };
    return (
        <div className="my-36">
            <Container>
                <Heading className='mb-12' text='New Arrivals'></Heading>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-3'> */}
                </Container>
                {/* <div className="flex justify-center gap-6 flex-wrap"> */}
                <div className="max-w-[1640px] mx-auto">
                    <Slider {...settings}>

                        <ProductCard  src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                        <ProductCard  src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                        <ProductCard  src='/card-3.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                        <ProductCard  src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                        <ProductCard  src='/card-4.jpg' offer='25%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>


                    </Slider>





                </div>


                {/* <Card src='/card-1.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card> */}
                {/* </div> */}
           
        </div>
    );
};

export default Arrivals;