import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Link, useNavigate } from "react-router-dom";
import {
  Trash,
} from "lucide-react";
const Basket = () => {
const {
  currency,
  delivery_fee,
  cartItems,
  removeFromCart,
  updateCartQuantity,
  subTotal
} = useContext(ShopContext);
const navigate=useNavigate();
return (
<div className="pt-14">
    <div className="container mx-auto px-4 sm:px-10 lg:px-20">
   <div className="text-2xl mb-3">
      <Title text1="YOUR" text2="CART" />
   </div>
 {cartItems.map((item, index) => (
  <div key={index} className="py-4 border-t border-b border-[#e6e6ea] text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
    <div className="flex gap-6">
      <img src={item.image.url} className="w-16 sm:w-20" />

      <div>
        <p className="text-sm sm:text-lg font-medium">{item.name}</p>
        <div className="flex gap-5 mt-2">
          <p>{item.price}</p>
        </div>
      </div>
    </div>

    <input
      type="number"
      min={1}
      className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 h-auto border-[#e6e6ea]"    onChange={(e) =>
        updateCartQuantity(item.id, Number(e.target.value))
      }
      value={item.quantity}
    />
<Trash  onClick={() => removeFromCart(item.id )}></Trash>
  </div>
))}

   <div className="flex justify-end my-20">
      <div className="w-full sm:w-[450px]">
         <div className="text-2xl">
            <div className="inline-flex gap-2 items-center mb-3">
               <p className="text-gray-500">
                  CART <span className="text-gray-700 font-medium">TOTALS</span>
               </p>
               <span className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></span>
            </div>
         </div>
         <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
               <p>Subtotal</p>
               <p>
                  {currency} {subTotal.toFixed(2)}
               </p>
            </div>
            <hr />
            <div className="flex justify-between">
               <p>Shipping Fee</p>
               <p>
                  {currency} {delivery_fee.toFixed(2)}
               </p>
            </div>
            <hr />
            <div className="flex justify-between">
               <b>Total</b>
               <b>
            {currency} {(delivery_fee + subTotal).toFixed(2)}

               </b>
            </div>
         </div>
         <div className="w-full text-end">
            <button
            className="bg-black disabled:bg-gray-400 text-white text-sm my-8 px-8 py-3"
            disabled={cartItems.length === 0} onClick={()=>navigate("/place-order")}
            >
            PROCEED TO CHECKOUT
            </button>
         </div>
      </div>
   </div>
   </div>
</div>
);
};
export default Basket;