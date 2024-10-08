import { useEffect, useState } from "react";
import { FaHeart, FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars2 } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
import Li from "../layer/Li";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Container from "../layer/Container";
import MegaMenuLi from "../layer/MegaMenuLi";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useWishlist from "../../hooks/useWishlist";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteItem } from "../../redux/state/cartSlice";
import PropTypes from 'prop-types';
import { useGetproductsQuery } from "../../services/productApi";


const Searchbar = ({ searchFilter, handleInput, searchInput, handleLink }) => {
    const { data, error, isLoading, } = useGetproductsQuery()
    const { user, logOut } = useAuth()
    const navigate = useNavigate();
    const carts = useSelector((state) => state.cart.cartItem)
    const [wishlist, , refash, wishlistTotal] = useWishlist()
    const [cetegorey, setCategorey] = useState([])
    const [catOpen, setCatOpen] = useState(false)
    const [proOpen, setProOpen] = useState(false);
    const [wishlistOpen, setWishListOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    let [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();
    // const { mutateAsync: handelwishlist } = useMutation({
    //     mutationFn: async id => {
    //         const { data } = await axiosCommon.delete(`/wishlist/${id}`)
    //         return data
    //     },
    //     onSuccess: data => {
    //         refetch()
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "wishlist items has been delete",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     },
    // })


    // const { mutateAsync } = useMutation({
    //     mutationFn: async id => {
    //         const { data } = await axiosCommon.delete(`/cart/${id}`)
    //         return data
    //     },
    //     onSuccess: data => {
    //         refetch()
    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "cart items has been delete",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     },
    // })


    // const handlewishlistDelete = async id => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             // await mutateAsync(id)
    //             await handelwishlist(id)
    //             refash()

    //         }
    //     });
    // }
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                dispatch(deleteItem(id));
                // await mutateAsync(id)


            }
        });
    }



    const handkeMinusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity - 1, }))
    }
    const handkePlusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity + 1, }))
    }
    useEffect(() => {
        const cartTotal = carts.reduce((acc, items) => acc + parseInt(items.price * items.qun), 0)
        setTotalPrice(cartTotal)
        setCategorey([... new Set(data?.map(item => item.category))])



    }, [carts, data])

    const handleCategoryFilter = (category) => {
        navigate(`/shops?category=${encodeURIComponent(category)}`);
      };


    return (

        <div className=" lg:py-6 py-2   bg-[#F5F5F3]  w-full">

            <Link to='/cart' className="z-50 fixed top-1/2 -translate-y-1/2 right-10"><FaCartShopping className="text-5xl text-green-300 hover:text-red-500 transition-all duration-500 " /> {carts.length > 0 ? <span className="text-red-500 text-sm bg-white p-2 border  rounded-full text-center absolute -top-1/2  ">{carts.length}</span> : ''}</Link>
            <Container className={`flex flex-row px-6 justify-between items-center  relative`}>
                <div onClick={() => setCatOpen(!catOpen)} className="left flex items-center gap-2  text-sm font-DM  ">
                    <HiBars2 />
                    <p className="ml-2 hidden md:block">Shop by Category</p>

                </div>
                <ul className={`${catOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} categoryUl w-[163px] lg:w-[263px] bg-[#2D2D2D] p-6   absolute left-6 top-full translate-y-6 z-50`}>
                    {cetegorey.map((item, key) =>
                    <li onClick={()=>handleCategoryFilter(item)} key={key} className="text-[#ffffffc7] hover:text-white py-4  hover:pl-8 block text-sm font-bold transition-all duration-300 ">{item}</li>)}



                    {/*   <Li to='/' megaMenu='h-full' content='Accesories' className='text-[#ffffffc7] hover:text-white py-4 font-normal hover:pl-8 block' >
                        <ul>
                            <h3>camera</h3>
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />

                        </ul>
                        <ul>
                            <h3>camera</h3>
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />

                        </ul>
                        <ul>
                            <h3>camera</h3>
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />

                        </ul>
                    </Li>

                    <Li to='/' megaMenu='h-full' content='Furniture' className='text-[#ffffffc7] hover:text-white py-4 font-normal hover:px-8 block' >

                        <ul>
                            <h3>camera</h3>
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />

                        </ul>
                        <ul>
                            <h3>camera</h3>
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />
                            <MegaMenuLi content="Phone 01" />

                        </ul>
                    </Li>

                    <Li to='/' megaMenu='hidden' content='Electronics' className='text-[#ffffffc7] hover:text-white py-4 font-normal hover:px-8 block' ></Li>

                    <Li to='/' megaMenu='hidden' content='Clothes' className='text-[#ffffffc7] hover:text-white py-4 font-normal hover:pl-8 block' ></Li> */}

                </ul>

                <div className='relative w-full lg:w-[600px] ml-5 hover:shadow-mainudin'>
                    <input type="text" value={searchInput} onChange={handleInput} placeholder='Search Products' className='lg:w-[601px] w-full lg:py-4 py-1 px-5 bg-white outline-none' />
                    <FaSearch className='absolute right-1 lg:right-5 top-1/2 translate-y-[-50%]' />
                    {searchFilter.length > 0 &&
                        <div className='absolute w-full max-h-[350px] top-full z-50  overflow-y-scroll' >
                            {searchFilter.map((item, key) =>
                                <div onClick={() => handleLink(item._id)} key={key} className=" cursor-pointer flex justify-between  gap-2 bg-[#F5F5F3] p-5">
                                    <img src={item.image} alt="" className="bg-[#979797] w-20 h-20" />
                                    <div><h2>{item.title}</h2>
                                    </div>


                                </div>
                            )}
                        </div>}




                </div>
                {/* <div className="relative w-full lg:w-[600px] ml-5 hover:shadow-mainudin">
                    <label onSubmit={handleSearch} htmlFor="search" className="absolute right-5 top-1/2 -translate-y-1/2"><FaSearch /></label>
                    <input  type="search" name="search" id="search" placeholder="Search Products" className="py-4  w-full rounded-lg outline-none" />
                </div> */}


                <div className="md:flex gap-6 relative p-4 hidden ">
                    {/* user profile info */}
                    <button onClick={() => setProOpen(!proOpen)}><RiContactsFill className="text-xl hover:text-green-500 transition-all duration-500" /></button>
                    {proOpen && (
                        <div className=" absolute z-50 top-full right-12 translate-y-6">
                            <div className="w-[263px] block  bg-[#ffffff] ">
                                <div className="button flex flex-col  w-full">
                                    {user ? (
                                        <>
                                            <Link onClick={() => setProOpen(!proOpen)} to='/account' className="py-4  px-3 lg:px-10 bg-[#262626]  w-full text-white ">My Account</Link>
                                            <button onClick={logOut} className="py-4 px-3 lg:px-10 text-[#262626]  w-full mt-0 bg-[#F0F0F0] border ">logOut</button>
                                        </>
                                    )
                                        :
                                        (
                                            <Link onClick={() => setProOpen(!proOpen)} to='/login' className="py-4 px-3 lg:px-10 text-[#262626]  w-full mt-0 bg-[#F0F0F0] border">login</Link>)}



                                </div>
                            </div>
                        </div>
                    )}
                    <button onClick={() => setWishListOpen(!wishlistOpen)} className=""><FaHeart className="text-xl hover:text-green-500 transition-all duration-500" /> <span className="text-red-500 bg-white w-9 h-9 border p-2 rounded-full absolute -top-3 ">{wishlist.length}</span></button>
                    {wishlistOpen && (
                        <div className="w-[360px] absolute z-50 top-full right-3 bg-slate-50 border translate-y-6">

                            {wishlist.slice(0, 4).map(item =>
                                <div key={item._id} className="flex justify-between  gap-2 bg-[#F5F5F3] p-5">
                                    <img src={item.image} alt="" className="bg-[#979797] w-20 h-20" />
                                    <div>
                                        {/* <h2>Black Smart Watch</h2> */}
                                        <h2>{item.title}</h2>
                                        <p>X * {item.itemQuantity}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <button onClick={() => handlewishlistDelete(item._id)}><IoMdClose /></button>
                                </div>)}


                            <div className="p-5">
                                <p >Subtotal: <span className="text-[#262626] font-bold">${wishlistTotal}</span></p>
                                <div className="flex  lg:gap-x-5 gap gap-x-1 mt-3">
                                    <Link to='/cart' className="w-full block lg:py-4 py-2 lg:px-8 px-3 text-[#262626] border border-[#262626]">View Cart </Link>
                                    <button className="w-full block lg:py-4 py-2 lg:px-10 px-3 bg-[#262626] text-white">Checkout</button>
                                </div>
                            </div>

                        </div>
                    )}
                    {/* product mini cart section */}
                    <button onClick={() => setCartOpen(!cartOpen)} className=""><FaCartShopping className="text-xl hover:text-red-500 transition-all duration-500 " /> {carts.length > 0 ? <span className="text-red-500 bg-white w-9 h-9 border p-2 rounded-full text-center absolute -top-3 ">{carts.length}</span> : ''}</button>

                    {cartOpen && (
                        <div className="block w-[360px]  absolute z-50 top-full right-3 bg-slate-50 border translate-y-6">
                            <div className="w-full h-[320px] overflow-y-scroll">
                                {carts.length ? <>
                                    {carts.slice(0, 4).map(item =>
                                        <div key={item._id} className="flex   gap-2 bg-[#F5F5F3] py-2 px-5">
                                            <img src={item.image} alt="" className="bg-[#979797] w-20 h-20" />

                                            <div className="my-2">
                                                {/* <h2>Black Smart Watch</h2> */}
                                                <h2>{item.title}</h2>
                                                <div className="flex justify-between items-center">
                                                    <div className="w-[100px]   border border-[#353535] text-[#767676] flex justify-between items-center p-1">
                                                        <span
                                                            className="cursor-pointer inline-block   text-sm font-normal "
                                                            onClick={() => handkeMinusQuantity(item, item.qun)}
                                                        >
                                                            <FaMinus />
                                                        </span>
                                                        <span className="inline-block px-2 text-sm font-normal">{item.qun}</span>
                                                        <span
                                                            className="cursor-pointer inline-block  text-sm "
                                                            onClick={() => handkePlusQuantity(item, item.qun)}
                                                        >
                                                            <FaPlus />
                                                        </span>
                                                    </div>
                                                    <button onClick={() => handleDelete(item._id)}><IoMdClose /></button>
                                                </div>

                                                <p>${item.price * item.qun}</p>
                                            </div>

                                        </div>)}
                                </> :
                                    <h2 className='my-6 text-center'>Cart is Empty</h2>}
                            </div>




                            <div className="p-5">
                                <p >Subtotal: <span className="text-[#262626] font-bold">${totalPrice}</span></p>
                                <div className="flex  lg:gap-x-5 gap gap-x-1 mt-3">
                                    <Link to='/cart' onClick={() => setCartOpen(!cartOpen)} className="w-full block lg:py-4 py-2 lg:px-8 px-3 text-[#262626] border border-[#262626]">View Cart </Link>
                                    <Link to='/checkout' onClick={() => setCartOpen(!cartOpen)} className="w-full block lg:py-4 py-2 lg:px-10 px-3 bg-[#262626] text-white">Checkout</Link>
                                </div>
                            </div>

                        </div>
                    )}



                </div>



            </Container>





        </div>
    );
};
Searchbar.propTypes = {
    searchFilter: PropTypes.array,
    handleInput: PropTypes.func,
    handleLink: PropTypes.func,
    searchInput: PropTypes.string, // updated to node

}
export default Searchbar;