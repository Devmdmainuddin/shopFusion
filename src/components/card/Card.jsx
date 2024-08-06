
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";


// import { FaCartShopping } from 'react-icons/fa6';
const OverlayLi = ({ text, icon }) => {
    return (
        <li >
            <Link className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>
                {text}{icon}
            </Link>
        </li>
    )

}

const Card = ({ src, alt, className, offer, title, price, brand }) => {
    return (
        <>
            <div className={`group ${className}`}>
                <div className="image h-auto lg:h-[370px] relative overflow-hidden">
                    <img className="w-full h-full object-cover" src={src} alt={alt} />

                    <button className={`absolute top-5 left-5 bg-[#262626] text-[#FFFFFF]  py-2 ${offer ? 'px-8' : '-px-8'}  `}>{offer}</button>

                    <div className="overlay w-full absolute bg-[#fff] bottom-0 translate-y-[100%] left-0 group-hover:translate-y-[0] transition-all duration-300">

                        <ul className='font-DM lg:text-base text-sm font-normal pr-8 '>
                            <OverlayLi text='Add to Wish List' icon={<FaHeart />}></OverlayLi>
                            <OverlayLi text='Compare' icon={<LuRefreshCcw />}></OverlayLi>
                            <OverlayLi text='Add to Cart' icon={<FaShoppingCart />}></OverlayLi>
                           
                        </ul>
                    </div>

                </div>

                <div className="text font-DM px-3 lg:px-0">
                    <Link to='/details' className='flex justify-between items-baseline  pt-6 '>
                        <h2 className="text-xl font-bold cursor-pointer">{title}</h2>
                        <p className='text-[#767676] text-base font-normal leading-7 '> {price}</p>
                    </Link>
                    <p className='text-[#767676] text-base font-normal leading-7 pt-4'> {brand}</p>

                </div>

            </div>
            {/* <div className='group'>
                        <div className="image relative overflow-hidden">
                            <p className='md:py-2 md:px-8 p-2 text-sm font-bold text-white bg-black absolute top-5 left-5 '>New</p>
                            <img src={card_3} alt="" />
                            <div className='flex flex-col items-end py-6 px-8 group-hover:bottom-0 transition-all duration-700 absolute left-0 right-0 -bottom-full bg-white w-full'>
                                <button className='flex items-center gap-x-4 mt-5'>Add to Wish List <FaHeart /></button>
                                <button className='flex items-center gap-x-4 mt-5'>Compare <LuRefreshCcw
                                    className='text-black' /></button>
                                <button className=' flex items-center gap-x-4 mt-5'>Add to Cart <FaCartShopping /></button>
                            </div>
                        </div>
                        <div className="content bg-white ">
                            <div className=' py-6 flex justify-between items-center'>
                                <h2 className='text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className='text-[#767676]'>$44.00</p>
                            </div>
                            <p className='text-[#767676]'>Black</p>

                        </div>

                    </div> */}

        </>

    );
};

export default Card;