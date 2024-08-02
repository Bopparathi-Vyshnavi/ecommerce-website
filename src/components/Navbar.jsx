import { useState } from "react";
import logo from "../assets/Images/logo1.png";
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom"



const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

 
  return (
    <nav className="bg-white sticky top-0 z-50 py-3 border-b border-neutrel-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-30 mr-2" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <Link to="/" className={({isActive}) => isActive ? "active_link" : ""}>Home</Link>
            </li>
            <li>
              <Link to="/shop" className={({isActive}) => isActive ? "active_link" : ""}>Shop</Link>
            </li>
            <li>
              <Link to="/about" className={({isActive}) => isActive ? "text-orange-700" : ""}>About</Link>
            </li>
            <li>
              <Link to="/contactus" className={({isActive}) => isActive ? "text-orange-700" : ""}>Contact Us</Link>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Search />
            <Link to='/cart'><ShoppingCart /></Link>
            <Link to='/login'><User /></Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="bg-white fixed right-0 z-20  w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
            <div className="flex space-x-6 py-2">
              <Search />
              <Link to='/cart'><ShoppingCart /></Link>
              <Link to='/login'><User /></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
