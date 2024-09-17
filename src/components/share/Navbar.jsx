import { CgMenuGridR } from "react-icons/cg";
import Container from "../layer/Container";
import Li from "../layer/Li";
import logo from '/logo.png'
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useEffect, useState } from "react";
import Image from "../layer/Image";
import { IoMdClose } from "react-icons/io";
import Searchbar from './Searchbar'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetproductsQuery } from "../../services/productApi";

const Navbar = () => {
    const [proOpen, setProOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [show, setShow] = useState(false)
    let [searchInput, setSearchInput] = useState("");
    let [searchFilter, setSearchFilter] = useState([]);
    const [isActive, setIsActive] = useState(false)
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const { data, error, isLoading, } = useGetproductsQuery()
    // const { posts } = useSelector((state) => state.posts)
    const handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setSearchFilter([])
        } else {
            const searchOne = data?.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne)
        }
    }
    const handleLink = (id) => {
        navigate(`/product/${id}`)
        setSearchFilter([])
        setSearchInput("")
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 160 ? setIsActive(true) : setIsActive(false);
        })
    }, [])

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
        var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");
        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });


    }, [])

    return (

        <header className=" nav  w-full bg-slate-300 z-50 ">

            <Container className='h-full '>
                <div className="cursor fixed w-10 h-10 border border-[#0ae9cf] rounded-full left-0 top-0 -translate-y-1/2 -translate-x-1/2 z-50 transition-all duration-100"></div>
                <div className="cursor2  fixed w-2 h-2 bg-[#0ae9cf] rounded-full left-0 top-0 -translate-y-1/2 -translate-x-1/2 z-50 transition-all duration-200"></div>
                <nav className="flex justify-end md:justify-center items-center relative md:py-8 py-3 px-3 md:px-0 ">
                    <div className="logo">
                        <Image src={logo} alt="logo image" className="absolute left-6 top-1/2 -translate-y-1/2" ></Image>
                        {/* <img src={logo} alt="" className="absolute left-6 top-1/2 -translate-y-1/2" /> */}
                    </div>
                    {/*  ${show ? "opacity-100 visible z-50" : " opacity-0 invisible"}`} */}

                    <ul className={`flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-10 md:bg-transparent bg-[#D8D8D8]  transition-all duration-300  md:static p-4 md:p-0  absolute top-full left-0 w-full z-50 ${show ? "translate-x-0" : " -translate-x-full "} `}>
                        <Li to='/' className='' content='Home'></Li>
                        <Li to='shops' className='' content='Shop'></Li>
                        <Li to='aboutUs' className='' content='About'></Li>
                        <Li to='contact' className='' content='Contacts'></Li>
                        <Li to='journal' className='' content='Journal'></Li>
                    </ul>
                    <div className=" md:hidden flex gap-2 items-center">
                        <button onClick={() => setProOpen(!proOpen)} className="flex gap-1 items-center"><FaUserAlt /><TiArrowSortedDown /></button>
                        {proOpen && (
                            <div className=" absolute z-50 top-full right-12 ">
                                <div className="w-[263px] block  bg-[#ffffff] ">
                                    <div className="button flex flex-col  w-full">
                                        <Link to='/account' className="py-4  px-3 lg:px-10 bg-[#262626]  w-full text-white ">My Account</Link>
                                        <button className="py-4 px-3 lg:px-10 text-[#262626]  w-full mt-0 bg-[#F0F0F0] border ">logOut</button>

                                    </div>
                                </div>
                            </div>
                        )}

                        <button onClick={() => setCartOpen(!cartOpen)} className=""><FaShoppingCart /></button>
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
                        <p onClick={() => setShow(!show)}><CgMenuGridR /></p>
                    </div>
                </nav>
                {/* ${show ? "translate-x-0" :" -translate-x-full"} */}
                {/* ${show ?"opacity-100 visible z-50":"opacity-0 hidden"} */}

            </Container>
            <Searchbar searchInput={searchInput} searchFilter={searchFilter} handleLink={handleLink} handleInput={handleInput}></Searchbar>
        </header>
    );
};

export default Navbar;