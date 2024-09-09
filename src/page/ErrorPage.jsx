
import { useNavigate } from 'react-router-dom'
import Button01 from '../components/layer/Button01';
import Navbar from '../components/share/Navbar';
import Footer from '../components/share/Footer';


const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className=" w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className>
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you{`'`}ve found the
                                    doorway to the great nothing
                                </h1>
                                <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className='flex items-center justify-center w-1/2 py-4 px-10 border-[#262626] text-sm text-gray-700 transition-colors duration-200 bg-white border  gap-x-2 sm:w-auto   hover:border-[#262626] hover:text-white hover:bg-[#262626]'
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth='1.5'
                                            stroke='currentColor'
                                            className='w-5 h-5 rtl:rotate-180 text-rose-500'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                                            />
                                        </svg>

                                        <span>Go back</span>
                                    </button>

                                    <Button01 text={'Take Me Home'} onClick={() => navigate('/')} />
                                </div>

                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;