import React, { useEffect, useState } from 'react';
import Container from '../components/layer/Container';
import Bredcumb from '../components/layer/Bredcumb';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Button01 from '../components/layer/Button01';
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteItem, removeProduct } from '../redux/state/cartSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    // let [totalPrice, setTotalPrice] = useState(0);
    const carts = useSelector((state) => state.cart.cartItem)
    const dispatch = useDispatch();

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
        // await mutateAsync(id)
        // refash()
        // refetch()

            }
        });

       
    }
    const handkeMinusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity - 1, }))
    }
    const handkePlusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity + 1, }))
    }

    // useEffect(() => {
    //     const cartTotal = carts.reduce((acc, items) => acc + parseInt(items.price * items.qun), 0)
    //     setTotalPrice(cartTotal)
    // }, [carts])
    let { totalprice, totalQuntity } = carts.reduce((acc, item) => {
        acc.totalprice += item.price * item.qun
        acc.totalQuntity += item.qun
        return acc
    }, { totalprice: 0, totalQuntity: 0 })

    return (
        <div>
            <Container>
                <Bredcumb></Bredcumb>
                <div className='my-[136px]'>
                    <div className="overflow-x-auto border border-[#F0F0F0]">
                        {carts.length ?
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
                                    {carts.map((item, i) =>
                                        <tr key={item.id}>

                                            <th>
                                                <div className='flex gap-2'>
                                                    <img className='w-10 h-10' src={item.images} alt="cart product img" />
                                                    <h2> {item.title}</h2>
                                                </div>


                                            </th>
                                            <td>
                                                ${item.price.toFixed(2)}

                                            </td>
                                            <td>
                                                <div className="w-[139px]   border border-[#F0F0F0] text-[#767676] flex justify-between items-center p-3">
                                                    <span
                                                        className="cursor-pointer inline-block   text-lg font-normal "
                                                        onClick={() => handkeMinusQuantity(item, item.qun)}
                                                    >
                                                        <FaMinus />
                                                    </span>
                                                    <span className="inline-block px-2 text-lg font-normal">{item.qun}</span>
                                                    <span
                                                        className="cursor-pointer inline-block  text-lg "
                                                        onClick={() => handkePlusQuantity(item, item.qun)}
                                                    >
                                                        <FaPlus />
                                                    </span>
                                                </div>
                                            </td>
                                            {/* .toFixed(2) */}
                                            <td>${((item.price).toFixed(2) * item.qun)}</td>
                                            <th>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    // onClick={() => handleDelete(item.id)}
                                                    className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600" /></button>
                                            </th>
                                        </tr>
                                    )}

                                </tbody>


                            </table> : <h2 className='my-6 text-center'>Cart is Empty</h2>
                        }

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
                                <p className='w-1/2 px-5 py-4 border-r border-r-[#F0F0F0] font-bold'>Product quantity </p> <span className='w-1/2 px-5 py-4'>{totalQuntity} </span>
                            </div>
                            <div className=' flex justify-between'>
                                <p className='w-1/2 border-r border-r-[#F0F0F0] py-4 px-5 font-bold'> Total</p> <span className='w-1/2 py-4 px-5'>{totalprice.toFixed(2)} $</span>
                            </div>

                        </div>
                        <Link to='/checkout'>
                            <Button01 className='mt-[30px]' text='Proceed to Checkout'></Button01>
                        </Link>




                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Cart;