import React from 'react';

import { assets } from '../assets/assets';
import BreadCrumb from './BreadCrumb';
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const categories = [
  { id: 1, name: "Tshirt", image: assets.card_item },
  { id: 2, name: "Shoes", image: assets.card_item1 },
  { id: 3, name: "Jacket", image: assets.card_item2 },
  { id: 4, name: "Dress", image: assets.card_item3 },
  { id: 0, name: "Accessories", image: assets.card_item4 },
];



const BreadCrumbSection = () => {
const { setCategoryId, setOffset, categoryId } = useContext(ShopContext);
  return (
<>
    <BreadCrumb></BreadCrumb>
    <div className="w-full bg-[#FAFAFA]">

      <div className="w-full pb-12">

        <div className="mx-[20px] px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {categories.map((item) => (

              <div key={item.id}  onClick={() => {setCategoryId(item.id); setOffset(0);}}  
                   className={`relative group cursor-pointer border-2 
                    ${categoryId === item.id ? "border-[#23A6F0]" : "border-transparent"}`}>
                      
                <div className={`w-full h-full`}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="object-cover w-full h-full  opacity-90" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 group-hover:bg-black/20 transition-all">

                  <h2 className="text-white font-bold text-base tracking-widest drop-shadow-md">

                    {item.name}

                  </h2>

                  <p className="text-white text-xs mt-2 font-medium">

                    {item.count} Items

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
</>
  );

};



export default BreadCrumbSection;