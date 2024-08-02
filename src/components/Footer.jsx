import logo from "../assets/Images/logo1.png";

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-300 mt-5">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="logo" className="h-10 w-40 px-3" />
            <p className="px-3 mt-3">We Furry&co came with a vision to make pet parenting hassle free.
              Getting a pet is like getting a child, they need our care as well as time.
              Dogs do speak, but only to those who know how to listen, soo be a better pet
              parent with <span className="text-lime-600 font-bold">FURRY&CO</span>.
            </p>
          </div>
          <div className="px-5">
            <h1 className="my-5 text-cyan-500">NEED HELP?</h1>
            <ul>
              <li className="py-2 hover:text-red-400">
                <a href=" ">Terms of Use</a>
              </li>
              <li className="py-2 hover:text-red-400">
                <a href=" ">Return & Refund</a>
              </li>
              <li className="py-2 hover:text-red-400">
                <a href=" ">Privacy Policy</a>
              </li>
              <li className="py-2 hover:text-red-400">
                <a href=" ">Order Tracking</a>
              </li>
            </ul>
          </div>
          <div className="px-5">
            <h1 className="my-5 text-cyan-500">EXPLORE</h1>
            <ul>
              <li className="py-2 hover:text-red-400">
                <a href=" ">About us</a>
              </li>
              <li className="py-2 hover:text-red-400">
                <a href=" ">FAQs</a>
              </li>
              <li className="py-2 hover:text-red-400">
                <a href=" ">Contact us</a>
              </li>
              <li className="py-2 hover:text-red-400">
                <a href=" ">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mx-5 my-5 text-cyan-500">FOLLOW US:</h1>
            <div className="flex px-5 py-5 gap-5 text-blue-700">
              <Facebook />
              <Instagram />
              <Youtube />
              <Twitter />
            </div>
            <h1 className="mx-3 my-5 text-cyan-500">SIGN UP FOR OUR NEWSLETTER:</h1>
            <form className="flex mt-3">
              <input type="email" placeholder="enter your email address" className="bg-slate-200 py-3 px-4 mx-3 outline-none" />
              <a href="" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md">
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
      <p className="px-8 py-2"> &copy; Copyright 2024 @Furry&Co. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
