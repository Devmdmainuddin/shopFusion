import { IoIosArrowForward } from "react-icons/io";
import Bredcumb from '../components/layer/Bredcumb'
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../page/dashboard/Sidebar";



const DashboardLayout = () => {
    return (
        <>
            {/* <div className='max-w-[1600px] mx-auto  mt-[93px]'>
                <h2 className='text-[#262626] text-6xl font-bold'>Dashboard</h2>
                <ul className='flex items-center gap-2 mt-3'>
                    <li className='text-[12px] font-normal text-[#767676]'><Link to='/'>Home</Link></li>
                    <li><IoIosArrowForward className='text-[12px]' /></li>
                    <li className='text-[12px] font-normal text-[#767676]'> <Link to='/account'>My Account</Link></li>
                </ul>
            </div> */}
            <Bredcumb></Bredcumb>
            <div className="relative min-h-screen md:flex">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className="flex-1 md:ml-64">
                    <div className="">
                        <Outlet></Outlet>
                    </div>

                </div>

            </div>
        </>
    );
};

export default DashboardLayout;