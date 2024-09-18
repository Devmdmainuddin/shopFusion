
import Bredcumb from "../components/layer/Bredcumb";
import Container from "../components/layer/Container";
import Heading from "../components/layer/Heading";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../redux/posts/postsSlice";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Checkout = () => {
    const [users] = useUser()
    const { user } = useAuth()
    const navigate = useNavigate()
    const [cartIds,setCartIds]=useState([])

    const mainuser = users?.find(u => u.email === user?.email);

    const carts = useSelector((state) => state.cart.cartItem)
    useEffect(() => {
        if (carts && carts.length > 0) {
          const extractedCartIds = carts.map(cart => cart.id || cart._id);  
          setCartIds(extractedCartIds);  
        }
      }, [carts]);
      console.log(cartIds);

    const dispatch = useDispatch();
    let { totalprice, totalQuntity } = carts.reduce((acc, item) => {
        acc.totalprice += item.price * item.qun
        acc.totalQuntity += item.qun
        return acc
    }, { totalprice: 0, totalQuntity: 0 })
    // console.log('totalprice',totalprice,'totalQuntity',totalQuntity);
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const fname = form.fname.value
        const lname = form.lname.value
        const companyName = form.companyName.value
        const streetName = form.streetName.value
        const city = form.city.value
        const county = form.county.value
        const postnumber = form.postnumber.value
        const number = form.number.value
        // const email = form.email.value
        const info = {
            fname: fname,
            lname: lname,
            companyName: companyName,
            streetName: streetName,
            city: city,
            county: county,
            postnumber: postnumber,
            number: number,
            email: user?.email,
            productsIds:cartIds,
            productQuntity: totalQuntity,
            productPrice: totalprice + 100,
        }

        try {
            dispatch(checkout(info))
                .unwrap()
                .then((res) => navigate(`/payment`))
                .catch((err) => console.log("Checkout failed:", err));
                

        } catch (err) {
            console.log(err);
        }


    }
    return (
        <div>
            <Container>
                <Bredcumb></Bredcumb>
                <div className="w-[1057px]">
                    <Heading text='Billing Details'></Heading>
                    <form onSubmit={handleSubmit} action="" className=" py-[140px]">
                        <div className="  flex justify-between gap-10">
                            <div className="w-full flex flex-col ">
                                <label htmlFor='fname' className='block mb-2 font-bold text-primary'>
                                    First Name *
                                </label>
                                <input
                                    type='text'
                                    name='fname'
                                    id='fname'
                                    required
                                    placeholder='First Name'
                                    className='w-full py-2 border-b  outline-0'

                                />
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor='lname' className='block mb-2 font-bold text-primary'>
                                    Last Name *
                                </label>
                                <input
                                    type='text'
                                    name='lname'
                                    id='lname'
                                    required
                                    placeholder='Last Name'
                                    className='w-full py-2 border-b  outline-0'

                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='companyName' className='block mb-2 font-bold text-primary'>
                                Companye Name (optional)
                            </label>
                            <input
                                type='text'
                                name='companyName'
                                id='companyName'

                                placeholder='Company Name'
                                className='w-full py-2 border-b  outline-0'

                            />
                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='streetName' className='block mb-2 font-bold text-primary'>
                                Street Address *
                            </label>
                            <input
                                type='text'
                                name='streetName'
                                id='streetName'
                                required
                                defaultValue={mainuser?.address01}
                                placeholder='House number and street name'
                                className='w-full py-2 border-b  outline-0'

                            />
                            <input
                                type='text'
                                name='apartment'
                                id='apartment'
                                required
                                defaultValue={mainuser?.address02}
                                placeholder='Apartment, suite, unit etc. (optional)'
                                className='w-full py-2 border-b  outline-0 mt-4'

                            />

                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='city' className='block mb-2 font-bold text-primary'>
                                Town/City *
                            </label>
                            <input
                                type='text'
                                name='city'
                                id='city'
                                required
                                defaultValue={mainuser?.city}
                                placeholder='Town/City'
                                className='w-full py-2 border-b  outline-0'

                            />
                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='county' className='block mb-2 font-bold text-primary'>
                                County (optional)
                            </label>
                            <input
                                type='text'
                                name='county'
                                id='county'

                                defaultValue={mainuser?.county}
                                placeholder='County'
                                className='w-full py-2 border-b  outline-0'

                            />
                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='postnumber' className='block mb-2 font-bold text-primary'>
                                Post Code *
                            </label>
                            <input
                                type='number'
                                name='postnumber'
                                id='postnumber'
                                required
                                defaultValue={mainuser?.postCode}
                                placeholder='Post Code'
                                className='w-full py-2 border-b  outline-0'

                            />
                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='number' className='block mb-2 font-bold text-primary'>
                                Phone *
                            </label>
                            <input
                                type='number'
                                name='number'
                                id='number'
                                required
                                defaultValue={mainuser?.telephone}
                                placeholder='Phone'
                                className='w-full py-2 border-b  outline-0'

                            />
                        </div>
                        <div className="w-full flex flex-col mt-6">
                            <label htmlFor='email' className='block mb-2 font-bold text-primary'>
                                Email Address *
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                defaultValue={mainuser?.email}
                                placeholder='Email'
                                className='w-full py-2 border-b  outline-0'

                            />
                        </div>

                        <div>
                            <Heading text='Additional Information'></Heading>
                            <div className="border-b pb-[87px]">
                                <h2 className='block  font-bold text-primary'>Other Notes (optional)</h2>
                                <p className="text-sm font-normal text-[#767676] mt-2.5">Notes about your order, e.g. special notes for delivery.</p>
                            </div>
                            <Heading text='Your Order'></Heading>
                            <div className='flex  flex-col my-[54px]'>

                                <div className='w-[644px] mt-6  border border-[#F0F0F0]'>
                                    <div className='  flex justify-between border-b border-b-[#F0F0F0] '>
                                        <p className='w-1/2 px-5 py-4 border-r border-r-[#F0F0F0] font-bold'>Product</p>
                                        <span className='w-1/2 px-5 py-4'> Total</span>
                                    </div>
                                    {/* {totalprice.toFixed(2)}  {totalQuntity} */}
                                    <div className=' flex justify-between border-b border-b-[#F0F0F0] '>
                                        <p className='w-1/2 border-r border-r-[#F0F0F0] py-4 px-5 font-bold'> Product Quantity</p>
                                        <span className='w-1/2 py-4 px-5'>{totalQuntity}</span>
                                    </div>
                                    <div className='  flex justify-between border-b border-b-[#F0F0F0] '>
                                        <p className='w-1/2 px-5 py-4 border-r border-r-[#F0F0F0] font-bold'>Subtotal</p>
                                        <span className='w-1/2 px-5 py-4'> {totalprice.toFixed(2)} $</span>
                                    </div>
                                    <div className='  flex justify-between border-b border-b-[#F0F0F0] '>
                                        <p className='w-1/2 px-5 py-4 border-r border-r-[#F0F0F0] font-bold'>Delivary cost</p>
                                        <span className='w-1/2 px-5 py-4'> 100 $</span>
                                    </div>
                                    <div className=' flex justify-between '>
                                        <p className='w-1/2 border-r border-r-[#F0F0F0] py-4 px-5 font-bold'> total</p>
                                        <span className='w-1/2 py-4 px-5'>{parseInt(totalprice.toFixed(2)) + 100}  $</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                      
                            <button
                              
                                type='submit'
                                className=' mt-7 py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out '
                            >
                                Proceed to payment
                            </button>
                        

                    </form>



                </div>
            </Container>

        </div>
    );
};

export default Checkout;