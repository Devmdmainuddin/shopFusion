import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars2 } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
 import Li from "../layer/Li";
import { IoMdClose } from "react-icons/io";

const Searchbar = () => {
    const [catOpen, setCatOpen] = useState(false)
    const [proOpen, setProOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <div className="lg:py-6 py-2 bg-[#F5F5F3]  w-full">
         
                <div className="max-w-[1312px] mx-auto flex flex-row justify-between items-center px-3 lg:px-0">
                    <div className="relative">
                        <div onClick={() => setCatOpen(!catOpen)} className="flex items-center cursor-pointer"> 
                            <HiBars2 />
                            <p className="ml-2 hidden sm:block">Shop by Category</p>

                        </div>
                        {catOpen && (
                            <div className="w-[263px] bg-[#262626] px-4  lg:py-4 py-2 absolute z-50 top-full left-0">
                                <ul className="">
                                    <Li to='/' content='Accesories' className='text-[#ffffffc7] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' ></Li>
                                    
                                    <Li to='/' content='Furniture' className='text-[#ffffffc7] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' ></Li>
                                    
                                    <Li to='/' content='Electronics' className='text-[#ffffffc7] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' ></Li>
                                   
                                    <Li to='/' content='Clothes' className='text-[#ffffffc7] hover:text-[#FFFFFF] py-4 font-[400] hover:px-8 mt-4' ></Li>
                                    
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="relative w-full lg:w-[600px] ml-5 hover:shadow-mainudin">
                        <label htmlFor="search" className="absolute right-5 top-1/2 -translate-y-1/2"><FaSearch /></label>
                        <input type="search" name="search" id="search" placeholder="Search Products" className="p-4 px-5 w-full rounded-lg outline-none" />
                    </div>
                    <div className="md:flex gap-6 relative p-4 hidden ">
                        <button onClick={() => setProOpen(!proOpen)}><RiContactsFill /></button>
                        {proOpen && (
                            <div className=" absolute z-50 top-full right-12 ">
                                <div className="w-[263px] block  bg-[#ffffff] ">
                                    <div className="button flex flex-col  w-full">
                                        <button className="py-4  px-3 lg:px-10 bg-[#262626]  w-full text-white ">My Account</button>
                                        <button className="py-4 px-3 lg:px-10 text-[#262626]  w-full mt-0 bg-[#F0F0F0] border ">logOut</button>

                                    </div>
                                </div>
                            </div>
                        )}
                        <button onClick={() => setCartOpen(!cartOpen)} className=""><FaCartShopping /></button>

                        {cartOpen && (
                            <div className="w-[360px] absolute z-50 top-full right-3 bg-slate-50 border">
                                <div className="flex justify-between  gap-2 bg-[#F5F5F3] p-5">
                                    <img src="#" alt="" className="bg-[#979797] w-20 h-20" />
                                    <div><h2>Black Smart Watch</h2>
                                        <p>$44.00</p>
                                    </div>
                                    <button><IoMdClose /></button>
                                </div>
                                <div className="p-5">
                                    <p >Subtotal: <span className="text-[#262626] font-bold">$44.00</span></p>
                                    <div className="flex  gap-5 mt-3">
                                        <button className="w-full block py-4  px-3 lg:px-10 text-[#262626] border border-[#262626]">View Cart</button>
                                        <button className="w-full block py-4 px-3 lg:px-10 bg-[#262626] text-white">Checkout</button>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>


                </div>

          


        </div>
    );
};

export default Searchbar;