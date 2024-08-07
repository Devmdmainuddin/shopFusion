import { Link } from "react-router-dom";
import Container from "../layer/Container";
import logo from '/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterLi = ({ text,to, className }) => {
    return (
        <li className=''>
            <Link to={to} className={`font-DM text-sm text-[#6D6D6D]leading-6 ${className}`}>
                {text}
            </Link>
        </li>
    )

}

const Footer = () => {



    return (
        <footer className="bg-[#F5F5F3] pt-[53px]">
            <Container>
                <div className=" flex flex-col md:flex-row items-center md:items-start text-center md:text-start md:gap-x-12 lg:gap-x-36 gap-y-8">
                    <div className=" left  flex  justify-center  md:justify-between lg:gap-x-[140px] gap-x-16">
                        <ul >
                            <h4 className='font-DM font-bold text-base text-[#262626] leading-6  md:mb-4 mb-2'>MENU</h4>

                            <FooterLi to='' text ='Home'></FooterLi>
                            <FooterLi to='/shop' text ='Shop'></FooterLi>
                            <FooterLi to='/about' text ='About'></FooterLi>
                            <FooterLi to='/contacts' text ='Contact'></FooterLi>
                            <FooterLi to='/productInside' text ='Journal'></FooterLi>
                        </ul>

                        <ul >
                            <h4 className='font-DM font-bold text-base text-[#262626] leading-6 md:mb-4 mb-2 '>SHOP</h4>

                            <FooterLi to='/' text ='Category 1'></FooterLi>
                            <FooterLi to='/' text ='Category 2'></FooterLi>
                            <FooterLi to='/' text ='Category 3'></FooterLi>
                            <FooterLi to='/' text ='Category 4'></FooterLi>
                            <FooterLi to='/' text ='Category 5'></FooterLi>
                            
                        </ul>

                        <ul >
                            <h4 className='font-DM font-bold text-base text-[#262626] leading-6  md:mb-4 mb-2 '>HELP</h4>

                            <FooterLi to='/' text ='Privacy Policy'></FooterLi>
                            <FooterLi to='/' text ='Terms & Conditions'></FooterLi>
                            <FooterLi to='/' text ='Special E-shop'></FooterLi>
                            <FooterLi to='/' text ='Shipping'></FooterLi>
                            <FooterLi to='/' text ='Secure Payments'></FooterLi>
                           
                        </ul>
                    </div>
                    <div className="right  ">
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
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between pt-8 lg:pt-16 pb-[59px] gap-y-8 ">
                    <div className="icons flex gap-6 text-[#262626]">
                        <FaFacebookF />
                        <FaLinkedinIn />
                        <FaInstagram />

                    </div>
                    <p className="text-sm font-normal text-center lg:text-start text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Container>

        </footer>
    );
};

export default Footer;