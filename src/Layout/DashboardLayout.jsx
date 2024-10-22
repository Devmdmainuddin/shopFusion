import { IoIosArrowForward } from "react-icons/io";
import Bredcumb from '../components/layer/Bredcumb'
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../page/dashboard/Sidebar";



const DashboardLayout = () => {
    return (
        <>
           
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