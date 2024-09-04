import Container from '../components/layer/Container';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaThList } from 'react-icons/fa';
import Bredcumb from '../components/layer/Bredcumb';
import { IoGrid } from 'react-icons/io5';
import useProducts from '../hooks/useProducts';
import { Pagination } from 'swiper/modules';
import PaginatedItems from '../components/PaginatedItems';
import ProductFilter from '../components/layer/ProductFilter';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts/postsSlice';


const Shop = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, isError, error } = useSelector((state) => state.posts)
    console.log(posts);

    const [products, loading, refetch] = useProducts()
    // const [items, setitems] = useState([])
    const [item, setitem] = useState(products)
    const [cetegorey, setCategorey] = useState([])
    const [activeMulti,setActiveMulti]= useState('')
    const [brand, setBrand] = useState([])
    const [number, setNumber] = useState(12)
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(true)
    const [open3, setOpen3] = useState(true)
    const [open4, setOpen4] = useState(true);

    // useEffect(() => {
    //     fetch('FakeData.js')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data)

    //         })
    // }, [])

    useEffect(() => {
        setCategorey([... new Set(products.map(item => item.category))])

    }, [products])
    useEffect(() => {
        setBrand([... new Set(products.map(item => item.brand))])

    }, [products])

    const handlefilter = filter => {
        const filterItem = products.filter(items => items.category === filter);
        setitem(filterItem);
    }
    const handlebrandfilter = filter => {
        const filterItem = products.filter(items => items.brand === filter);
        setitem(filterItem);
    }
    const handleAllProduct = () => {
        setitem(products)
    }
    const selectNumber = (element) => {
        let numberConverter = Number(element.target.value)
        setNumber(numberConverter)

    }
const handelActive = ()=>{
    setActiveMulti("active")
}

    // if (loading ) return <p>loadding.................</p>
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    let content;
    if (isLoading) {
        content = <h1>loading............</h1>
    }
    if (!isLoading && isError) {
        content = <h1> {error}</h1>
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>NO POSTS FOUND</h1>
    }
    if (!isLoading && !isError && posts.length > 0) {
        content = 
          <PaginatedItems item={posts} itemsPerPage={number}></PaginatedItems>
          

    }

    return (
        <div>
            <Container>
                <Bredcumb></Bredcumb>

                <div className='sm:flex justify-center md:justify-between mt-[130px] gap-10'>
                    {/* sidebar */}
                    <div className='sidebar sm:w-1/3 lg:w-[370px]'>
                        {/* <ProductFilter cetegorey={cetegorey} text='shop by categorey'></ProductFilter> */}
                        {/* <ProductFilter cetegorey={brand} text='Shop by Brand'></ProductFilter> */}

                        {/* cetegory item  */}
                        <div>
                            <div onClick={() => setOpen2(!open2)} className='flex justify-between relative mb-[52px]'>
                                <h3 className='text-[#262626] text-xl font-bold'>shop by categorey</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open2 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open2 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                            </div>
                            {open2 && <ul className="mb-[52px]">
                                <li onClick={() => handleAllProduct()} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <Link className='text-[16px] font-normal text-[#767676]'>all</Link>
                                </li>
                                <li>
                                    {cetegorey.map((item, key) => <div key={key} onClick={() => handlefilter(item)} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <p className='text-[16px] font-normal text-[#767676]'>{item}</p>
                                    </div>)}
                                </li>

                            </ul>}
                        </div>

                        {/* brand  */}
                        <div>
                            <div onClick={() => setOpen3(!open3)} className='flex justify-between relative mb-[52px]'>
                                <h3 className='text-[#262626] text-xl font-bold'>Shop by Brand</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open3 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open3 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>
                            </div>
                            {open3 && <ul className="mb-[52px]">
                                <li onClick={() => handleAllProduct()} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                    <Link href="#" className='text-[16px] font-normal text-[#767676]'>all</Link>
                                </li>
                                <li>
                                    {brand.map((item, key) => <div key={key} onClick={() => handlebrandfilter(item)} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <p className='text-[16px] font-normal text-[#767676]'>{item}</p>
                                    </div>)}
                                </li>

                            </ul>}
                        </div>

                        {/* color */}
                        <div>
                            <div onClick={() => setOpen1(!open1)} className='flex justify-between relative mt-[52px]'>
                                <h3 className='text-[#262626] text-xl font-bold'>Shop by color</h3>
                                <div><FaPlus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open1 ? "opacity-0 rotate-90" : "opacity-100"}`}></FaPlus><FaMinus className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-150 ${open1 ? "opacity-100 " : "opacity-0 rotate-90"}`}></FaMinus></div>

                            </div>
                            {open1 &&
                                <ul className="mb-[52px]">
                                    <li onClick={() => handleAllProduct()} className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <a href="#" className='text-[16px] font-normal text-[#767676]'>all</a>
                                    </li>
                                    <li className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <span className='w-[11px] h-[11px] rounded-full bg-black'></span> <p className='text-[16px] font-normal text-[#767676]'>Black</p>
                                    </li>

                                    <li className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <span className='w-[11px] h-[11px] rounded-full bg-[#FF8686]'></span> <p className='text-[16px] font-normal text-[#767676]'>Red</p>
                                    </li>
                                    <li className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <span className='w-[11px] h-[11px] rounded-full bg-[#7ed321]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 3</p>
                                    </li>
                                    <li className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <span className='w-[11px] h-[11px] rounded-full bg-[#B6B6B6]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 4</p>
                                    </li>
                                    <li className='flex justify-start gap-x-[10px] items-center py-4 px-4 border-b border-b-[#F0F0F0] leading-relaxed text-[13px] font-normal'>
                                        <span className='w-[11px] h-[11px] rounded-full bg-[#15CBA5]'></span> <p className='text-[16px] font-normal text-[#767676]'>Color 5</p>
                                    </li>

                                </ul>}
                        </div>


                        {/* Price   */}
                        <div>
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




                    </div>
                    {/* main */}
                    <div className='main w-full sm:w-2/3 lg:w-10/12 mb-[207px] '>
                        <div className='flex justify-between items-center'>
                            <div className="icon flex lg:gap-x-5 gap-x-2">

                                <div onClick={()=>setActiveMulti('')} className={`${activeMulti == "active"?"":"bg-[#262626] text-[#fff] "} text-[#737373] border-[#F0F0F0] lg:w-9 w-7  lg:h-9 h-7 border  flex justify-center items-center  hover:bg-[#262626] hover:text-[#fff] cursor-pointer transition-all duration-300`}>
                                <IoGrid /> 
                                </div>

                                <div onClick={handelActive} className={`${activeMulti == "active" ?"bg-[#262626] text-[#fff]":""} lg:w-9 w-7  lg:h-9 h-7 border border-[#F0F0F0] flex justify-center items-center text-[#737373] hover:bg-[#262626] hover:text-[#fff] cursor-pointer transition-all duration-300`}>
                                <FaThList /> 
                                </div>

                            </div>
                            <div className='filter flex justify-end gap-x-10'>
                                <div className='flex  items-center gap-4'>
                                    <p>Sort by:</p>
                                    <select
                                        // onChange={e => {
                                        //     setSort(e.target.value)
                                        //     setcurrentPage(0)
                                        // }}
                                        //  value={sort} 
                                        name="sort" id="sort" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5'>

                                        <option value="dsc">new</option>
                                        <option value="asc">old</option>

                                    </select>
                                </div>
                                <div className='flex  items-center gap-4'>
                                    <p>Show:</p>
                                    <select
                                        onChange={selectNumber}

                                        name="" id="" className='text-[#737373] text-[16px] font-normal border border-[#e8e8e8] py-1 px-5 outline-none'>
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
                        </div>

                        {/* <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6  mt-[60px]"> */}
                        <div className={`${activeMulti == "active"? '': 'flex flex-wrap justify-between gap-16'} mt-[60px]`}>
                            {/* <Pagination itemsPerPage={3}/> */}
                            {content}
                        </div>


                    </div>
                </div>

            </Container>

        </div>
    );
};

export default Shop;