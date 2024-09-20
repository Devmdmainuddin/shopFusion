import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'

const MenuItems = ({ to, icon:Icon, text }) => {
    return (
      
            <NavLink to={to}
                className={({ isActive }) => `flex items-center gap-3 py-2 px-4 text-gray-600 hover:text-gray-700 rounded-md :text-gray-100
       ${isActive ? '' : ''}`}>
        <Icon/>
                <span className={`text-sm absolute  left-12 opacity-100 `}>{text}</span>

            </NavLink>
       
    );
};
MenuItems.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.elementType,
  }
export default MenuItems;