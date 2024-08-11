import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from "react-router-dom";
import Button from "../layer/Button";
// import Swal from "sweetalert2";
 import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useCartItems from "../../hooks/useCartItems";
// import { useMutation } from "@tanstack/react-query";

const OverlayLi = ({ src, icon }) => {
    return (
        <li >
            <Link to={src} className='w-[40px] h-[40px] rounded-full border bg-[#fed700] hover:text-[#fff] hover:bg-[#f3283d] text-center leading-[40px] flex justify-center items-center transition-all duration-300 cursor-pointer' >{icon}</Link>
        </li>
    )

}
const ProductCard01 = ({item}) => {

    const { user } = useAuth() || {}
    const [, ,refetch]=useCartItems()
const axiosCommon =useAxiosCommon();



    const handlecard = item => {
       
            const cartItem = {
                produdctId: item._id,
                title: item.title,
                image: item.image,
                price: item.price,
                email: user.email,
            }
            console.log(cartItem)
    
            axiosCommon.post(`/cart`, cartItem)
          
            .then(res=>{
                if (res.data?.insertedId) {
                    
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your items has been add to cart",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
        
        
           
 
        }
    return (
        <div className={`w-[350px] group mx-auto  overflow-hidden hover:shadow-shadow `}>
            <div className="image w-full h-[370px] relative">
                <button className={`absolute top-5 left-5 bg-[#fed700] z-50 hover:text-[#fff] hover:bg-[#f3283d] text-sm py-2 transition-all duration-700 ${item.discount ? 'px-8' : 'px-0'}`}>{item.discount}</button>
                <div className="image w-full h-full relative">
                    <img className='w-full h-full object-cover opacity-100 group-hover:opacity-0  transition-all  duration-700' src={item.image} alt='' />
                    {/* <img className=' absolute top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible  w-full h-full object-cover  transition-all duration-700' src='#' alt='' /> */}
                </div>

                <div className="overlay  absolute  -top-full right-0 opacity-0 py-6 px-7 group-hover:top-0  group-hover:opacity-100 transition-all duration-1000 ">

                    <ul className='flex gap-3 flex-col  '>
                        <OverlayLi icon={<FaHeart />}></OverlayLi>
                        <OverlayLi icon={<LuRefreshCcw />}></OverlayLi>
                        <OverlayLi icon={<FaEye />}></OverlayLi>
                    </ul>
                </div>
            </div>
            <div className="text py-6 relative">
                <Link to={`/product/${item._id}`} className="">
                    <h3 className=" font-normal text-center text-[#444] text-lg">{item.title}</h3>
                </Link>
                <p className="price text-center font-DM text-[#f3283d] my-3">${item.price}</p>
                <button onClick={() => handlecard(item)} className={` hover:bg-[#f3283d]  hover:text-white flex gap-2 items-center  text-center font-DM bg-[#fed700] py-2 px-6 rounded-3xl transition-all duration-1000 cursor-pointer mb-4 absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-1 opacity-0 group-hover:opacity-100`}> <FaShoppingCart />  add to cart </button>
                {/* <Button onClick={() => handlecard(item.title)} className='absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-1 opacity-0 group-hover:opacity-100' icon={<FaShoppingCart />} text='add to cart'></Button> */}
            </div>

        </div>
    );
};

export default ProductCard01;