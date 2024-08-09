import { Link } from "react-router-dom";
import Button from "../layer/Button";
import { FaEye, FaHeart, FaPlus, FaShoppingCart, FaStar } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const OverlayLi = ({ src, icon }) => {
    return (
        <li >
            <Link to={src} className='w-10 h-10 rounded-full border  hover:text-[#fff] hover:bg-[#fed700] text-center leading-[40px] flex justify-center items-center transition-all duration-300 cursor-pointer' >{icon}</Link>
        </li>
    )

}

const ProductCard02 = ({ src, hoverSrc, alt, offer, title, className, price }) => {
    return (
        <div className={`w-[350px] group mx-auto ${className} overflow-hidden hover:shadow-shadow `}>
            <div className="image w-full h-[370px] relative">
                <button className={`absolute top-5 left-5 bg-[#fed700] z-50 hover:text-[#fff] hover:bg-[#f3283d] text-sm py-2 transition-all duration-700 ${offer ? 'px-8' : 'px-0'}`}>{offer}</button>
                <div className="image w-full h-full relative">
                    <img className='w-full h-full object-cover opacity-100 group-hover:opacity-0  transition-all  duration-700' src={src} alt={alt} />
                    <img className=' absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible  w-full h-full object-cover  transition-all duration-700' src={hoverSrc} alt={alt} />
                </div>
                <button className={`absolute -bottom-4 -right-[88px] group-hover:right-0 bg-[#fed700] z-50 hover:text-[#fff] hover:bg-[#f3283d] text-sm py-2 px-4 transition-all duration-700 flex items-center gap-4 `}><FaPlus />add to cart</button>


            </div>
            <div className="text py-6 relative">
            <div className=" text-[#fed700] flex gap-2 justify-center items-center ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className="bottom-0 group-hover:-bottom-full opacity-100 group-hover:opacity-0 transition-all duration-1000">
                
                
                    <Link to='/details' className="">
                        <h3 className=" font-normal text-center text-[#444] text-lg">{title}</h3>
                    </Link>
                    <p className="price text-center font-DM text-[#f3283d] my-3">{price}</p>
                </div>
                
                {/* <Button className='absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-1 opacity-0 group-hover:opacity-100' icon={<FaShoppingCart />} text='add to cart'></Button> */}
                <div className="overlay w-full absolute border-t border-[#e5e5e5]  -bottom-full left-1/2 -translate-x-1/2 opacity-0 py-5 px-7 group-hover:bottom-0  group-hover:opacity-100 transition-all duration-1000 ">

                    <ul className='flex justify-center items-center gap-2'>
                        <OverlayLi icon={<FaHeart />}></OverlayLi>
                        <div className=" h-8 w-[1px] bg-[#e5e5e5]"></div>
                        <OverlayLi icon={<LuRefreshCcw />}></OverlayLi>
                        <div className=" h-8 w-[1px] bg-[#e5e5e5]"></div>
                        <OverlayLi icon={<FaEye />}></OverlayLi>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default ProductCard02;