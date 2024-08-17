import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import Container from '../components/layer/Container';
import { useEffect, useState } from 'react';
import Card from '../components/card/Card'
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Bredcumb from '../components/layer/Bredcumb';
import useProduct from '../hooks/useProduct';
import ProductCard from '../components/card/ProductCard';
import axios from 'axios';
import { BsSearch } from 'react-icons/bs';

const Shop = () => {
    // const [product, loading] = useProduct();
    const [itemsperpage, setitemsperpage] = useState(6)
    const [counts, setCounts] = useState(0)
    const [filter, setFilter] = useState('')
    const numberofPage = Math.ceil(counts / itemsperpage);
    const [currentPage, setcurrentPage] = useState(0)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const pages = [...Array(numberofPage).keys()]
    const [items, setitems] = useState([])
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(true);
    const [open3, setOpen3] = useState(true);
    const [open4, setOpen4] = useState(true);
    // useEffect(() => {
    //     function rounded() {
    //         setRound(true)
    //     }
    //     rounded()
    // }, [])

    useEffect(() => {

        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/product?page=${currentPage}&size=${itemsperpage}&filter=${filter}&sort=${sort}&search=${search}`)
            setitems(data)
        }
        getData()
    }, [currentPage, itemsperpage, filter, sort, search])
    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/productCount?filter=${filter}&search=${search}`
            )
            setCounts(data.count)
        }
        getCount()
    }, [filter, search])

    const handlefilter=(item)=>{
        setFilter(item)
    }
    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        setitemsperpage(value)
        setcurrentPage(0)
    }
    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')

    }


    const handlepre = () => {
        if (currentPage > 0) {
            setcurrentPage(currentPage - 1)
        }
    }
    const handlenext = () => {
        if (currentPage < pages.length - 1) {
            setcurrentPage(currentPage + 1)
        }
    }
    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }
    return (
        <div>
            <Container>
                <Bredcumb></Bredcumb>
                {/* <div className='mt-[93px]'>
                <h2 className='text-[#262626] text-6xl font-bold'>Products</h2>
                <ul className='flex items-center gap-2 mt-3'>
                    <li className='text-[12px] font-normal text-[#767676]'><Link>Home</Link></li>
                    <li><IoIosArrowForward className='text-[12px]' /></li>
                    <li className='text-[12px] font-normal text-[#767676]'> <Link> Products</Link></li>
                </ul>
            </div> */}
                <div className='sm:flex justify-center md:justify-between mt-[130px] gap-4'>
                    {/* sidebar */}
                    <div className='sidebar sm:w-1/3 lg:w-[370px]   py-16 '>
                        <div onClick={() => setOpen1(!open1)} className='flex justify-between relative mt-[52px]'>
                            <h3 className='text-[#262626] text-xl font-bold'>shop by categorey</h3>
                            <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open1 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open1 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                        </div>
                        {open1 &&

                            <div className={` `}>
                                {/* .......................... */}

                                <div>
                                    <select
                                        onChange={e => {
                                            setFilter(e.target.value)
                                            setcurrentPage(0)
                                        }}
                                        value={filter}
                                        name='queryTitle'
                                        id='queryTitle'
                                        className='border p-3 rounded-md bg-gray-100'
                                    >
                                        <option value=''>Filter By Category</option>
                                        <option value='white'>white</option>
                                        <option value='jbl'>jbl</option>
                                        
                                    </select>
                                </div>
                                {/* ............................... */}
                                {items.map(item=><div key={item._id} onClick={()=>handlefilter(item.brand)}  className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p className='text-[16px] font-normal text-[#767676]'>{item.brand}</p>
                                </div>)}
                                <div  className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p className='text-[16px] font-normal text-[#767676]'>categorey 1</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p className='text-[16px] font-normal text-[#767676]'>categorey 2</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p className='text-[16px] font-normal text-[#767676]'>categorey 3</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p className='text-[16px] font-normal text-[#767676]'>categorey 4</p>
                                </div>
                                <div className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <p className='text-[16px] font-normal text-[#767676]'>categorey 5</p>
                                </div>
                            </div>
                        }
                        <div onClick={() => setOpen2(!open2)} className='flex justify-between relative mt-[52px]'>
                            <h3 className='text-[#262626] text-xl font-bold'>Shop by Color</h3>
                            <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open2 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open2 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>

                        </div>
                        {open2 &&
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
                        }
                        <div onClick={() => setOpen3(!open3)} className='flex justify-between relative mt-[52px]'>
                            <h3 className='text-[#262626] text-xl font-bold'>Shop by Brand</h3>
                            <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open3 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open3 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>

                        </div>
                        {open3 &&
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
                        }
                        <div onClick={() => setOpen4(!open4)} className='flex justify-between relative mt-[52px]'>
                            <h3 className='text-[#262626] text-xl font-bold'>Shop by Price</h3>
                            <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open4 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open4 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>

                        </div>
                        {open4 &&
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
                        }



                    </div>
                    {/* main */}
                    <div className='main w-full sm:w-2/3 lg:w-9/12 mb-[207px]'>
                        <div className='filter flex justify-end gap-x-10'>
                            <div className='flex  items-center gap-4'>
                                <p>Sort by:</p>
                                <select onChange={e => {
                            setSort(e.target.value)
                            setcurrentPage(0)
                        }}  value={sort} name="sort" id="sort" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5'>
                                    <option value="featured">featured</option>
                                    <option value="dsc">new</option>
                                    <option value="asc">old</option>

                                </select>
                            </div>
                            <div className='flex  items-center gap-4'>
                                <p>Show:</p>
                                <select value={itemsperpage} onChange={handleItemsPerPage} name="" id="" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5 outline-none'>
                                <option value="3">3</option>
                                    <option value="6">6</option>
                                    <option value="9">9</option>
                                    <option value="12">12</option>
                                    <option value="15">15</option>
                                    <option value="18">18</option>
                                    <option value="21">21</option>

                                </select>
                            </div>
                        </div>
                        <form onSubmit={handleSearch}>
                            <div className="flex">

                                <div className="relative ">
                                    <input
                                        className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600   leading-4"
                                        type='text'
                                        onChange={e => setSearchText(e.target.value)}
                                        value={searchText}
                                        name='search'
                                        placeholder='Enter Product Title'
                                        aria-label='Enter Product Title'

                                    />
                                    <BsSearch className="absolute pointer-events-none top-4 right-5 " />

                                </div>
                                <button className="bg-teal-500  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-teal-400">
                                    Search
                                </button>

                            </div>
                        </form>

                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-[60px]">
                            {items.map(item => <ProductCard key={item._id} item={item}></ProductCard>)}
                        </div>
                        <div className='mt-[53px]'>
                            <div className='flex justify-center md:justify-between items-center flex-col md:flex-row gap-y-8'>
                                <ul className='flex items-center gap-4 '>
                                {
                                        pages.map(page => <button onClick={() => setcurrentPage(page)} key={page} className={currentPage === page ? "inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676] hover:bg-black hover:text-white" : 'mx-6 p-3 border-2'}>{page}</button>)
                                    }
                                    {/* <li className='inline-block py-2 px-4 bg-black text-white'>1</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>2</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>3</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>4</li>
                                    <li className='inline-block py-2 px-4  text-#D8D8D8]'>...</li>
                                    <li className='inline-block py-2 px-4 border border-[#F0F0F0] text-[#767676]'>10</li> */}

                                </ul>
                                <p className='text-sm font-normal text-[#767676]'>Products from 1 to 12 of 80</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    );
};

export default Shop;