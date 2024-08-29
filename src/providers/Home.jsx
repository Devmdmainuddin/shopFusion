import { Link } from "react-router-dom";
import HeroBanner from "../components/banner/HeroBanner";
import SingleCard from "../components/SingleCard";
import SingleBanner from "../components/banner/SingleBanner";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { ImStarHalf } from "react-icons/im";
import { FiBarChart2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import builds from '/custome_builds.jpg'
import laptopsimg from '/laptops.jpg'
import desktops from '/desktops.jpg'
import monitor from '/monitor.jpg'
import build from '/builds.jpg'
import laptop from '/laptop.jpg'
import zip from '/zip.png'
import monitors from '/monitors.jpg'

import { BsCart } from "react-icons/bs";
import Partnar from "../components/Partnar";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";

const Home = () => {
    const { electronics, menClothing, womenClothing } = useContext(ProductContext)

    return (
        <>
            <HeroBanner></HeroBanner>
            {/* new Product */}
            <section className="newProduct">
                <div className="flex justify-between items-center mt-[33px] max-w-[1398px] mx-auto px-6">
                    <h2 className="text-[22px] font-semibold">New Products</h2>
                    <Link Link to='/all-products' className="text-[#0156FF] text-[13px] font-normal">See All New Products</Link>
                </div>
                <div className=" max-w-[1398px] mx-auto px-6">
                    <SingleCard></SingleCard>
                </div>
            </section>
            <section className="banner-1">
                <div className="max-w-[1398px] px-6 mx-auto bg-[#F5F7FF] py-6 flex justify-center items-center gap-6">
                    <img src={zip} alt="" /> <div className="w-[2px] h-3 bg-slate-500"></div> <h2>own it now, up to 6 months interest free learn more</h2>
                </div>
            </section>
            <section className="electronicsProduct">
                <div className="max-w-[1398px] mx-auto px-6  my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                    <SingleBanner image={builds} categoreys='electronics'></SingleBanner>
                    {electronics.slice(0,5).map(electronic =>
                        <Link to='/products-Details' key={electronic._id} className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={electronic.image} alt="" />
                                        <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                            <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                            <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                        </div>

                                    </div>


                                    <div className="relative block ">
                                        <div className='flex justify-between'>
                                            <div className="flex  mb-3 text-[#E9A426]">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <ImStarHalf />
                                            </div>
                                            <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                        </div>

                                        <h6 className="font-normal text-sm  mt-2 mb-5"> {electronic.title}EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                        <div className='flex flex-col mb-2'>
                                            <span className="font-bold  line-through text-[#666666]">$249</span>
                                            <span className=" text-lg font-semibold">$149</span>
                                        </div>
                                        <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                            <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </Link>
                    )}
                </div>
            </section>

            <section className="mensCollection">
                <Tabs className='max-w-[1398px] mx-auto px-6'>
                    <TabList>
                        <Tab>Cloting</Tab>
                        <Tab>shoes</Tab>
                        <Tab>Muslim Wear</Tab>
                        <Tab>Accessories</Tab>
                        <Tab>Bags</Tab>
                        <Tab>Watches</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map(desktops =>
                                <Link to='/products-Details' className="" key={desktops._id}>
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={desktops.image} alt="" />
                                                <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                                </div>

                                            </div>


                                            <div className="relative block ">
                                                <div className='flex justify-between'>
                                                    <div className="flex  mb-3 text-[#E9A426]">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <ImStarHalf />
                                                    </div>
                                                    <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                                </div>

                                                <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">$249</span>
                                                    <span className=" text-lg font-semibold">$149</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )}



                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map(desktops =>
                                <Link to='/products-Details' className="" key={desktops._id}>
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={desktops.image} alt="" />
                                                <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                                </div>

                                            </div>


                                            <div className="relative block ">
                                                <div className='flex justify-between'>
                                                    <div className="flex  mb-3 text-[#E9A426]">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <ImStarHalf />
                                                    </div>
                                                    <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                                </div>

                                                <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">$249</span>
                                                    <span className=" text-lg font-semibold">$149</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )}



                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map(desktops =>
                                <Link to='/products-Details' className="" key={desktops._id}>
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={desktops.image} alt="" />
                                                <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                                </div>

                                            </div>


                                            <div className="relative block ">
                                                <div className='flex justify-between'>
                                                    <div className="flex  mb-3 text-[#E9A426]">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <ImStarHalf />
                                                    </div>
                                                    <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                                </div>

                                                <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">$249</span>
                                                    <span className=" text-lg font-semibold">$149</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )}



                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map(desktops =>
                                <Link to='/products-Details' className="" key={desktops._id}>
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={desktops.image} alt="" />
                                                <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                                </div>

                                            </div>


                                            <div className="relative block ">
                                                <div className='flex justify-between'>
                                                    <div className="flex  mb-3 text-[#E9A426]">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <ImStarHalf />
                                                    </div>
                                                    <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                                </div>

                                                <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">$249</span>
                                                    <span className=" text-lg font-semibold">$149</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )}



                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map(desktops =>
                                <Link to='/products-Details' className="" key={desktops._id}>
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={desktops.image} alt="" />
                                                <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                                </div>

                                            </div>


                                            <div className="relative block ">
                                                <div className='flex justify-between'>
                                                    <div className="flex  mb-3 text-[#E9A426]">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <ImStarHalf />
                                                    </div>
                                                    <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                                </div>

                                                <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">$249</span>
                                                    <span className=" text-lg font-semibold">$149</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )}



                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map(desktops =>
                                <Link to='/products-Details' className="" key={desktops._id}>
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={desktops.image} alt="" />
                                                <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                                </div>

                                            </div>


                                            <div className="relative block ">
                                                <div className='flex justify-between'>
                                                    <div className="flex  mb-3 text-[#E9A426]">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <ImStarHalf />
                                                    </div>
                                                    <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                                </div>

                                                <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">$249</span>
                                                    <span className=" text-lg font-semibold">$149</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )}



                        </div>
                    </TabPanel>



                </Tabs>
            </section>

            {/* tabs products */}
          
            {/* women Clothing */}
            <section className="womenClothing">
                <div className="max-w-[1398px] px-6 mx-auto my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                    <SingleBanner image={monitor} categoreys='women Clothing'></SingleBanner>
                    {womenClothing.slice(0,5).map(laptop =>
                        <div className="" key={laptop._id}>
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        {/* <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-700 group-hover:scale-110 group-hover:opacity-0 group-hover:invisible " src={monitors} alt="" />
                                <img className="   w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-700  group-hover:scale-110 opacity-0 invisible  group-hover:opacity-100  group-hover:visible " src={laptop} alt="" /> */}
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-700 group-hover:scale-110  group-hover:hidden " src={laptop.image} alt="" />
                                        <img className=" hidden  w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-700  group-hover:scale-110 group-hover:block " src={laptop} alt="" />
                                        <div className='absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-4 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible flex items-center gap-3'>
                                            <FaRegHeart aria-label='add to wishlish'
                                                title='add to wishlish' className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] transition-all duration-500 hover:border-[#0156FF] hover:bg-[#0156FF] hover:text-white rounded-full' />
                                            <FiBarChart2 aria-label='add to cart'
                                                title='add to cart' className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] transition-all duration-500 hover:border-[#0156FF] hover:bg-[#0156FF] hover:text-white rounded-full mt-1' />
                                            <FiBarChart2 aria-label='quick view'
                                                title='quick view' className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] transition-all duration-500 hover:border-[#0156FF] hover:bg-[#0156FF] hover:text-white rounded-full mt-1' />
                                        </div>

                                    </div>


                                    <div className="relative block ">
                                        <div className='flex justify-between'>
                                            <div className="flex  mb-3 text-[#E9A426]">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <ImStarHalf />
                                            </div>
                                            <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                        </div>

                                        <h6 className="font-normal text-sm  mt-2 mb-5 transition-all duration-500 hover:text-lime-700">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                        <div className='flex flex-col mb-2'>
                                            <span className="font-bold  line-through text-[#666666]">$249</span>
                                            <span className=" text-lg font-semibold">$149</span>
                                        </div>
                                        <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                            <Link className=" rounded-full border-2 transition-all duration-500 border-[#0156FF] text-[#0156FF] hover:bg-[#0156FF] hover:text-white flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    )}


                </div>
            </section>

            <div className="px-6">
                <Partnar></Partnar>
            </div>
            <div className="px-6">
                <Blogs></Blogs>
            </div>
            <div className="px-6 max-w-[1398px] mx-auto">
                <Testimonials></Testimonials>
            </div>

            <Benefits></Benefits>

        </>
    );
};

export default Home;