
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import Container from '../components/layer/Container';
import { useEffect, useState } from 'react';
import Card from '../components/card/Card'
import { Link } from 'react-router-dom';
const Product = () => {
    const [round, setRound] = useState(false)
    useEffect(() => {
        function rounded() {
            setRound(true)
        }
        rounded()
    }, [])
    return (
        <div>
            <Container>
                <div className='mt-[93px]'>
                    <h2 className='text-[#262626] text-6xl font-bold'>Products</h2>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-[12px] font-normal text-[#767676]'><Link>Home</Link></li>
                        <li><IoIosArrowForward className='text-[12px]' /></li>
                        <li className='text-[12px] font-normal text-[#767676]'> <Link> Products</Link></li>
                    </ul>
                </div>
                <div className='sm:flex justify-center md:justify-between mt-[130px] gap-4'>
                    {/* sidebar */}
                    <div className='sidebar sm:w-1/3 lg:w-3/12  '>

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
                    {/* main */}
                    <div className='main w-full sm:w-2/3 lg:w-9/12 '>
                        <div className='filter flex justify-end gap-x-10'>
                            <div className='flex  items-center gap-4'>
                                <p>Sort by:</p>
                                <select name="" id="" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5'>
                                    <option value="featured">featured</option>
                                    <option value="new">new</option>
                                    <option value="old">old</option>

                                </select>
                            </div>
                            <div className='flex  items-center gap-4'>
                                <p>Show:</p>
                                <select name="" id="" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5 outline-none'>
                                    <option value="36" >36</option>
                                    <option value="16">16</option>
                                    <option value="8">8</option>

                                </select>
                            </div>
                        </div>
                        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-[60px]">
                            <Card></Card>
                        </div>
                        <div className='mt-[53px]'>
                            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row gap-y-8'>
                                <ul className='flex items-center gap-4 '>
                                    <li className='inline-block py-2 px-4 bg-black text-white'>1</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>2</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>3</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>4</li>
                                    <li className='inline-block py-2 px-4  text-#D8D8D8]'>...</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>10</li>

                                </ul>
                                <p className='text-sm font-normal text-[#767676]'>Products from 1 to 12 of 80</p>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826.084438858369!2d90.38142416210259!3d23.741356493429844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1720523410960!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Container>

        </div>
    );
};

export default Product;