import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import LoadingSpinner from "../../components/share/LoadingSpinner"
import AdminMenu from './Menu/AdminMenu'
import GuestMenu from './Menu/GuestMenu'
import SellerMenu from './Menu/SellerMenu'

// import Sidebar from "./Sidebar";


const SitebarLi = ({ to, icon, text }) => {
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
    const { logOut } = useAuth()
    const [show, setShow] = useState(false)
    const [role, isloading] = useRole()
    if (isloading) return <LoadingSpinner />

    return (
        <div className="max-w-[1600px] overflow-hidden">
            <div className={`sidebar-menu overflow-hidden fixed left-0 top-0  ${show ? 'w-12' : 'md:w-64 w-[128px]'} h-full text-gray-600 bg-gray-100  z-50 transition-all duration-500 `}>
                <Link to={'/'} className="flex items-center py-4 px-3 border-b ">
                    <div className="logo">
                        <img src='/logo.png' alt="" className="max-w-[40px] max-h-[40px] rounded object-contain" />
                    </div>
                </Link>
                <ul className="mt-4">
                    <SitebarLi to='/dashboard/profile' icon={<IoMdSettings />} text='profile'></SitebarLi>
                    {role === 'user' && <GuestMenu />}
                    {role === 'Seller' && <SellerMenu />}
                    {role === 'admin' && <AdminMenu />}
                    <button onClick={logOut} className="py-2 px-4 text-gray-600 hover:text-gray-700  rounded-md group-[.active]:bg-gray-700 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">logOut</button>
                    {/* <SitebarLi to='' icon={<RiLockPasswordFill />} text='logOut'></SitebarLi> */}   
                </ul>
            </div>

            <main className={`main    z-40   ${show ? 'ml-12 md:max-w-full]' : 'md:ml-64 md:max-w-[calc(100%-256px)] ml-[128px] '}  bg-gray-200 min-h-screen transition-all  duration-500 z-30`}>
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