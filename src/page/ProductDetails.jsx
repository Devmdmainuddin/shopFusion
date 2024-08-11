import { IoIosArrowForward } from "react-icons/io";
import Container from "../components/layer/Container";
import { Link, useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { ImStarHalf } from "react-icons/im";
import { useState } from "react";


const ProductDetails = () => {
    const product = useLoaderData();
    let [Quantity, setQuantity] = useState(1);
    return (
        <div >
            <Container>
                <div className='mt-[93px]'>
                    <h2 className='text-[#262626] text-6xl font-bold'>{product.title}</h2>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-[12px] font-normal text-[#767676]'><Link>Home</Link></li>
                        <li><IoIosArrowForward className='text-[12px]' /></li>
                        <li className='text-[12px] font-normal text-[#767676]'> <Link> Products</Link></li>
                    </ul>
                </div>
                <div className="flex justify-center gap-6">
                    <div className="max-w-[400px]">
                        <div>
                            <h2 className="text-[39px] font-bold text-[#262626]">Product</h2>
                            <div className="flex gap-6 mt-4">
                                <div className="star flex text-[#ffc400fa]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <ImStarHalf />
                                </div>
                                <p className="text-[#767676]"> <span>1</span> Review</p>
                            </div>
                            <div className="divider"></div>
                            <p className="flex items-center gap-[22px] mt-6"> <span className="text-[#767676]">$88.00</span><span className="text-xl font-bold text-[#262626]">$44.00</span></p>
                            <div className="flex gap-4 mt-7">
                                <p className="text-[#262626] text-[16px] font-bold">COLOR:</p>
                                <div className="flex gap-3">
                                    <span className='w-5 h-5 hover:p-3 transition-all duration-300 rounded-full bg-black'></span>
                                    <span className='w-5 h-5 hover:p-3 transition-all duration-300 rounded-full bg-[#FF8686]'></span>
                                    <span className='w-5 h-5 hover:p-3 transition-all duration-300 rounded-full bg-[#7ED321]'></span>
                                    <span className='w-5 h-5 hover:p-3 transition-all duration-300 rounded-full bg-[#B6B6B6]'></span>
                                    <span className='w-5 h-5 hover:p-3 transition-all duration-300 rounded-full bg-[#15CBA5]'></span>
                                </div>

                            </div>

                            <div className='flex mt-[30px] items-center gap-4'>
                                <p className="text-[#262626] text-[16px] font-bold">SIZE:</p>
                                <select name="" id="" className='w-[139px] text-[#737373] text-[16px] font-normal border border-[#e8e8e8] outline-none py-1 px-5'>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>

                                </select>
                            </div>
                            <div className='flex mt-[30px] items-center gap-4  '>
                                <p className="text-[#262626] text-[16px] font-bold">QUANTITY:</p>
                                <div className="w-[139px]  bg-[#F0F0F0] text-[#767676] flex justify-between items-center p-3">
                                    <span
                                        className="cursor-pointer inline-block   text-lg font-normal "
                                        onClick={() =>
                                            setQuantity((data) => {
                                                if (data >= 2) {
                                                    return data - 1;
                                                } else {
                                                    return 1;
                                                }
                                            })
                                        }
                                    >
                                        <FaMinus />
                                    </span>
                                    <span className="inline-block px-2 text-lg font-normal">{Quantity}</span>
                                    <span
                                        className="cursor-pointer inline-block  text-lg "
                                        onClick={() => setQuantity(Quantity + 1)}
                                    >
                                        <FaPlus />
                                    </span>
                                </div>

                            </div>
                            <div className="divider"></div>
                            <div className='flex mt-[30px] items-center gap-4'>
                                <h2 className="text-[#262626] text-[16px] font-bold">STATUS:</h2>
                                <p className="text-[#767676]">In stock</p>

                            </div>
                            <div className="divider"></div>
                            <div className="flex gap-5">

                                <button className="py-4 px-10 border border-[#262626] text-[#262626] hover:border-[#262626] hover:text-white hover:bg-[#262626] transition-all duration-500 ease-in-out">Add to Wish List</button>
                                <button className="py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out">Add to Cart</button>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus ">
                                <div className="collapse-title text-[#262626] text-[16px] font-bold">FEATURES  & DETAILS</div>
                                <div className="collapse-content text-[#767676]">
                                    {/* <p>tabindex={0} attribute is necessary to make the div focusable</p> */}
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus ">
                                <div className="collapse-title text-[#262626] text-[16px] font-bold">SHIPPING & RETURNS</div>
                                <div className="collapse-content text-[#767676]">
                                    <p>tabindex={0} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="image">                                
                        <img src={product.image} alt="" />
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProductDetails;