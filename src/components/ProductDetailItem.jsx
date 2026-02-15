import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const ProductDetailItem = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {
    name,
    price,
    description,
    image,
    images = [],
  } = product;

  const galleryImages = images.length ? images : [image];
  return (
    <div className="bg-[#FAFAFA]">
      <div className="px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              navigation
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed
                    ? thumbsSwiper
                    : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="aspect-square mb-4 rounded-xl overflow-hidden"
            >
              {galleryImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img.url}
                    alt={name}
                    className="w-full h-full object-cover object-top"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={15}
              slidesPerView={4}
              freeMode
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="h-24 mb-[30px]"
            >
              {images.map((img, i) => (
                <SwiperSlide
                  key={i}
                  className="cursor-pointer opacity-50 swiper-slide-thumb-active:opacity-100"
                >
                  <img
                    src={img.url}
                    alt=""
                    className="w-full h-full object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="pt-8">
            <h2 className="text-xl text-[#252B42] mb-3 font-medium">
              {name}
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <span className="text-[#737373] text-sm font-bold">
                {product.rating} Reviews
              </span>
            </div>

            <div className="text-2xl font-bold text-[#252B42] mt-6">
              ${price?.toFixed(2)}
            </div>
            <p className="text-sm font-bold mb-6 text-[#737373]"> Availability : <span className="text-[#23A6F0] ml-1">In Stock</span> </p>

            <p className="text-[#858585] text-sm leading-relaxed mb-8">
              {description}
            </p>
            <hr className="mb-8 border-[#BDBDBD]" /> <div className="flex gap-3 mb-10"> {["#23A6F0", "#23856D", "#E77C40", "#252B42"].map( (color, i) => ( <div key={i} className="w-8 h-8 rounded-full cursor-pointer hover:ring-2 ring-offset-2 ring-gray-300" style={{ backgroundColor: color }} /> ) )} </div>
            <div className="flex items-center gap-4"> <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold text-sm hover:shadow-lg transition"     onClick={() => addToCart(product.id || product._id)}> Select Options </button> <div className="flex gap-3"> {[Heart, ShoppingCart, Eye].map((Icon, i) => ( <button key={i} onClick={() => addToCart(product.id)} className="p-2 border rounded-full bg-white hover:bg-gray-50 transition border-[#BDBDBD]" > <Icon size={20} /> </button> ))} </div> </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailItem;
