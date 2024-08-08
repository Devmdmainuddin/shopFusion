
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import p1 from '/card-1.jpg'
import { LuRefreshCcw } from 'react-icons/lu';
import { Link } from 'react-router-dom';
const OverlayLi =({text,icon})=>{
    return (
        <li className='flex items-center justify-end  '>
      <Link className='flex justify-end  items-center lg:gap-x-4 gap-x-2  text-[#767676] hover:text-primary hover:font-bold transition-all duration-300 cursor-pointer'>
      {text}{icon}
      </Link> 
    </li>
    )

}
const ProductCard = ({ src, alt,  offer, title,className, price, brand }) => {
    return (
        <div className={`w-[350px] group mx-auto ${className}`}>
            <div className="image w-full h-[370px] relative">
            <button className={`absolute top-5 left-5 bg-primary text-white text-sm py-2  ${offer ? 'px-8' : 'px-0'}`}>{offer}</button>
                <img className='w-full h-full object-cover' src={src} alt={alt} />
                <div className="overlay w-full absolute  bottom-0 left-0 opacity-0 py-6 px-7 bg-white group-hover:opacity-100 transition-all duration-300">
                    <ul className='flex gap-3 flex-col'>
                        <OverlayLi text='Add to Wish List' icon={<FaHeart />}></OverlayLi>
                        <OverlayLi text='Compare' icon={<LuRefreshCcw />}></OverlayLi>
                        <OverlayLi text=' Add to Cart' icon={<FaShoppingCart />}></OverlayLi>  
                    </ul>
                </div>
            </div>
            <div className="text pt-6">
                <Link to='/details' className="flex justify-between items-baseline mb-3">
                    <h3 className="text-primary font-bold text-xl">{title}</h3>
                    <span className="text-base font-DM text-[#767676]">${price}</span>
                </Link>
                <p className="brand text-base font-DM text-[#767676]">{brand}</p>
            </div>

        </div>
    );
};

export default ProductCard;