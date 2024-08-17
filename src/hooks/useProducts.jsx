import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = () => {
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

    return [items,handleSearch,handlenext,handlepre,handleReset,handleItemsPerPage]
};

export default useProducts;