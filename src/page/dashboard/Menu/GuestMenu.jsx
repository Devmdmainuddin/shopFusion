import { RiLockPasswordFill } from "react-icons/ri";
import MenuItems from "./MenuItems";


const GuestMenu = () => {
    return (
        <>
             <MenuItems icon={RiLockPasswordFill} to='/dashboard/cart' text='Cart'></MenuItems>
        </>
    );
};

export default GuestMenu;