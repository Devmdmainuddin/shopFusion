import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Li = ({ className, to, content, megaMenu ,children }) => {
    return (
        <li className='group'> 
        <NavLink className={`${className} text-[#767676] text-sm font-bold transition-all duration-300 hover:text-[#262626]`} to={to}>{content}
        </NavLink>
        <div className={`absolute  bg-slate-400 left-full top-0 ${megaMenu} transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible px-10 py-7 flex gap-12`}>

              {children}

        </div>
        </li>

    );
};
Li.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    content: PropTypes.string,
    children: PropTypes.node, // updated to node
    megaMenu: PropTypes.string,
}
export default Li;