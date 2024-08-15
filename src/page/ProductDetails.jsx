import { IoIosArrowForward } from "react-icons/io";
import Container from "../components/layer/Container";
import { Link, useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { ImStarHalf } from "react-icons/im";
import { useEffect, useState } from "react";
import Heading from "../components/layer/Heading";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/card/ProductCard";
import useComment from "../hooks/useComment";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { imageUpload } from "../utils";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosCommon from "../hooks/useAxiosCommon";
import useWishlist from "../hooks/useWishlist";
// import useCartItems from "../hooks/useCartItems";


const ProductDetails = () => {
    const { user } = useAuth() || {}
    const products = useLoaderData();
    const [product, loading] = useProduct();
    const [comment, , refetch] = useComment();
    const [commentItem, setCommentItem] = useState([]);
    //  const [cartItems, , ] = useCartItems()
    const [, , refash] = useWishlist()
    const axiosCommon = useAxiosCommon();
    const axiosSecure = useAxiosSecure()
    let [Quantity, setQuantity] = useState(1);
    const relative = product.filter(item => item.brand === products.brand)
    const discountp = (parseInt(products.price) * parseInt(products.discount)) / 100
    const discountPrice = parseInt(products.price) - discountp
    // console.log(commentItem.length);
    useEffect(() => {
        const filteritems = comment.filter(p => p.productId === products._id)
        setCommentItem(filteritems)
      
    }, [comment, products,])

    const { mutateAsync } = useMutation({
        mutationFn: async commentData => {
            const { data } = await axiosSecure.post(`/comment`, commentData)
            return data
        },
        onSuccess: () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your comment has been added",
                showConfirmButton: false,
                timer: 1500
            });

            // console.log("data add successfully")
        }
    })


    const handelComment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const rating = form.rating.value;
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const productId = products._id;
        const productTitle = products.title;
        const userName = user.displayName;
        const userEmail = user.email;
        const userImage = user.photoURL;
        const currentTime = (new Date()).toDateString();

        const info = { comment, rating, image, productId, productTitle, userName, userEmail, userImage, currentTime };
        // console.log(info);
        try {
            // console.log(reviewData);
            await mutateAsync(info)
            refetch()
            form.reset()
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " your comment not add  ",
                showConfirmButton: false,
                timer: 1500
            });
        }


    }


    // add to whish list
    // const handlewishlist = item => {

    //     const cartItem = {
    //         produdctId: item._id,
    //         title: item.title,
    //         image: item.image,
    //         price: item.price,
    //         email: user.email,
    //     }
    //     console.log(cartItem)

    //     axiosCommon.post(`/wishlist`, cartItem)

    //         .then(res => {
    //             if (res.data?.insertedId) {

    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "Your items has been add to wishlist",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //                 refash()
    //             }
    //         })
    // }

    // add to cart
    const handlecard = item => {

        const cartItem = {
            produdctId: item._id,
            title: item.title,
            image: item.image,
            price: item.price,
            email: user.email,
            // itemQuantity:Quantity,
        }
     
        
 
        axiosCommon.post(`/cart`, cartItem)
        .then(res => {
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
        <div >
            <Container>
                <div className='mt-[93px]'>
                    <h2 className='text-[#262626] text-6xl font-bold'>Product Details</h2>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-[12px] font-normal text-[#767676]'><Link>Home</Link></li>
                        <li><IoIosArrowForward className='text-[12px]' /></li>
                        <li className='text-[12px] font-normal text-[#767676]'> <Link> Products</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className=" sidebar w-full md:w-[782px]">
                        <div>
                            <h2 className="text-[39px] font-bold text-[#262626]">{products.title}</h2>
                            <div className="flex gap-6 mt-4">
                                <div className="star flex text-[#ffc400fa]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <ImStarHalf />
                                </div>
                                <p className="text-[#767676]"> <span>{commentItem.length}</span> Review</p>
                            </div>
                            <div className="divider"></div>
                            <p className="flex items-center gap-[22px] mt-6"> {products.discount && <span className="text-[#767676] line-through ">${products.price}</span>}<span className="text-xl font-bold text-[#262626]">${products.discount ? discountPrice : products.price}</span></p>
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

                                <button onClick={()=>handlewishlist(products)} className="py-4 px-10 border border-[#262626] text-[#262626] hover:border-[#262626] hover:text-white hover:bg-[#262626] transition-all duration-500 ease-in-out">Add to Wish List</button>
                                <button onClick={()=>handlecard(products)} className="py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out">Add to Cart</button>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus ">
                                <div className="collapse-title text-[#262626] text-[16px] font-bold">FEATURES  & DETAILS</div>
                                <div className="collapse-content text-[#767676]">
                                    {products.descaption} {/* <p>tabindex={0} attribute is necessary to make the div focusable</p> */}
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus ">
                                <div className="collapse-title text-[#262626] text-[16px] font-bold">SHIPPING & RETURNS</div>
                                <div className="collapse-content text-[#767676]">
                                    <p>tabindex={0} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                    </p>
                                </div>
                            </div>
                            {
                                commentItem.slice(0, 2).map(item => <div key={item._id} className="p-4 border">
                                    <div className="flex justify-between items-center gap-6">
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={item.rating}
                                            readOnly
                                        />
                                        <h3>{item.currentTime}</h3>
                                    </div>
                                    <div className="flex items-center gap-6 my-2">
                                        <img className="w-8 h-8 rounded-full" src={item.userImage} alt="" />
                                        <h3>{item.userName}</h3>
                                    </div>
                                    <h2 className="my-2">{item.comment}</h2>
                                    <img className={`${item.image ? 'w-24 h-24' : 'w-0 h-0'} h-16 object-cover`} src={item.image} alt="" /> </div>
                                )
                            }


                        </div>
                    </div>

                    <div className="main">
                        <div className="image w-full md:w-[370px]">
                            <img src={products.image} alt="" />
                        </div>
                        <div className="comment">
                            <div className="py-8 px-4">
                                <h2 className="text-center text-2xl text-slate-600 my-7">Reviews</h2>
                                <form onSubmit={handelComment} className='mt-12 max-w-[768px] mx-auto'>
                                    <div className="flex gap-8 ">
                                        <div className="flex-1 items-start">
                                            <label className="block mb-2 dark:text-white" htmlFor="comment">your Reviews</label>
                                            <input
                                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                                type="text"
                                                placeholder="type your comment "
                                                id="title"
                                                name="comment" />
                                            <label htmlFor='image' className='block mb-2 text-sm'>
                                                Select Image:
                                            </label>
                                            <input

                                                type='file'
                                                id='image'
                                                name='image'
                                                className="w-full block py-2 px-4   outline-none border rounded-md"
                                                accept='image/*'
                                            />

                                            <label className="block mt-4 mb-2 dark:text-white" htmlFor="rating">
                                                rating this product
                                            </label>
                                            <input
                                                className="w-full p-2 border rounded-md focus:border-teal-500 focus:outline-none"
                                                maxLength={5}
                                                max={5}
                                                min={1}
                                                type="number"
                                                placeholder="type your ration in 1 into 5 number"
                                                id="rating"
                                                name="rating"
                                            />

                                        </div>


                                    </div>

                                    <input
                                        className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500"
                                        type="submit"
                                        value="Add comment"
                                    />

                                </form>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="">
                    <Heading text='relative product'></Heading>
                    <div className='flex justify-between md:my-12 my-5 flex-wrap gap-y-5'>
                        {
                            relative.map(item => <ProductCard key={item._id} item={item}   ></ProductCard>)
                        }
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProductDetails;