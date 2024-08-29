import { useState } from 'react';
import ProductCard from './card/ProductCard'
import ReactPaginate from 'react-paginate';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useProducts from '../hooks/useProducts';




function Items({ currentItems }) {
    

    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div key={item.id}>
                        <ProductCard item={item}></ProductCard>
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage ,item}) {
    const [products, loading, refetch] = useProducts()
    // const { data: products = [], isPending: loading, refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`https://dummyjson.com/products`)
    //         return data.products
    //     },
    // })
// if(item.length < 0){
//     const items = products
//     return items
// }else{
//     const items = item; 
// }
const items = item.length? item:products; 

    const [itemOffset, setItemOffset] = useState(0);


    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className='w-full flex justify-between items-center mt-[50px] flex-wrap gap-y-4'>
                <ReactPaginate
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}

                    nextClassName="hidden"
                    previousClassName="hidden"


                    renderOnZeroPageCount={null}

                    containerClassName="pagination flex gap-x-4"

                    pageClassName="page-item text-[#767676] lg:w-9 w-5 lg:h-9 h-5 border border-[#F0F0F0] hover:bg-[#262626] hover:text-white"

                    pageLinkClassName="page-link w-full h-full flex justify-center items-center  text-sm font-normal"

                    activeClassName="active text-white bg-[#262626]"
                />

                <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>Products from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</p>
            </div>
        </>
    );
}
export default PaginatedItems