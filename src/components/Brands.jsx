import React from "react";
import { assets } from "../assets/assets";

const brands = [
  assets.fa_brands_1,
  assets.fa_brands_2,
  assets.fa_brands_3,
  assets.fa_brands_4,
  assets.fa_brands_5,
  assets.fa_brands_6,
];

const Brands = () => {
  return (
    <section className="w-full border-y border-[#FAFAFA] bg-[#FAFAFA]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap md:flex-row flex-col items-center justify-between gap-10 md:gap-14">
          {brands.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="brand"
              className="h-8 md:h-10 object-contain grayscale opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
