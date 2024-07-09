import { Link } from "react-router-dom";
import Container from "../layer/Container";
import logo from '/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#F5F5F3] pt-[53px]">
            <Container>
                <div className=" flex flex-col md:flex-row items-center md:items-start  lg:gap-x-36 gap-x-14">
                    <div className=" w-1/3 flex  justify-between lg:gap-x-36 gap-x-14">
                        <ul >
                            <h4 className='font-DM font-bold text-base text-[#262626] leading-6  md:mb-4 mb-2'>MENU</h4>

                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Home</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6' to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6' to="/about">About</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6' to="/contacts">Contact</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6 ' to="/productInside">Journal</Link>
                            </li>


                        </ul>

                        <ul >
                            <h4 className='font-DM font-bold text-base text-[#262626] leading-6 md:mb-4 mb-2 '>SHOP</h4>

                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 1</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 2</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 3</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 4</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Category 5</Link>
                            </li>


                        </ul>

                        <ul >
                            <h4 className='font-DM font-bold text-base text-[#262626] leading-6  md:mb-4 mb-2 '>HELP</h4>

                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Special E-shop</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Shipping</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm text-[#6D6D6D]leading-6'>Secure Payments</Link>
                            </li>


                        </ul>
                    </div>
                    <div className=" w-1/3">
                        <ul className=' mt-7 md:mt-0'>

                            <li>
                                <Link className='font-DM text-base leading-7 font-bold text-[#262626] ' to='tel:(052) 611-5711'>(052) 611-5711</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-base leading-7 font-bold text-[#262626] ' to='mailto:company@domain.com'>company@domain.com</Link>
                            </li>
                            <li>
                                <Link className='font-DM text-sm leading-6 text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</Link>
                            </li>



                        </ul>
                    </div>
                    <div className=" w-1/3">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="flex justify-between pt-16 pb-[59px]">
                    <div className="icons flex gap-6 text-[#262626]">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaInstagram />

                    </div>
                    <p className="text-sm font-normal text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Container>

        </footer>
    );
};

export default Footer;