import React from 'react'
import { assets } from '../assets/assets'
import { Star, Heart, ShoppingCart, Eye, ChevronRight } from 'lucide-react';
const Information = () => {
  return (<>
  <div className="mb-12 mt-8">
   <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-center gap-12 text-[#737373] font-bold text-sm"> <span className="pb-4 cursor-pointer hover:text-[#252B42] transition"> Description </span> <span className="pb-4 cursor-pointer hover:text-[#252B42] transition"> Additional Information </span> <span className="pb-4 cursor-pointer hover:text-[#252B42] transition"> Reviews (0) </span> </div>
   </div>
</div>
<div className="grid md:grid-cols-3 gap-12 py-8 px-8 mb-12">
   <img src={assets.detail_card} className="rounded-xl shadow-sm w-full object-cover" /> 
   <div>
      <h3 className="text-[#252B42] font-bold text-2xl mb-6"> the quick fox jumps over </h3>
      <p className="text-[#737373] text-sm leading-loose mb-6"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. </p>
      <p className="text-[#737373] text-sm leading-loose mb-6"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. </p>
      <p className="text-[#737373] text-sm leading-loose mb-6"> Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. </p>
   </div>
   <div className="space-y-6">
      <h3 className="text-[#252B42] font-bold text-2xl"> the quick fox jumps over </h3>
      <ul className="space-y-3 text-[#737373] font-bold text-sm">
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
      </ul>
      <h3 className="text-[#252B42] font-bold text-2xl"> the quick fox jumps over </h3>
      <ul className="space-y-3 text-[#737373] font-bold text-sm">
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
         <li className="flex items-center gap-2">
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            the quick fox jumps over the lazy dog 
         </li>
      </ul>
   </div>
</div></>
  )
}

export default Information
