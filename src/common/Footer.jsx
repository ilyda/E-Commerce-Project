import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white font-sans text-[#737373]">
      <div className="py-10">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-bold text-[#252B42]">Bandage</h2>
          <div className="flex gap-5 text-[#23A6F0]">
            <a href="#" className="hover:text-blue-800 transition-colors">
              <Facebook size={24} fill="currentColor" strokeWidth={0} />
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter size={24} fill="currentColor" strokeWidth={0} />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-[#E6E6E6] container mx-auto" />
      <div className="container mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Company Info</h5>
          <ul className="space-y-3 font-bold text-sm">
            <li><a href="#" className="hover:text-[#23A6F0]">About Us</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Carrier</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">We are hiring</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Legal</h5>
          <ul className="space-y-3 font-bold text-sm">
            <li><a href="#" className="hover:text-[#23A6F0]">About Us</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Carrier</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">We are hiring</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Features</h5>
          <ul className="space-y-3 font-bold text-sm">
            <li><a href="#" className="hover:text-[#23A6F0]">Business Marketing</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">User Analytic</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Live Chat</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Unlimited Support</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#252B42] font-bold mb-5">Resources</h5>
          <ul className="space-y-3 font-bold text-sm">
            <li><a href="#" className="hover:text-[#23A6F0]">IOS & Android</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">Customers</a></li>
            <li><a href="#" className="hover:text-[#23A6F0]">API</a></li>
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h5 className="text-[#252B42] font-bold mb-5">Get In Touch</h5>
          <div className="flex flex-col gap-2">
            <div className="flex shadow-sm">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-[#F9F9F9] border border-[#E6E6E6] rounded-l-md px-4 py-4 w-full focus:outline-none focus:border-[#23A6F0] transition-colors"
              />
              <button className="bg-[#23A6F0] text-white px-6 py-4 rounded-r-md hover:bg-[#1a85c2] transition-colors text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#737373] mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* Alt Kısım: Copyright */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-6 md:px-10">
          <p className="text-sm font-bold text-[#737373] text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;