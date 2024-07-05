import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar"
import Footer from "../components/share/Footer";


const Layout = () => {
    return (
        <div>
            <div><Navbar/></div>
            <div><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default Layout;