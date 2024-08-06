import { useEffect, useRef } from 'react';
import { register } from "swiper/element/bundle";
import { LuRefreshCcw } from 'react-icons/lu';
import { FaCartShopping } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import card_img from '../../public/card-1.jpg'

import Card from './card/Card';
register();
const NewProduct = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            loop: true,
            //  slidesPerView: 2,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // 1024: {
                //     slidesPerView: 4,
                //     spaceBetween: 20,
                // },

            },
            // spaceBetween:30,
            // These are new...
            injectStyles: [
                `
              .swiper-button-next,
              .swiper-button-prev {
              
                background-color: #979797;
                padding: 8px 16px;
                border-radius: 100%;
                border:1px solid #979797;
                color: white;
                transition:all 0.4s;
              }
                .swiper-button-next:hover,
              .swiper-button-prev:hover{
              border:1px solid #0156FF;
              color:#0156FF;
              background-color: #A2A6B0;
              }
            
          `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <div>
            <swiper-container ref={swiperRef} init="false" className='flex flex-wrap py-6'>

                <swiper-slide class="blue-slide " >
                    {/* <div className='group'>
                        <div className="image relative overflow-hidden">
                            <p className='md:py-2 md:px-8 text-sm font-bold text-white bg-black absolute top-5 left-5 p-2'>New</p>
                            <img src={card_4} alt="" />
                            <div className='flex flex-col items-end py-6 px-8 group-hover:bottom-0 transition-all duration-700 absolute left-0 right-0 -bottom-full bg-white w-full'>
                                <button className='flex items-center gap-x-4 mt-5'>Add to Wish List <FaHeart /></button>
                                <button className='flex items-center gap-x-4 mt-5'>Compare <LuRefreshCcw
                                    className='text-black' /></button>
                                <button className=' flex items-center gap-x-4 mt-5'>Add to Cart <FaCartShopping /></button>
                            </div>
                        </div>
                        <Link to='/details' className="content bg-white ">
                            <div className=' py-6 flex justify-between items-center'>
                                <h2 className='text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className='text-[#767676]'>$44.00</p>
                            </div>
                            <p className='text-[#767676]'>Black</p>

                        </Link>

                    </div> */}
                    <Card src='/card-1.jpg' offer='10 %' alt='product-1 image' title='Basic Crew Neck Tee' price='$24.00' brand='Black' ></Card>
                </swiper-slide>
                <swiper-slide class="blue-slide " >
                    
                    <Card src='/card-1.jpg' offer='new' alt='product-1 image' title='Basic Crew Neck Tee' price='$14.00' brand='Black' ></Card>
                </swiper-slide>
                <swiper-slide class="blue-slide " >
                    
                    <Card src='/card-1.jpg' alt='product-1 image' title='Basic Crew Neck Tee' price='$44.00' brand='Black'></Card>
                </swiper-slide>
                <swiper-slide class="blue-slide " >
                   
                    <Card src='/card-1.jpg' offer='25 %' title='Basic Crew Neck Tee' alt='product-1 image'price='$54.00' brand='Black'></Card>
                </swiper-slide>
                <swiper-slide class="blue-slide " >
                  
                    <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                </swiper-slide>
                
          
             
                {/* <swiper-slide class="blue-slide " >
                    <div className='group'>
                        <div className="image relative overflow-hidden">
                            <p className='md:py-2 md:px-8 text-sm font-bold text-white bg-black absolute top-5 left-5 p-2'>New</p>
                            <img src={card_4} alt="" />
                            <div className='flex flex-col items-end py-6 px-8 group-hover:bottom-0 transition-all duration-700 absolute left-0 right-0 -bottom-full bg-white w-full'>
                                <button className='flex items-center gap-x-4 mt-5'>Add to Wish List <FaHeart /></button>
                                <button className='flex items-center gap-x-4 mt-5'>Compare <LuRefreshCcw
                                    className='text-black' /></button>
                                <button className=' flex items-center gap-x-4 mt-5'>Add to Cart <FaCartShopping /></button>
                            </div>
                        </div>
                        <Link to='/details' className="content bg-white ">
                            <div className=' py-6 flex justify-between items-center'>
                                <h2 className='text-[#262626]'>Basic Crew Neck Tee</h2>
                                <p className='text-[#767676]'>$44.00</p>
                            </div>
                            <p className='text-[#767676]'>Black</p>

                        </Link>

                    </div>
                </swiper-slide> */}

            </swiper-container>
        </div>
    );
};

export default NewProduct;