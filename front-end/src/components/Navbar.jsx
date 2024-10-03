import { useContext, useEffect, useState } from "react";
import logo from "../assets/Images/logo1.png";
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";





const Navbar = () => {
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  
  

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
 

  return (
    <nav className="bg-slate-300 sticky top-0 z-50 py-3 border-b border-neutrel-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-30 mr-2" />
          </div>
          <ul className="hidden sm:flex  gap-5 text-sm text-gray-800 font-medium">
            <NavLink to="/" className='flex flex-col items-center gap-1'>
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/shop" className='flex flex-col items-center gap-1'>
              <p>SHOP</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/about" className='flex flex-col items-center gap-1'>
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            <NavLink to="/contactus" className='flex flex-col items-center gap-1'>
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
          </ul>
          <div className="flex items-center gap-6">
            <Link to='/shop'>
              <Search onClick={() => setShowSearch(true)} className="cursor-pointer" />
            </Link>
            
            <Link to='/login' className=''>
              <div className="group relative">
                <User />
                {/* <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-300 text-gray-500 rounded">
                    <p className="cursor-pointer hover:text-slate-900">My Profile</p>
                    <p className="cursor-pointer hover:text-slate-900">Orders</p>
                    <p className="cursor-pointer hover:text-slate-900">Logout</p>
                  </div>
                </div> */}
              </div>
            </Link> 
            <Link to='/cart' className="relative">
              <ShoppingCart />
              <strong className="absolute right-[-12px] top-[-10px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</strong>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="bg-slate-300 absolute right-0 w-full overflow-hidden transition-all">
          <ul className="flex flex-col">
            <NavLink onClick={()=>setMobileDrawerOpen(false)} to="/" className='py-2 pl-6 border'>
              HOME
            </NavLink>
            <NavLink onClick={()=>setMobileDrawerOpen(false)} to="/shop" className='py-2 pl-6 border'>
              SHOP
            </NavLink>
            <NavLink onClick={()=>setMobileDrawerOpen(false)} to="/about" className='py-2 pl-6 border'>
              ABOUT
            </NavLink>
            <NavLink onClick={()=>setMobileDrawerOpen(false)} to="/contactus" className='py-2 pl-6 border'>
              CONTACT
            </NavLink>
          </ul> 
        </div>
      )}  
    </nav>
  )
}

export default Navbar
