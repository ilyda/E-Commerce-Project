import { Link } from 'react-router-dom'
import React from 'react'

const ProductItem = ({id, image, name, second_name, price, discounted}) => {
  return (
    <Link 
      className="flex flex-col items-center group transition-all duration-300 w-full h-[615px] md:h-auto" 
     to={`/product/${id}`}
    >
      <div className="w-full  md:max-h-auto md:max-w-[400px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full lg:object-cover object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center px-6 py-6 w-full space-y-2.5 flex-grow">
        <h5 className="text-[#252B42] text-base font-bold">
          {name}
        </h5>
        <p className="text-[#737373] text-sm font-bold">
          {second_name}
        </p>
        <div className="flex items-center gap-1.5 pt-1">
          <span className="text-[#BDBDBD] font-bold text-base line-through">
            ${price}
          </span>
          <span className="text-[#23856D] font-bold text-base">
            ${discounted}
          </span>
        </div>
      
        <div className="flex items-center justify-center gap-1.5 pt-2">
          <span className="inline-block w-4 h-4 rounded-full bg-[#23A6F0] cursor-pointer" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#23856D] cursor-pointer" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#E77C40] cursor-pointer" />
          <span className="inline-block w-4 h-4 rounded-full bg-[#252B42] cursor-pointer" />
        </div>
      </div>
    </Link>
  )
}

export default ProductItem