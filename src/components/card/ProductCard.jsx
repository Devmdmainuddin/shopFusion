
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import p1 from '/card-1.jpg'
import { LuRefreshCcw } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useCartItems from '../../hooks/useCartItems';
import useWishlist from '../../hooks/useWishlist';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

// import { useState } from 'react';
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
    // {  src, alt,id, offer, title, price, brand }
    // console.log( item);
    // const [detailsModal,setDetailsModal]= useState(false)

    const { image, _id, discount, title,category, price, brand } = item;
    const [itemQuantity, setitemQuantity] = useState(1)
    const discountp = (parseInt(price) * parseInt(discount)) / 100
    const discountPrice = parseInt(price) - discountp

    const { user } = useAuth() || {}
    const [, , refetch] = useCartItems()
    const [, , refash] = useWishlist()
    const axiosCommon = useAxiosCommon();


    const { mutateAsync } = useMutation({
        mutationFn: async updateData => {
            const { data } = await axiosCommon.put(`/cart`, updateData)
            return data
        },
        onSuccess: () => {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your product has been add to cart",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })
    const { mutateAsync:submitWishlist } = useMutation({
        mutationFn: async updateData => {
            const { data } = await axiosCommon.put(`/wishlist`, updateData)
            return data
        },
        onSuccess: () => {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your product has been add to wishlist",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })


    const handlewishlist =async item => {

        const cartItem = {
            produdctId: item._id,
            title: item.title,
            image: item.image,
            email: user?.email,
            itemQuantity: itemQuantity,
            discount: item.discount,
            price: item.price
        }
        try {
            await submitWishlist(cartItem)
            refash()
        } catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " product  cart not add  ",
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    // add to cart
    const handlecard = async item => {

        const cartItem = {
            produdctId: item._id,
            title: item.title,
            image: item.image,
            email: user?.email,
            itemQuantity: itemQuantity,
            discount: item.discount,
            price: item.price
        }
        // console.log(cartItem)

        // const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        // if (existingItemIndex >= 0) {

        //     const updatedCart = [...cart];
        //     updatedCart[existingItemIndex].quantity += item.quantity; // or just `+= 1` if adding one
        //     setCart(updatedCart);
        //   } else {

        //     setCart([...cart, item]);
        //   }
        try {
            await mutateAsync(cartItem)
            refetch()
        } catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " product  cart not add  ",
                showConfirmButton: false,
                timer: 1500
            })
        }


        // axiosCommon.put(`/cart`, cartItem)

        //     .then(res => {
        //         if (res.data?.insertedId) {

        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Your items has been add to cart",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //             refetch()
        //         }
        //     })
    }
    return (
        <>
            <div className={`w-full md:w-[370px] group mx-auto`}>
                <div className="image w-full h-[370px] relative">
{/* ${discount ? 'px-8' : 'px-0'} */}
{discount && <button className={`absolute top-5 left-5 bg-primary text-white text-sm py-2 px-8`}> {discount}%</button>} 
                    
                    <img className='w-full h-full object-cover' src={image} alt='' />
                    <div className="overlay w-full absolute  bottom-0 left-0 opacity-0 py-6 px-7 bg-white group-hover:opacity-100 transition-all duration-300">
                        <ul className='flex gap-3 flex-col'>
                            <OverlayLi onClick={() => handlewishlist(item)} text='Add to Wish List' icon={<FaHeart />}></OverlayLi>
                            <OverlayLi text='Compare' icon={<LuRefreshCcw />}></OverlayLi>
                            <OverlayLi onClick={() => handlecard(item)} text=' Add to Cart' icon={<FaShoppingCart />}></OverlayLi>
                        </ul>
                    </div>
                </div>
                <div className="text pt-6">
                    <Link to={`/product/${_id}`} className="flex justify-between items-baseline mb-3">
                        <h3 className="text-primary font-bold text-xl">{title} {category}</h3>
                        {discount && <span className="text-base font-DM text-[#ee2121] line-through mr-1"> ${price}</span>}

                        <span className="text-base font-DM text-[#767676]">${discount ? discountPrice : price}</span>
                    </Link>
                    <p className="brand text-base font-DM text-[#767676]">{brand}</p>
                </div>

            </div>
            {/* <div className={`w-full md:w-[370px] group mx-auto`}>
                <div className="image w-full h-[370px] relative">
                  
                    <button className={`absolute top-5 left-5 bg-primary text-white text-sm py-2 ${item.discount? 'px-8' : 'px-0'}`}>{item.discount}</button>
                    <img className='w-full h-full object-cover' src={item.image} alt={item.title} />
                    <div className="overlay w-full absolute  bottom-0 left-0 opacity-0 py-6 px-7 bg-white group-hover:opacity-100 transition-all duration-300">
                        <ul className='flex gap-3 flex-col'>
                            <OverlayLi onClick={() => handlewishlist(item)} text='Add to Wish List' icon={<FaHeart />}></OverlayLi>
                            <OverlayLi text='Compare' icon={<LuRefreshCcw />}></OverlayLi>
                            <OverlayLi onClick={() => handlecard(item)} text=' Add to Cart' icon={<FaShoppingCart />}></OverlayLi>
                        </ul>
                    </div>
                </div>
                <div className="text pt-6">
                    <Link to={`/product/${item._id}`} className="flex justify-between items-baseline mb-3">
                        <h3 className="text-primary font-bold text-xl">{item.title}</h3>
                        <span className="text-base font-DM text-[#767676]">${item.price}</span>
                    </Link>
                    <p className="brand text-base font-DM text-[#767676]">{item.brand}</p>
                </div>

            </div> */}

        </>

    );
};

export default ProductCard;