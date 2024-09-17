
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { LuRefreshCcw } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { addToCart } from '../../redux/state/cartSlice';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

const OverlayLi = ({ text, icon, onClick }) => {
    return (
        <li onClick={onClick} className='flex items-center justify-end  '>
            <Link className='flex justify-end  items-center lg:gap-x-4 gap-x-2  text-[#767676] hover:text-primary hover:font-bold transition-all duration-300 cursor-pointer'>
                {text}{icon}
            </Link>
        </li>
    )

}
const ProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const { image, _id, title, discount, price, brand } = item;
    const discountp = (parseFloat(price) * parseFloat(discount)) / 100;
    const discountPrice = parseFloat(price) - discountp;
    let [Quantity, setQuantity] = useState(1);
    // add to cart
    const handlecard = async item => {
        try {
            dispatch(addToCart({ ...item, qun: Quantity, }))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your items has been add to cart",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " product  cart not add  ",
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
    return (
        <>
            <div className={`w-full md:w-[370px] group mx-auto `}>
                <div className="image w-full h-[370px] relative">

                    {
                        discount &&
                        <button className={`absolute top-5 left-5 bg-primary text-white text-sm py-2 px-8`}> {
                            discount}%</button>
                    }
                    <img className='w-full h-full object-contain' src={image} alt='' />
                    <div className="overlay w-full absolute  bottom-0 left-0 opacity-0 py-6 px-7 bg-white group-hover:opacity-100 transition-all duration-300">
                        <ul className='flex gap-3 flex-col'>
                            <OverlayLi text='Add to Wish List' icon={<FaHeart />}></OverlayLi>
                            <OverlayLi text='Compare' icon={<LuRefreshCcw />}></OverlayLi>
                            <OverlayLi onClick={() => handlecard(item)} text=' Add to Cart' icon={<FaShoppingCart />}></OverlayLi>
                        </ul>
                    </div>
                </div>
                <div className="text pt-6">
                    <Link to={`/product/${_id}`} className="flex justify-between items-baseline mb-3">
                        <h3 className="text-primary font-bold text-xl">{title}</h3>
                        <span className="text-base font-DM text-[#767676]">${discount ? discountPrice.toFixed(2) : parseFloat(price).toFixed(2)}</span>
                    </Link>
                    <p className="brand text-base font-DM text-[#767676]">{brand}</p>
                </div>

            </div>
        </>

    );
};
ProductCard.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node,
    item: PropTypes.object,
}
export default ProductCard;