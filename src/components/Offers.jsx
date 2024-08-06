// import { FaHeart } from 'react-icons/fa';
// import card_1 from '/card-1.jpg'
// import card_2 from '/card-2.jpg'
// import card_3 from '/card-3.jpg'
// import card_4 from '/card-4.jpg'
// import { LuRefreshCcw } from 'react-icons/lu';
// import { FaCartShopping } from 'react-icons/fa6';
// import { Link } from 'react-router-dom';
import Heading from './layer/Heading';
import Container from './layer/Container';
import Card from './card/Card';
const Offers = () => {
    return (
        <>
            <Container>
                <Heading className='mt-[128px] mb-12' text='Special Offers'></Heading>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3'>
                    <Card src='/card-1.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                    <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                    <Card src='/card-1.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                    <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                </div>
            </Container>


            {/* <div className='group '>
                <div className="image w-[370px] h-[370px] relative overflow-hidden">
                    <p className='md:py-2 md:px-8 p-2 text-sm font-bold text-white bg-black absolute top-3 left-3'>New</p>
                    <img className="w-full h-full object-cover" src={card_2} alt="" />
                    <div className='flex flex-col items-end  pr-8 group-hover:bottom-0 transition-all duration-700 absolute left-0 right-0 -bottom-full bg-white w-full'>
                        <button className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>Add to Wish List <FaHeart /></button>
                        <button className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>Compare <LuRefreshCcw
                            className='text-black' /></button>
                        <button className='flex items-center justify-end lg:gap-x-4 gap-x-2 lg:pt-5 pt-2 text-[#767676] hover:text-[#262626] hover:font-bold transition-all duration-300 cursor-pointer'>Add to Cart <FaCartShopping /></button>
                    </div>
                </div>
                <Link to='/details' className="content bg-white font-DM px-3 lg:px-0">
                    <div className=' pt-6 flex justify-between items-baseline'>
                        <h2 className='text-[#262626] text-xl font-bold cursor-pointer'>Basic Crew Neck Tee</h2>
                        <p className='text-[#767676] text-base font-normal leading-7'>$44.00</p>
                    </div>
                    <p className='text-[#767676] text-base font-normal leading-7 pt-4'>Black</p>

                </Link>

            </div> */}


        </>
    );
};

export default Offers;