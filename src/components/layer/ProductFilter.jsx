import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ProductFilter = ({ text, cetegorey, color }) => {
    let [show, setShow] = useState(true)

    const handlefilter = filter => {
        const filterItem = products.filter(items => items.category === filter);
        setitem(filterItem);
    }
   
    return (
        <>
            <div onClick={() => setShow(!show)} className='flex justify-between relative mb-[52px]'>
                <h3 className='text-[#262626] text-xl font-bold'>{text}</h3>
                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${show ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
            </div>


            {show && <ul className="mb-[52px]">
                <li onClick={() => handleAllProduct()} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                    <a href="#" className='text-[16px] font-normal text-[#767676]'>all</a>
                </li>
                <li>{
                    cetegorey && <>
                        {cetegorey.map((item, key) => <div key={key} onClick={() => handlefilter(item)} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                            <p className='text-[16px] font-normal text-[#767676]'>{item}</p>
                        </div>)}
                    </>
                }


                </li>

            </ul>}
            


        </>


    );
};

export default ProductFilter;