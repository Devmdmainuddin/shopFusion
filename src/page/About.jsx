import Bredcumb from "../components/layer/Bredcumb";
import Button from "../components/layer/Button";
import Button01 from "../components/layer/Button01";
import Container from "../components/layer/Container";
import Image from "../components/layer/Image";


const About = () => {
    return (
        <div>
            <Container>
                <Bredcumb></Bredcumb>
                <div className="mt-10 lg:mt-[136px] max-h-[776px] grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    <div className="relative ">
                        <Image className="h-full w-full" src='/card-1.jpg' />
                        <div className=" absolute bottom-4 left-1/2 -translate-x-2/4 lg:bottom-8">

                            <Button01 text="Our Brands" />
                        </div>
                    </div>
                    <div className="relative ">
                        <Image className="h-full w-full" src='/card-3.jpg' />
                        <div className=" absolute bottom-4 left-1/2 -translate-x-2/4 lg:bottom-8">
                            <Button01 text="Our Brands" />
                        </div>
                    </div>
                </div>

                <h2 className=" font-dm text-cdrop xl:text-[39px] lastDevice:text-2xl text-3xl xl:my-32 my-10 xl:leading-[52px] text-center">
                    Orebi is one of the world’s leading ecommerce brands and is
                    internationally recognized for celebrating the essence of classic
                    Worldwide cool looking style.
                </h2>
                <div className="mb-[131px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="  p-4 rounded-lg">
                        <h2 className=" font-dm text-2xl font-bold text-[#262626] mb-3">Our Vision</h2>
                        <p className=" font-dm text-base text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="  p-4 rounded-lg">
                        <h2 className=" font-dm text-2xl font-bold text-[#262626] mb-3">Our Story</h2>
                        <p className=" font-dm text-base text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                    <div className="  p-4 rounded-lg">
                        <h2 className=" font-dm text-2xl font-bold text-[#262626] mb-3">Our Brands</h2>
                        <p className=" font-dm text-base text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    </div>
                </div>
            </Container>


        </div>
    );
};

export default About;