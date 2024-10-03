import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();
     
    useEffect(() => {
        if(location.pathname.includes('shop')) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t boder-b bg-gray-100 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search' />
            <Search />
        </div>
        <X onClick={() => setShowSearch(false)} className='inline cursor-pointer' />
    </div>
  ) : null
}

export default SearchBar
