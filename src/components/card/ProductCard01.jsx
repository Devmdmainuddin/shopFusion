import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "../layer/Button";

// const OverlayLi =({icon})=>{
//     return (
//         <li >
//       <Link className=' w-[40px] h-[40px] rounded-full border bg-orange-300 text-[#767676] hover:text-primary hover:font-bold transition-all duration-300 cursor-pointer'>
//     {icon}
//       </Link> 
//     </li>
//     )

// }
const ProductCard01 = ({ src, hoverSrc, alt, offer, title, className, price, brand }) => {
    return (
        <div className={`w-[350px] group mx-auto ${className} overflow-hidden hover:shadow-shadow `}>
            <div className="image w-full h-[370px] relative">
                <button className={`absolute top-5 left-5 bg-[#fed700] z-50 hover:text-[#fff] hover:bg-[#f3283d] text-sm py-2 transition-all duration-700 ${offer ? 'px-8' : 'px-0'}`}>{offer}</button>
                <img className='w-full h-full object-cover opacity-100 group-hover:opacity-0  transition-all  duration-700' src={src} alt={alt} />
                <img className=' absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible  w-full h-full object-cover  transition-all duration-700' src={hoverSrc} alt={alt} />
                <div className="overlay  absolute  -top-full right-0 opacity-0 py-6 px-7 group-hover:top-0  group-hover:opacity-100 transition-all duration-700 ">
                
                    <ul className='flex gap-3 flex-col'>
                        <Link className='w-[40px] h-[40px] rounded-full border bg-[#fed700] hover:text-[#fff] hover:bg-[#f3283d] text-center leading-[40px] flex justify-center items-center transition-all duration-300 cursor-pointer' ><FaHeart /></Link>
                        <Link className='w-[40px] h-[40px] rounded-full border bg-[#fed700] hover:text-[#fff] hover:bg-[#f3283d] text-center leading-[40px] flex justify-center items-center transition-all duration-300 cursor-pointer'><LuRefreshCcw /></Link>
                        <Link className='w-[40px] h-[40px] rounded-full border bg-[#fed700] hover:text-[#fff] hover:bg-[#f3283d] text-center leading-[40px] flex justify-center items-center transition-all duration-300 cursor-pointer'> <FaEye /></Link>
                    </ul>
                </div>
            </div>
            <div className="text py-6 relative">
                <Link to='/details' className="">
                    <h3 className=" font-normal text-center text-[#444] text-lg">{title}</h3>
                    {/* <span className="text-base font-DM text-[#767676]"></span> */}
                </Link>
                <p className="price text-center font-DM text-[#f3283d] my-3">{price}</p>
                <Button icon={<FaShoppingCart />} text='add to cart'></Button>
            </div>

        </div>
    );
};

export default ProductCard01;