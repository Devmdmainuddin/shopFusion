import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";


const Dashboard = () => {
    const [show,setShow]= useState(false)
    return (
        <div className="w-[1380px] overflow-hidden">

            <div className={`sidebar-menu overflow-hidden fixed left-0 top-0  ${show?'w-12':'w-64'} h-full bg-gray-900  z-50 transition-all duration-500 `}>
                <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
                    <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover" />
                    <span className="text-lg font-bold text-white ml-3">Logo</span>
                </a>
                <ul className="mt-4">
                    <li className="mb-1 group active">
                        <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className="ri-home-2-line mr-3 text-lg"></i>
                            <span className="text-sm">Dashboard</span>
                        </a>
                    </li>
                    <li className="mb-1 group">
                        <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <i className="ri-instance-line mr-3 text-lg"></i>
                            <span className="text-sm">Orders</span>
                            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                        </a>
                        <ul className="pl-7 mt-2 hidden group-[.selected]:block">
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
                    </li>
                    <li className="mb-1 group">
                        <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <i className="ri-flashlight-line mr-3 text-lg"></i>
                            <span className="text-sm">Services</span>
                            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                        </a>
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
                    </li>
                </ul>
            </div>
       




            <main className={`main w-full  md:w-[calc(100%-256px)]  ${show?'ml-12':'ml-64'}  bg-gray-500 min-h-screen transition-all  duration-500 `}>
                <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                    <button onClick={()=>setShow(!show)} type="button" className="text-lg text-gray-600 sidebar-toggle">
                    <CiMenuFries />
                    </button>
                    <ul className="flex items-center text-sm ml-4">
                        <li className="mr-2">
                            <a href="#" className="text-gray-400 hover:text-gray-600 font-medium">Dashboard</a>
                        </li>
                        <li className="text-gray-600 mr-2 font-medium">/</li>
                        <li className="text-gray-600 mr-2 font-medium">Analytics</li>
                    </ul>
                  
                </div>
               
            </main>
        </div>
       
    );
};

export default Dashboard