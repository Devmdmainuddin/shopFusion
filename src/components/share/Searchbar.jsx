import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiBars2 } from "react-icons/hi2";
import { RiContactsFill } from "react-icons/ri";
import Li from "../layer/Li";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "../layer/Container";
import MegaMenuLi from "../layer/MegaMenuLi";

const Searchbar = () => {
    const [catOpen, setCatOpen] = useState(false)
    const [proOpen, setProOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <div className="lg:py-6 py-2   bg-[#F5F5F3]  w-full">
            <Container className={`flex flex-row px-6 justify-between items-center  relative`}>


                <div onClick={() => setCatOpen(!catOpen)} className="left flex items-center gap-2  text-sm font-DM  ">
                    <HiBars2 />
                    <p className="ml-2 hidden md:block">Shop by Category</p>

                </div>



                
                <ul className={`${catOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} categoryUl w-[163px] lg:w-[263px] bg-[#2D2D2D] p-6   absolute left-6 top-full translate-y-6 `}>

                    <Li to='/' megaMenu='h-full' content='Accesories' className='text-[#ffffffc7] hover:text-white py-4 font-normal hover:pl-8 block' >
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

                    <Li to='/' megaMenu='hidden' content='Clothes' className='text-[#ffffffc7] hover:text-white py-4 font-normal hover:pl-8 block' ></Li>

                </ul>




                <div className="relative w-full lg:w-[600px] ml-5 hover:shadow-mainudin">
                    <label htmlFor="search" className="absolute right-5 top-1/2 -translate-y-1/2"><FaSearch /></label>
                    <input type="search" name="search" id="search" placeholder="Search Products" className="p-4 px-5 w-full rounded-lg outline-none" />
                </div>
                <div className="md:flex gap-6 relative p-4 hidden ">
                    <button onClick={() => setProOpen(!proOpen)}><RiContactsFill /></button>
                    {proOpen && (
                        <div className=" absolute z-50 top-full right-12 translate-y-6">
                            <div className="w-[263px] block  bg-[#ffffff] ">
                                <div className="button flex flex-col  w-full">
                                    <Link to='/account' className="py-4  px-3 lg:px-10 bg-[#262626]  w-full text-white ">My Account</Link>
                                    <button className="py-4 px-3 lg:px-10 text-[#262626]  w-full mt-0 bg-[#F0F0F0] border ">logOut</button>

                                </div>
                            </div>
                        </div>
                    )}
                    <button onClick={() => setCartOpen(!cartOpen)} className=""><FaCartShopping /></button>

                    {cartOpen && (
                        <div className="w-[360px] absolute z-50 top-full right-3 bg-slate-50 border translate-y-6">
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



            </Container>





        </div>
    );
};

export default Searchbar;