import { useEffect,useRef } from "react";
import React, { useState, useContext, } from "react";
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  ChevronDown,
  X
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { fetchCategories } from "../store/categoriesSlice";
import md5 from "md5";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
const categories = [
  { id: 1, name: "Tshirt" },
  { id: 2, name: "Shoes"},
  { id: 3, name: "Jacket"},
  { id: 4, name: "Dress" },
  { id: 0, name: "Accessories"},
];
const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const [shopOpen, setShopOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { setShowSearch, getCartCount ,setCategoryId,setOffset} = useContext(ShopContext);
  const handleLogout = () => {
    dispatch(logout());
  };
  const hash = user?.email
    ? md5(user.email.trim().toLowerCase())
    : "";

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
const dropdownRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShopOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
  const gravatarUrl = user
    ? `https://www.gravatar.com/avatar/${hash}?d=identicon`
    : "";

  return (
    <header className="w-full">
      <div className="bg-[#252B42] text-white xl:text-sm lg:text-xs text-[9px] hidden md:block">
        <div className="mx-[20px] flex justify-between items-center px-6 h-12">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} />
              (225) 555-0118
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} />
              michelle.rivera@example.com
            </span>
          </div>

          <div className="font-semibold">
            Follow Us and get a chance to win 80% off
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold mr-2">Follow Us :</span>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={16} />
            <Twitter size={16} />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-[20px] flex justify-between items-center px-6 h-20">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#252B42]">
              Bandage
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-600 font-medium">
            <Link to="/">Home</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShopOpen(!shopOpen)}
                className="hover:text-[#23A6F0] flex"
              >
                Shop                <ChevronDown size={16} className={`transition mt-[4px] ${shopOpen ? "rotate-180 text-[#23A6F0] " : ""}`} />
              </button>

              {shopOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6
                    bg-white shadow-2xl border
                    px-6 py-3 gap-12 z-50 flex">

                  <div className="flex flex-col">

                    {categories.map((item) => (
                      <Link
                        key={item.id}
                        to={`/shop`}
                        onClick={() => {setCategoryId(item.id); setOffset(0);}}
                        className="block py-1 text-gray-500 hover:text-[#23A6F0]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>


                </div>
              )}
            </div>


            <Link to="/about">About</Link>
            <Link to="/">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/teams">Teams</Link>
          </nav>
          <div className="flex items-center gap-6 text-[#23A6F0] text-[16px]">
            <span className="hidden md:flex items-center gap-3 font-semibold">
              {user ? (
                <>
                  <img
                    src={gravatarUrl}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-[#252B42]">{user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 text-sm"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <User size={18} />
                  <Link to="/login">Login</Link> /
                  <Link to="/register">Register</Link>
                </>
              )}
            </span>

            {location.pathname.startsWith("/shop") && (
              <div className="relative hidden sm:block">
                <Search size={18} onClick={() => setShowSearch(true)} />
              </div>
            )}

            <Link to="/basket" className="relative hidden sm:block">
              <ShoppingCart size={18} />
              <span className="absolute -top-0 -right-3 text-xs">{getCartCount()}</span>
            </Link>


            <div className="relative hidden sm:block">
              <Heart size={18} />
              <span className="absolute -top-0 -right-3 text-xs">1</span>
            </div>


          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="flex md:flex-row flex-col md:hidden px-6 py-4 space-y-4 text-gray-600 font-medium bg-white border-t">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/" onClick={() => setOpen(false)}>Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/teams" onClick={() => setOpen(false)}>Teams</Link>

            <div className="pt-4 border-t flex items-center gap-3 text-[#23A6F0]">
              <User size={18} />
              Login / Register
            </div>
            {location.pathname.startsWith("/shop") && (
              <div className="relative  md:hidden text-[#23A6F0]">
                <Search size={18} onClick={() => setShowSearch(true)} />
              </div>
            )}
            <Link to="/basket" className="flex md:hidden text-[#23A6F0]">
              <ShoppingCart size={18} />
              <span className=" text-xs ml-3">{getCartCount()}</span>
            </Link>
            <div className="flex md:hidden text-[#23A6F0]">
              <Heart size={18} />
              <span className="text-xs ml-3">1</span>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={gravatarUrl}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
