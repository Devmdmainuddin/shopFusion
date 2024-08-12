// import { useState } from "react";
import Ads from "../components/ads/Ads";
import Banner from "../components/banner/Banner";
// import HerroBanner from "../components/banner/HerroBanner";
// import Card from "../components/card/Card";
// import Company from "../components/Company";
// import Container from "../components/layer/Container";
// import NewProduct from "../components/NewProduct";
// import Offers from "../components/Offers";
// import Card from "../components/card/Card";
import Slider01 from "../components/banner/Slider01";
import Offers from "../components/Offers";
import Arrivals from "../components/Arrivals";
import Intro from "../components/Intro";
// import NewProduct from "../components/NewProduct";
import Bestsellers from "../components/Bestsellers";
// import Collaps from "../components/Collaps";
// import Banner02 from "../components/banner/Banner02";
// import Banner03 from "../components/banner/Banner03";
import ProductCard01 from "../components/card/ProductCard01";
// import ProductCard02 from "../components/card/ProductCard02";
// import Heading01 from "../components/layer/Heading01";
import useProduct from "../hooks/useProduct";
import { useState } from "react";



const Home = () => {
const [product]=useProduct()
// console.log(product.length);
    // const [open, setOpen] = useState(false);
    // const [open2, setOpen2] = useState(false);
    // const [open3, setOpen3] = useState(false);
    // const [open4, setOpen4] = useState(false);
    // const [open5, setOpen5] = useState(false);
const [datalength,setDatalength]= useState(4)
    return (
        <div>
            <Slider01></Slider01>
            <Intro></Intro>
            {/* <Heading01></Heading01> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {/* {
                product.slice(0,datalength).map(item=> <ProductCard01 key={item._id} item={item}   ></ProductCard01>)
               } */}
               
                {/* <ProductCard01 offer='new' hoverSrc='/card-3.jpg' src='/card-4.jpg' title='Basic Crew Neck Tee' price='$60.00'></ProductCard01>
                <ProductCard02 offer='new' hoverSrc='/card-3.jpg' src='/card-4.jpg' title='Basic Crew Neck Tee' price='$60.00'></ProductCard02>
                <ProductCard01 offer='new' hoverSrc='/card-3.jpg' src='/card-4.jpg' title='Basic Crew Neck Tee' price='$60.00'></ProductCard01>
                <ProductCard01 offer='new' hoverSrc='/card-3.jpg' src='/card-4.jpg' title='Basic Crew Neck Tee' price='$60.00'></ProductCard01> */}
               

            </div>
            {/* <NewProduct/> */}
            <Banner></Banner>
            <Arrivals></Arrivals>
            {/* <Banner02></Banner02>
            <Banner03></Banner03> */}
            <Bestsellers></Bestsellers>
            <Ads></Ads>
            <Offers></Offers>
            {/* <Company></Company> */}
            {/* <section>
                <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
                    <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>


                    <div className="lg:w-8/12 w-full mx-auto">
                       
                        <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                        <div className="w-full md:px-6  ">
                            <div id="mainHeading" onClick={() => setOpen(!open)} className="flex justify-between items-center w-full">
                                <div className=" ">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                        {" "}
                                        <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                                    <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                                <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            </div>
                        </div>

                        

                        <hr className=" w-full lg:mt-10 my-8" />

                        <div className="w-full md:px-6 ">
                            <div id="mainHeading" onClick={() => setOpen2(!open2)} className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                        {" "}
                                        <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span> How can i find the prices or get other information about chanel products?
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                                    <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                                <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            </div>
                        </div>

                        

                        <hr className=" w-full lg:mt-10 my-8" />

                        <div className="w-full md:px-6 ">
                            <div id="mainHeading" onClick={() => setOpen3(!open3)} className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                        {" "}
                                        <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span>
                                        How many collections come out every year?
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                                    <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                                <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            </div>
                        </div>

                        

                        <hr className=" w-full lg:mt-10 my-8" />

                        <div className="w-full md:px-6  ">
                            <div id="mainHeading" onClick={() => setOpen4(!open4)} className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                        {" "}
                                        <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span>
                                        Are all of the fashion collections features on the website?
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                                    <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                                <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            </div>
                        </div>

                      

                        <hr className=" w-full lg:mt-10 my-8" />

                        <div className="w-full md:px-6 ">
                            <div id="mainHeading" onClick={() => setOpen5(!open5)} className="flex justify-between items-center w-full">
                                <div className="">
                                    <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                        {" "}
                                        <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q5.</span>
                                        Where do i find products that i have seen in magazines or Social Media?
                                    </p>
                                </div>
                                <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                                    <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                                <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            </div>
                        </div>

                        <hr className=" w-full lg:mt-10 my-8" />
                    </div>
                </div>
            </section> */}

            {/* <section>
                <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
                    <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
                    <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                        <div className=" ">
                            <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valueable customers</p>
                        </div>

                        <div className=" border-b-2 border-gray-200 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full ">
                            <input placeholder="Search" type="text" aria-label="Search" className="lg:w-96 md:w-72 w-full focus:outline-none placeholder-gray-600 text-base font-normal text-gray-600 leading-4 " />
                            <svg className=" cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 14L10 10" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className=" flex md:flex-row items-center flex-col md:space-x-8 md:mt-16 mt-8">
                        <div className=" md:w-5/12 lg:w-4/12 w-full ">
                            <img src="https://i.ibb.co/8bCs73h/pexels-ron-lach-8128069-1.png" alt="Img of Glass bottle" className="w-full md:block hidden" />
                            <img src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png" alt="Img of Glass bottle" className="w-full md:hidden block " />
                        </div>
                        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                            <Collaps></Collaps>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section>
                <div>
                    <div className="container flex justify-center mx-auto pt-16">
                        <div>
                            <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                        </div>
                    </div>
                    <div className="w-full bg-gray-100 px-10 pt-10">
                        <div className="container mx-auto">
                            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-3xl text-center pb-1">Andres Berlin</div>
                                            <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-3xl text-center pb-1">Silene Tokyo</div>
                                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-3xl text-center pb-1">Johnson Stone</div>
                                            <p className="text-gray-800 text-sm text-center">Manager Development</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-3xl text-center pb-1">Dean Jones</div>
                                            <p className="text-gray-800 text-sm text-center">Principal Software Engineer</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-3xl text-center pb-1">Rachel Adams</div>
                                            <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <div className="font-bold text-3xl text-center pb-1">Charles Keith</div>
                                            <p className="text-gray-800 text-sm text-center">UX Designer</p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-5">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section>
                <div>
                    <div className="container flex justify-center mx-auto pt-16">
                        <div>
                            <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                        </div>
                    </div>
                    <div className="w-full px-10">
                        <div className="container mx-auto">
                            <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
                                <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                                    <div className="bg-top bg-cover bg-no-repeat h-64">
                                        <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                    </div>
                                    <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                        <p className="text-xl text-center text-gray-800 font-normal mb-1">Andres Berlin</p>
                                        <p className="text-center text-base text-gray-600">Chief Executive Officer</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mx-4 mb-20 xl:max-w-sm lg:w-1/2 relative">
                                    <div className="bg-top bg-cover bg-no-repeat h-64">
                                        <img src="https://cdn.tuk.dev/assets/side-view-woman-reading-sofa_23-2148294040.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                    </div>
                                    <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                        <p className="text-xl text-center text-gray-800 font-normal mb-1">Silene Tokyo</p>
                                        <p className="text-center text-base text-gray-600">Chief Marketing Officer</p>
                                    </div>
                                </div>
                                <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
                                    <div className="bg-top bg-cover bg-no-repeat h-64">
                                        <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt className="h-full w-full overflow-hidden object-cover rounded shadow" />
                                    </div>
                                    <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                                        <p className="text-xl text-center text-gray-800 font-normal mb-1">Richard Johnson</p>
                                        <p className="text-center text-base text-gray-600">Head of Talent Manegement</p>
                                        <div className="flex w-full items-center justify-between pt-6 pb-1">
                                            <p className="text-xl font-normal text-gray-800">Silene Tokyo</p>
                                            <div className="flex justify-center">
                                                <a href="javascript:void(0)" className="mx-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </div>
                                                </a>
                                                <a href="javascript:void(0)" className="mx-2">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-base text-gray-600 pb-3">VP Operations</p>
                                        <p className="text-sm text-gray-600 leading-6 font-normal">The Vice President, Operations is responsible for planning, directing, and overseeing finance and operations activities in the organization, and ensuring development.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section>
                <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
                    <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                            <div>
                                <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Renovate your home</p>
                            </div>
                            <div className="mt-4 lg:w-4/5 xl:w-3/5">
                                <p className="text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                            <div className="mt-16 w-full">
                                <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                                    <p className="text-xl font-medium leading-5">See More</p>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                            <div>
                                <img className="hidden lg:block" src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png" alt="sofa" />
                                <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png" alt="sofa" />
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                                <div>
                                    <img className="hidden lg:block" src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png" alt="chairs" />
                                    <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="chairs" />
                                </div>
                                <div>
                                    <img className="hidden lg:block" src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="chairs" />
                                    <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png" alt="chairs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
        </div>
    );
};

export default Home;