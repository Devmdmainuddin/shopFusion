import { IoIosArrowForward } from "react-icons/io";
import Container from "../components/layer/Container";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ImStarHalf } from "react-icons/im";


const ProductDetails = () => {
    return (
        <div>
            <Container>
                <div className='mt-[93px]'>
                    <h2 className='text-[#262626] text-6xl font-bold'>Products</h2>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-[12px] font-normal text-[#767676]'><Link>Home</Link></li>
                        <li><IoIosArrowForward className='text-[12px]' /></li>
                        <li className='text-[12px] font-normal text-[#767676]'> <Link> Products</Link></li>
                    </ul>
                </div>
                <div>
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



                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;