import { NavLink } from "react-router-dom";


const Li = ({className,to,content}) => {
    return (
        <li> <NavLink className={`${className} text-[#767676] text-sm font-bold transition-all duration-300 hover:text-[#262626]`} to={to}>{content}
        </NavLink></li>
    );
};

export default Li;