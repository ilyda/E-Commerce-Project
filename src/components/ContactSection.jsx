import React from 'react'
import { assets } from '../assets/assets'

const ContactSection = () => {
  return (
    <section className="relative w-full bg-[#2A7CC7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 min-h-[634px]">
        <div className="flex flex-col justify-center text-white py-20 text-center md:text-left ">
          <span className="text-sm font-bold uppercase tracking-wide mb-4">
            Work With Us
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Now Let’s grow Yours
          </h2>

          <p className="text-sm md:text-base text-white/90 max-w-md mb-8">
            The gradual accumulation of information about atomic and
            small-scale behavior during the first quarter of the 20th
          </p>

          <button className="w-fit border border-white px-8 py-3 rounded-md font-bold text-sm hover:bg-white hover:text-[#2A7CC7] transition mx-auto md:mx-0">
            Button
          </button>
        </div>

      </div>
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[45%]">
        <img
          src={assets.contact}
          alt="Contact"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}

export default ContactSection
