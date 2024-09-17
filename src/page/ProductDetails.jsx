// import { IoIosArrowForward } from "react-icons/io";
import Container from "../components/layer/Container";
import { Link, useLoaderData } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
// import { ImStarHalf } from "react-icons/im";
// import { useEffect, useState } from "react";
import Heading from "../components/layer/Heading";
import useProduct from "../hooks/useProduct";
import ProductCard from "../components/card/ProductCard";
// import useComment from "../hooks/useComment";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { useMutation } from "@tanstack/react-query";
// import { imageUpload } from "../utils";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
// import useAxiosCommon from "../hooks/useAxiosCommon";
// import useWishlist from "../hooks/useWishlist";
// import useCartItems from "../hooks/useCartItems";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Bredcumb from "../components/layer/Bredcumb";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, } from '../redux/state/cartSlice';
import { useEffect, useState } from "react";
import { useAddReviewMutation} from "../services/reviewApi";
import { useGetproductsQuery } from "../services/productApi";
import LoadingSpinner from "../components/share/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../hooks/useAxiosCommon";
// import { useGetproductsQuery } from "../services/productApi";


const ProductDetails = () => {
    const { user } = useAuth() || {}
    const [addReviews] = useAddReviewMutation()
    const { data } = useGetproductsQuery()
    // const { data: review } = useGetReviewsQuery()
    const dispatch = useDispatch();
    const products = useLoaderData();
    const axiosCommon = useAxiosCommon()
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    let [quantity, setQuantity] = useState(1);

    const relative = data?.filter(item => item.category === products.category)
    const discountp = (parseInt(products?.price) * parseInt(products?.discount)) / 100
    const discountPrice = parseInt(products?.price) - discountp

    const { data: reviewProducts = [], isPending: loading, refetch } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/reviews/${products._id}`)
            return data
        },
    })

    // useEffect(() => {
    //     dispatch(fetchPosts())
    // }, [dispatch])



    // add comment/reviews
    // const { mutateAsync: addReviews } = useMutation({
    //     mutationFn: async commentData => {
    //         const { data } = await axiosSecure.post(`/comment`, commentData)
    //         return data
    //     },
    //     onSuccess: () => {
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Your comment has been added",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });

    //         // console.log("data add successfully")
    //     }
    // })
    // add to cart
    // const { mutateAsync: submitData } = useMutation({
    //     mutationFn: async updateData => {
    //         const { data } = await axiosCommon.put(`/cart`, updateData)
    //         return data
    //     },
    //     onSuccess: () => {

    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Your product has been add to cart",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // })
    // add to Wishlist
    // const { mutateAsync: submitWishlist } = useMutation({
    //     mutationFn: async updateData => {
    //         const { data } = await axiosCommon.put(`/wishlist`, updateData)
    //         return data
    //     },
    //     onSuccess: () => {

    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Your product has been add to cart",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // })


    // add comment/reviews
    const handelReview = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const review = form.review.value;
        const rating = form.rating.value;
        const productId = products._id;
        const productTitle = products.title;
        const userName = user?.displayName;
        const userEmail = user?.email;
        const userImage = user?.photoURL;
        const currentTime = (new Date()).toDateString();

        const info = { name, email, review, rating, productId, productTitle, userName, userEmail, userImage, currentTime };
        console.log(info);
        try {
            await addReviews(info)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " create product  ",
                showConfirmButton: false,
                timer: 1500
            });
            form.reset();
            refetch()
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

    // add to cart
    const handlecard = (item) => {
        try {
            dispatch(addToCart({ ...item, qun: parseInt(quantity) }))
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
            });
        }


        // const cartItem = {
        //     produdctId: item._id,
        //     title: item.title,
        //     image: item.image,
        //     price: item.price,
        //     discount: item.discount,
        //     email: user.email,
        //     itemQuantity: Quantity,
        // }

        // try {
        //     await submitData(cartItem)
        //     refash()
        // }
        // catch (err) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: " product  cart not add  ",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }
    }
    return (
        <div >
            <Container>
                <div>
                    <Bredcumb></Bredcumb>

                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className=" sidebar w-full  md:w-[782px]">
                            <div>
                                <h2 className="text-[39px] font-bold text-[#262626]">{products.title}</h2>
                                <div className="flex gap-6 mt-4">
                                    <Rating
                                        style={{ maxWidth: 120 }}
                                        value={products.rating}
                                        readOnly
                                    />

                                </div>
                                <div className="divider"></div>
                                <p className="flex items-center gap-[22px] mt-6"> {products.discount && <span className="text-[#767676] line-through ">${products.price}</span>}<span className="text-xl font-bold text-[#262626]">${products.discount ? discountPrice.toFixed(2) :parseFloat(products.price).toFixed(2)}</span></p>
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
                                        <span className="inline-block px-2 text-lg font-normal">{quantity}</span>
                                        <span
                                            className="cursor-pointer inline-block  text-lg "
                                            onClick={() => setQuantity(quantity + 1)}
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
                                    <button onClick={() => handlecard(products)} className="py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out">Add to Cart</button>
                                </div>
                                <div className="divider"></div>
                                {/* collapse */}
                                <div className="mt-[30px]">
                                    <div onClick={() => setOpen(!open)} className='flex justify-between relative mb-[52px]'>
                                        <h3 className='text-[#262626] text-[16px] font-bold'>FEATURES  & DETAILS</h3>
                                        <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                                    </div>
                                    {open &&
                                        <div className="collapse-content text-[#767676]">
                                            <h2>descaption</h2>
                                            {products?.descaption} {/* <p>tabindex={0} attribute is necessary to make the div focusable</p> */}
                                        </div>
                                    }
                                </div>
                                <div className="divider"></div>
                                <div className="mt-[30px]">
                                    <div onClick={() => setOpen1(!open1)} className='flex justify-between relative mb-[52px]'>
                                        <h3 className='text-[#262626] text-[16px] font-bold'>FEATURES  & DETAILS</h3>
                                        <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open1 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open1 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                                    </div>
                                    {open1 &&
                                        <div className="collapse-content text-[#767676]">
                                            {products.shippingInformation} {/* <p>tabindex={0} attribute is necessary to make the div focusable</p> */}
                                        </div>
                                    }
                                </div>

                                {/* <div tabIndex={0} className="collapse collapse-plus ">
                                    <div className="collapse-title text-[#262626] text-[16px] font-bold">FEATURES  & DETAILS</div>
                                    <div className="collapse-content text-[#767676]">
                                        {products.descaption} 
                                    </div>
                                </div> */}
                                {/* <div tabIndex={0} className="collapse collapse-plus ">
                                    <div className="collapse-title text-[#262626] text-[16px] font-bold">SHIPPING & RETURNS</div>
                                    <div className="collapse-content text-[#767676]">
                                        <p>tabindex={0} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                        </p>
                                    </div>
                                </div> */}
                                {/* tabs */}
                                <div>
                                    <Tabs>
                                        <TabList className=" flex gap-16 items-center text-xl py-6 ">
                                            <Tab className='text-[#767676]'>Description</Tab>
                                            <Tab className='text-[#262626]'>Reviews (<span>{reviewProducts?.length}</span>)</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <h2>{products.description}</h2>
                                        </TabPanel>
                                        <TabPanel>
                                            {reviewProducts?.map((items, key) => <div key={key}>

                                                <div className="  border-t  my-10" >
                                                    <div className="flex justify-between py-6">
                                                        <div className="flex gap-2 items-center"><img src={items.userImage} alt="" className="w-12 h-12 rounded-full " /> <h2>{items.userName}</h2></div>
                                                       
                                                        <span><Rating
                                                            style={{ maxWidth: 120 }}
                                                            value={items.rating}
                                                            readOnly
                                                        />
                                                        </span>
                                                    </div>
                                                    <p> {items.review}</p>

                                                    <h3 className="mt-3 text-sm text-[#767676]"><span>{items.rating}</span> review for Product</h3>
                                                </div>
                                               
                                            </div>)}

                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>

                        <div className="main ">
                            <div className="image w-full md:w-[370px] h-[320px]">
                                <img src={products?.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="review">
                                <div className="py-8 px-4">
                                    <h2 className=" text-2xl text-[#262626] my-7">Add a Review</h2>
                                    <form onSubmit={handelReview} className='mt-12 max-w-[768px] mx-auto'>
                                        <div className="flex  flex-col gap-8 ">
                                            <div>
                                                <label htmlFor='name' className='block mb-2 text-[#262626]  text-sm'>
                                                    Name
                                                </label>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    id='name'
                                                    placeholder='Your name here'
                                                    className='w-full px-3 py-2 border-b  border-gray-300 outline-none  bg-white text-gray-900'
                                                    data-temp-mail-org='0'
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='email' className='block mb-2 text-[#262626]  text-sm'>
                                                    Email
                                                </label>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    placeholder='Your email here'
                                                    className='w-full px-3 py-2 border-b  border-gray-300 outline-none  bg-white text-gray-900'
                                                    data-temp-mail-org='0'
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='review' className='block mb-2 text-[#262626]  text-sm'>
                                                    Review
                                                </label>
                                                <input
                                                    type='text'
                                                    name='review'
                                                    id='review'
                                                    placeholder='Your review here'
                                                    className='w-full px-3 py-2 border-b  border-gray-300 outline-none  bg-white text-gray-900'
                                                    data-temp-mail-org='0'
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor='rating' className='block mb-2 text-[#262626]  text-sm'>
                                                    Rating
                                                </label>
                                                <input
                                                    type='number'
                                                    name='rating'
                                                    id='rating'
                                                    min={1}
                                                    max={5}
                                                    placeholder='Your rating in 1 to 5 number'
                                                    className='w-full px-3 py-2 border-b  border-gray-300 outline-none  bg-white text-gray-900'
                                                    data-temp-mail-org='0'
                                                />
                                            </div>


                                        </div>
                                        <input
                                            className="inline-block mt-6 py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out"
                                            type="submit"
                                            value="Add review"
                                        />

                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <Heading className='capitalize' text='relative product'></Heading>
                    <div className='flex justify-between md:my-12 my-5 flex-wrap gap-y-5'>
                        {
                            relative?.slice(0, 4).map((item, key) => <ProductCard key={key} item={item}   ></ProductCard>)
                        }
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProductDetails;