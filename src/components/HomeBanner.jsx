import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HomeBanner = () => {
  return (
 <section className="container mx-auto px-6 flex flex-col-reverse md:grid md:grid-cols-12 gap-8 my-10  text-center justify-center items-center  md:items-start md:text-left md:justify-start">
      <div className="md:col-span-6 col-1">
        <img
          src={assets.home_banner}
          alt="Couple"
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div className="md:col-span-6 col-1 flex flex-col justify-center md:h-full">
        <p className="text-sm tracking-widest text-gray-400 mb-4">
          SUMMER 2020
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Part of the Neural<br />Universe
        </h1>

        <p className="text-gray-500 mb-8 max-w-md">
          We know how large objects will act, but things on a small scale.
        </p>

        <div className="flex gap-4 flex flex-col md:flex-row items-center justify-center md:justify-start">
          <Link to="/" className="bg-green-500 text-white px-6 py-3 rounded-md md:text[14px] md:py-4 font-semibold hover:bg-green-600 transition text-xs  flex min-w-[151px]  justify-center">BUY NOW</Link>
          <Link to="/" className="border border-green-500 text-green-500 px-6 py-3 md:py-4 md:text[14px] rounded-md font-semibold hover:bg-green-50 transition text-xs  flex min-w-[151px]  justify-center">READ MORE</Link>
        </div>
      </div>

  </section>
  )
}

export default HomeBanner
