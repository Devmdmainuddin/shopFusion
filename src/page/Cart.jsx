import React, { useState } from 'react';
import Container from '../components/layer/Container';
import Bredcumb from '../components/layer/Bredcumb';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button01 from '../components/layer/Button01';

const Cart = () => {
    let [Quantity, setQuantity] = useState(1);
    return (
        <div>
            <Container>
                <Bredcumb></Bredcumb>
                <div className='my-[136px]'>
                    <div className="overflow-x-auto border border-[#F0F0F0]">
                        <table className="   w-full ">
                            {/* head */}
                            <thead className='bg-[#F5F5F3] '>
                                <tr className=''>
                                    <th className='text-start'>Product</th>
                                    <th className='text-start'>Price</th>
                                    <th className='text-start'>Quantity</th>
                                    <th className='text-start'>Total</th>
                                    <th className='text-start'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <th>
                                        <div className='flex gap-2'>
                                            <img src="#" alt="cart product img" />
                                            <h2> Essence Mascara Lash Princess</h2>
                                        </div>


                                    </th>
                                    <td>
                                        $44.00

                                    </td>
                                    <td>
                                        <div className="w-[139px]   border border-[#F0F0F0] text-[#767676] flex justify-between items-center p-3">
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
                                    </td>
                                    <td> $44.00</td>
                                    <th>
                                        <button

                                            className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                    </th>
                                </tr>
                            </tbody>


                        </table>
                    </div>
                    <div className='mt-2 p-5 flex items-center gap-6 border border-[#F0F0F0]'>
                        <div className=''>

                            <select

                                name="sort" id="sort" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5'>
                                <option value="SIZE">SIZE</option>
                                <option value="s">S</option>
                                <option value="M">M</option>
                                <option value="s">L</option>
                                <option value="M">XL</option>
                                <option value="M">XXL</option>

                            </select>
                        </div>


                        <div className='flex justify-between w-full'>
                            <input className='w-1/2 border-none outline-none font-bold text-[#262626]' type="text" placeholder='Apply coupon' />
                            <button className='block font-bold text-[#262626]'>Update cart</button>
                        </div>


                    </div>
                    <div className='flex items-end flex-col my-[54px]'>
                        <h2 className='text-[#262626] text-xl font-bold'>Cart totals</h2>
                        <div className='w-[644px] mt-6  border border-[#F0F0F0]'>
                            <div className='  flex justify-between border-b border-b-[#F0F0F0] '>
                                <p className='w-1/2 px-5 py-4 border-r border-r-[#F0F0F0] font-bold'>Subtotal </p> <span className='w-1/2 px-5 py-4'>389.99 $</span>
                            </div>
                            <div className=' flex justify-between'>
                                <p className='w-1/2 border-r border-r-[#F0F0F0] py-4 px-5 font-bold'> Total</p> <span className='w-1/2 py-4 px-5'>389.99 $</span>
                            </div>

                        </div>
                       
                        <Button01 className='mt-[30px]' text='Proceed to Checkout'></Button01>
                       
                      

                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Cart;