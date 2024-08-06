import Slider from "react-slick";

const Banner01 = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Slider {...settings}>
      <div>
       <img src="/banner.jpg" alt="" />
      </div>
      <div>
      <img src="/banner.jpg" alt="" />
      </div>
      <div>
      <img src="/banner.jpg" alt="" />
      </div>
      <div>
      <img src="/banner.jpg" alt="" />
      </div>
      <div>
      <img src="/banner.jpg" alt="" />
      </div>
      <div>
      <img src="/banner.jpg" alt="" />
      </div>
    </Slider>
    );
};

export default Banner01;