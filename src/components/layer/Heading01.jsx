import { Link } from "react-router-dom";

const HeadingLi = ({ taxt }) => {
  return(
    <li className="pb-8   before:-bottom-[6px] before:bg-black  before:content-[''] before:opacity-0 before:h-3 before:w-3 before:rounded-full  before:absolute  before:top-auto before:left-1/2 before:-translate-x-1/2 before:right-auto  hover:before:opacity-100  hover:after:w-full after:-bottom-[2px] after:bg-black after:content-['']  after:h-[3px] after:w-0  after:absolute relative after:top-auto after:left-0 after:right-auto after:transition-all  after:duration-700 before:transition-all  before:duration-700"><Link href="#tab-featured-0" data-toggle="tab" aria-expanded="true">{taxt}</Link></li>
  ) 
}

const Heading01 = () => {
    return (
        <div className="flex justify-between border-b border-slate-200 my-6 group ">
            <div className="">
                <h3 className="pb-6 text-[#222] inline-block font-normal text-2xl group-hover:after:w-full after:-bottom-[2px] after:bg-[#fdd311] after:content-['']  after:h-[3px] after:w-[100px]  after:absolute relative after:top-auto after:left-0 after:right-auto after:transition-all  after:duration-700">Trending Products</h3>
            </div>
            <div id="TTPTab-0" className="tab-box-heading">
                <ul className="flex gap-6">
                    <HeadingLi taxt='Featured'></HeadingLi>
                    <HeadingLi taxt='Latest'></HeadingLi>
                    <HeadingLi taxt='Special'></HeadingLi>
                  
                </ul>
            </div>
        </div>
    );
};

export default Heading01;