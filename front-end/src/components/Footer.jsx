import logo from "../assets/Images/logo1.png";

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <footer className=" bg-slate-100 text-gray-600 body-font">
      <div className="container px-5 py-24">
        <div className="flex flex-wrap md:text-left order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4">
            <a className="flex title-font font-medium text-gray-900">
              <img src={logo} alt="logo" className="h-10 w-40 px-3" />
            </a>
            <p className="mt-2 text-base text-gray-500">We Furry&co came with a vision to make pet parenting hassle free.
              Getting a pet is like getting a child, they need our care as well as time.
              Dogs do speak, but only to those who know how to listen, soo be a better pet
              parent with <span className="text-lime-600 font-bold">FURRY&CO</span>.
            </p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">NEED HELP?</h2>
            <nav className="list-none mb-10 py-3">
              <li className="py-2">
                <a href="" className="text-gray-600 hover:text-gray-800">Terms of Use</a>
              </li>
              <li className="py-2">
                <a href="" className="text-gray-600 hover:text-gray-800">Return & Refund</a>
              </li>
              <li className="py-2">
                <a href="" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
              </li>
              <li className="py-2">
                <a href="" className="text-gray-600 hover:text-gray-800">Order Tracking</a>
              </li>
            </nav>
          </div> 
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">EXPLORE</h2>
            <nav className="list-none mb-10 py-3">
              <li className="py-2">
                <a href="/about" className="text-gray-600 hover:text-gray-800">About us</a>
              </li>
              <li className="py-2">
                <a href=" " className="text-gray-600 hover:text-gray-800">FAQs</a>
              </li>
              <li className="py-2">
                <a href="/contactus" className="text-gray-600 hover:text-gray-800">Contact us</a>
              </li>
              <li className="py-2">
                <a href=" " className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-base mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <form onSubmit={onSubmitHandler} className="relative sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label for="footer-field" className="text-sm text-gray-600">Enter your Email Address</label>
                <input type="email" required id="footer-field" name="footer-field" className="mt-3 w-40 bg-gray-100 bg-opacity-50 border border-black outline-none text-gray-700 py-2 px-3" />
                <button type="submit" className="ml-3 text-black lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex bg-gradient-to-r from-green-500 to-green-800 border-0 py-2 px-6">Submit</button>
              </form> 
            </div> 
          </div>
        </div>
      </div>
      <div className="bg-slate-300">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"> &copy;2024 All Rights Reserved @Furry&Co.</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <h2 className="font-medium my-auto text-gray-900 text-sm">FOLLOW US:</h2>
            <a className="cursor-pointer hover:text-indigo-500 ml-4 text-gray-500"><Facebook /></a>
            <a className="cursor-pointer hover:text-indigo-500 ml-4 text-gray-500"><Instagram /></a>
            <a className="cursor-pointer hover:text-indigo-500 ml-4 text-gray-500"><Youtube /></a>
            <a className="cursor-pointer hover:text-indigo-500 ml-4 text-gray-500"><Twitter /></a>
          </span>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
