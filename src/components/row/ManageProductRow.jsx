import { BiDetail } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const ManageProductRow = ({item,handleDelete}) => {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item.title}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
             <img src={item.image} alt="" className="w-16 h-16" />   
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item.category}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${item.price}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item.discount}%</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{item.userInfo.name}</p>
            </td>


            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                
                {/* Update User Modal */}
                {/* <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user}></UpdateUserModal> */}
                <Link to={`/product/${item._id}`} className='cursor-pointer inline-block px-3 py-1 bg-green-200  rounded-full font-semibold text-red-900 leading-tight'>
                <BiDetail />
                </Link>
                <Link to={`/dashboard/edditProduct/${item._id} `} className='cursor-pointer inline-block px-3 py-1 bg-green-300   rounded-full font-semibold text-red-900 leading-tight'>
                <FaRegEdit />
                </Link>
                <button onClick={() => handleDelete(item._id)} className='cursor-pointer inline-block px-3 py-1 bg-red-200  rounded-full font-semibold text-red-900 leading-tight'>
                <RiDeleteBinLine />
                </button>
            </td>
        </tr>
    );
};

export default ManageProductRow;