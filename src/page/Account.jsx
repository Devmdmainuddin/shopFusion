
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Container from '../components/layer/Container';

const Account = () => {
    return (
        <>
        <div>
            <Container>
                <div className='mt-[93px]'>
                    <h2 className='text-[#262626] text-6xl font-bold'>My Account</h2>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-[12px] font-normal text-[#767676]'><Link to='/'>Home</Link></li>
                        <li><IoIosArrowForward className='text-[12px]' /></li>
                        <li className='text-[12px] font-normal text-[#767676]'> <Link to='/account'>My Account</Link></li>
                    </ul>
                </div>
                <div className='sm:flex justify-center md:justify-between mt-[127px] mb-[140px] gap-4'>
                    <div className='sidebar sm:w-1/3 lg:w-3/12 '>
                    <ul>
                        <li className="p-5 border-[#F0F0F0] border-b">
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className="p-5 border-[#F0F0F0] border-b">
                            <Link>Others</Link>
                        </li>
                        <li className="p-5 border-[#F0F0F0] border-b">
                            <Link>Donwloads</Link>
                        </li>
                        <li className="p-5 border-[#F0F0F0] border-b">
                            <Link>Addresses</Link>
                        </li>
                        <li className="p-5 border-[#F0F0F0] border-b">
                            <Link>Account details</Link>
                        </li>
                        <li className="p-5 border-[#F0F0F0] border-b">
                            <Link>Logout</Link>
                        </li>
                       
                    </ul>

                    </div>
                    <div className='main w-full sm:w-2/3 lg:w-9/12 '>

                    </div>
                </div>
            </Container>
        </div>
    </>
    );
};

export default Account;