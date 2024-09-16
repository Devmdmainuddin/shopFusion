import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

// import Sidebar from "./Sidebar";


const SitebarLi = ({to, icon, text }) => {
    return (
        <li className="relative group" >
            <Link to={to} href="#" className="flex items-center gap-3 py-2 px-4 text-gray-600 hover:text-gray-700  rounded-md group-[.active]:bg-gray-700 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                {icon}
                <span className={`text-sm absolute  left-12 opacity-100 `}>{text}</span>
            </Link>
        </li>
    )
}


const Dashboard = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="max-w-[1600px] overflow-hidden">

            <div className={`sidebar-menu overflow-hidden fixed left-0 top-0  ${show ? 'w-12' : 'w-64'} h-full text-gray-600 bg-gray-100  z-50 transition-all duration-500 `}>
                <Link to={'/'} className="flex items-center py-2 px-6 border-b ">
                    <img src="#" alt="" className=" rounded object-cover" />
                    <span className="text-lg font-bold  ml-3">Logo</span>
                </Link>

                <ul className="mt-4">
                    <SitebarLi to='' icon={<IoMdSettings />} text='Dashboard'></SitebarLi>
                    <SitebarLi to='/dashboard/addProduct' icon={<RiLockPasswordFill />} text='add product'></SitebarLi>
                    <SitebarLi to='/dashboard/manageProduct' icon={<RiLockPasswordFill />} text='Manage Product'></SitebarLi>
                    <SitebarLi to='/dashboard/cart' icon={<RiLockPasswordFill />} text='Cart'></SitebarLi>
                    <SitebarLi to='/dashboard/manageUsers' icon={<RiLockPasswordFill />} text='manageUsers'></SitebarLi>
                    <SitebarLi to='' icon={<RiLockPasswordFill />} text='Settings'></SitebarLi>
                    {/* <li className="relative" >

                        <Link href="#" className="flex items-center gap-3 py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-700 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                         <IoMdSettings />
                            <span className={`text-sm absolute  left-12 opacity-100 `}> Dashboard</span>
                        </Link>
                    </li> */}
                    {/* <li className="mb-1 group">
                        <a href="#" className="flex items-center gap-3 py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <RiLockPasswordFill />
                            <span className="text-sm">Orders</span>

                        </a>

                        <ul className="pl-7 mt-2  group-[.selected]:block">
                            <li className="mb-4">
                                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed order</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li className="mb-1 group">
                        <Link to='/dashboard/manageUsers' href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <i className="ri-flashlight-line mr-3 text-lg"></i>
                            <span className="text-sm">manageUsers</span>
                            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                        </Link>
                        <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                            <li className="mb-4">
                                <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage services</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mb-1 group">
                        <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-settings-2-line mr-3 text-lg"></i>
                            <span className="text-sm">Settings</span>
                        </a>
                    </li> */}
                </ul>
            </div>
            {/* <Sidebar className='show'></Sidebar> */}





            <main className={`main    z-40   ${show ? 'ml-12 md:max-w-full]' : 'ml-64 md:max-w-[calc(100%-256px)]'}  bg-gray-200 min-h-screen transition-all  duration-500 z-30`}>
                <div className="py-2  text-gray-600 bg-gray-100   hover:text-gray-700 flex items-center  shadow-black/5 sticky top-0 left-0 z-30">
                    <button onClick={() => setShow(!show)} type="button" className="text-lg text-gray-600 sidebar-toggle">
                        <CiMenuFries />
                    </button>
              
                    <ul className="flex items-center text-lg ml-4">
                        <li className="mr-2">
                            <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">{window.location.pathname.split("/")[1]}</a>
                        </li>
                        <li className="text-gray-600 mr-2 font-medium">/</li>
                        <li className="text-gray-600 mr-2 font-medium">{window.location.pathname.split("/")[2]}</li>
                    </ul>

                </div>
                <div className="">
                    <Outlet className='py-2 '></Outlet>
                </div>

            </main>
        </div>

    );
};

export default Dashboard