
import { IoIosArrowUp } from 'react-icons/io';
import Container from '../components/layer/Container';
import { useState } from 'react';

const Product = () => {
    const [round, setRound] = useState(false)
    return (
        <div>
            <Container>
                <div className='sm:flex sm:flex-wrap justify-between '>
                    <div className='sm:w-1/3 lg:w-3/12  '>

                        <details className="group [&_summary::-webkit-details-marker]:hidden relative" open>
                            <summary
                                onClick={() => setRound(!round)}
                                className="flex relative transition-all duration-300 cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 "
                            >
                                <h2 className='text-[#262626] text-xl font-bold'>Shop by Color</h2>

                                <IoIosArrowUp className={`transition-all duration-300 ${round ? 'rotate-180' : 'rotate-0'}`} />

                            </summary>
                            <div className={` `}>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <span className='w-[11px] h-[11px] rounded-full bg-black'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 1</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <span className='w-[11px] h-[11px] rounded-full bg-[#FF8686]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 2</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <span className='w-[11px] h-[11px] rounded-full bg-[#7ED321]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 3</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <span className='w-[11px] h-[11px] rounded-full bg-[#B6B6B6]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 4</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <span className='w-[11px] h-[11px] rounded-full bg-[#15CBA5]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 5</p>
                                </div>
                            </div>



                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden relative" open>
                            <summary
                                onClick={() => setRound(!round)}
                                className="mt-[53px] flex relative transition-all duration-300 cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 "
                            >
                                <h2 className='text-[#262626] text-xl font-bold'>Shop by Brand</h2>

                                <IoIosArrowUp className={`transition-all duration-300 ${round ? 'rotate-180' : 'rotate-0'}`} />

                            </summary>
                            <div className={`px-4 `}>
                                <div className='flex justify-between py-4  leading-relaxed text-[13px] font-normal border-b border-b-[#F0F0F0]'>
                                    <p>Brand 1</p> <span>22</span>
                                </div>
                                <div className='flex justify-between py-4  leading-relaxed text-[13px] font-normal border-b border-b-[#F0F0F0]'>
                                    <p>Brand 2</p> <span>11</span>
                                </div>
                                <div className='flex justify-between py-4 leading-relaxed text-[13px] font-normal border-b border-b-[#F0F0F0]'>
                                    <p>Brand 3</p> <span>10</span>
                                </div>
                            </div>



                        </details>
                        <details className="group [&_summary::-webkit-details-marker]:hidden relative" open>
                            <summary
                                onClick={() => setRound(!round)}
                                className="flex mt-[53px] relative transition-all duration-300 cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 "
                            >
                                <h2 className='text-[#262626] text-xl font-bold '>Shop by Price</h2>

                                <IoIosArrowUp className={`transition-all duration-300 ${round ? 'rotate-180' : 'rotate-0'}`} />

                            </summary>
                            <div className={` `}>
                                <div className='flex justify-between py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p>$0.00 - $9.99</p>
                                </div>
                                <div className='flex justify-between py-4 border-b border-b-[#F0F0F0] px-4 leading-relaxed text-[13px] font-normal'>
                                    <p>$10.00 - $19.99</p>
                                </div>
                                <div className='flex justify-between py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p>$20.00 - $29.99</p>
                                </div>
                                <div className='flex justify-between py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p>$30.00 - $39.99</p>
                                </div>
                                <div className='flex justify-between py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p>$40.00 - $69.99</p>
                                </div>

                            </div>



                        </details>

                    </div>
                    <div className='w-full sm:w-2/3 lg:w-9/12 '>
                        <h2>main</h2>
                        </div>
                </div>
            </Container>

        </div>
    );
};

export default Product;