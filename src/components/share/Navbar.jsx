import { CgMenuGridR } from "react-icons/cg";
import Container from "../layer/Container";
import Li from "../layer/Li";
import logo from '/logo.png'
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useEffect, useState } from "react";
import Image from "../layer/Image";

const Navbar = () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        function resize() {
            if (window.innerWidth > 767.99) {
                setShow(true)
            } else {
                setShow(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
    }, [])
    return (
        <div className="bg-[#c7c6c6]">
            <Container className='flex justify-end md:justify-center items-center relative  md:py-8 py-3 px-3 md:px-0'>
                <div className="logo">
                    <Image src={logo} alt="logo image" className="absolute left-6 top-1/2 -translate-y-1/2" ></Image>
                {/* <img src={logo} alt="" className="absolute left-6 top-1/2 -translate-y-1/2" /> */}
                </div>
  
            {/* ${show ? "translate-x-0" :" -translate-x-full"} */}
            {/* ${show ?"opacity-100 visible z-50":"opacity-0 hidden"} */}
                    <ul className={`flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-10 md:bg-transparent bg-[#D8D8D8]  transition-all duration-300  md:static p-4 md:p-0  absolute top-full left-0 w-full   ${show ? "opacity-100 visible z-50" :" opacity-0 invisible"}`}>
                        <Li to='/' className='' content='Home'></Li>
                        <Li to='shops' className='' content='Shop'></Li>
                        <Li to='aboutUs' className='' content='About'></Li>
                        <Li to='contact' className='' content='Contacts'></Li>
                        <Li to='journal' className='' content='Journal'></Li>
                    </ul>

                <div className=" md:hidden flex gap-2 items-center">
                    <div className="flex gap-1 items-center"><FaUserAlt /><TiArrowSortedDown /></div>
                    <FaShoppingCart />
                    <p onClick={() => setShow(!show)}><CgMenuGridR /></p>
                </div>

            </Container>
        </div>
    );
};

export default Navbar;