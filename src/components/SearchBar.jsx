/* eslint-disable react-hooks/set-state-in-effect */
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';
import {
  Search,
  X,
} from "lucide-react";
const SearchBar = () => {
    const{ search,showSearch,setShowSearch,setSearch}=useContext(ShopContext);
    const location=useLocation()
    const [visible,setVisible]=useState(false)
    useEffect(()=>{
      if(location.pathname.includes("shop")){
        setVisible(true)
      }
      else{
        setVisible(false)
      }
    },[location])
  return showSearch && visible? (
    <div className='border-t border-b bg-gray-50 text-center border-[#e6e6ea]'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
             <Search size={18} />
      </div>
          <X size={18}   onClick={() => {
    setShowSearch(false);
    setSearch("");
  }} className="inline w-3 cursor-pointer"/>
    </div>
  ):null
}

export default SearchBar
