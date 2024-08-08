import cimg from "../assets/Images/banner-cart.jpg";
import cimg1 from "../assets/Images/food p3.webp";
import cimg2 from "../assets/Images/food p5.jpg";
import cimg3 from "../assets/Images/food p9.jpg";

import { CircleX } from 'lucide-react';

const Cart = () => {
  return (
    <>
    <div>
      <img src={cimg} className="w-full h-96" />
    </div>
    <div className="my-20 overflow-x-auto">
      <table className=" max-w-7xl mx-auto table-fixed border-collapse whitespace-nowrap">
        <thead className="border border-gray-300 border-l-0 border-r-0">
          <tr>
            <th className="w-28 text-center text-lg font-bold p-10 ">REMOVE</th>
            <th className="w-40 text-center text-lg font-bold p-10 ">IMAGE</th>
            <th className="w-64 text-center text-lg font-bold p-10 ">PRODUCT</th>
            <th className="w-40 text-center text-lg font-bold p-10 ">PRICE</th>
            <th className="w-40 text-center text-lg font-bold p-10 ">QUANTITY</th>
            <th className="w-40 text-center text-lg font-bold p-10 ">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-14"><a href="#"><CircleX /></a></td>
            <td className="pt-5"><img src={cimg1} className="w-20 mx-auto" /></td>
            <td className="text-center">Pedigree for Adult</td>
            <td className="text-center">₹ 1,207</td>
            <td className="px-16"><input type="number" value="1" className="outline-none border border-black w-10"/></td>
            <td className="text-center">₹ 1,207</td>
          </tr>
          <tr>
            <td className="px-14"><a href="#"><CircleX /></a></td>
            <td className="pt-5"><img src={cimg2} className="w-20 mx-auto" /></td>
            <td className="text-center">Feeding Bowl</td>
            <td className=" text-center">₹ 199</td>
            <td className="px-16"><input type="number" value="1" className="outline-none border border-black w-10"/></td>
            <td className="text-center">₹ 199</td>
          </tr>
          <tr>
            <td className="px-14"><a href="#"><CircleX /></a></td>
            <td className="pt-5"><img src={cimg3} className="w-20 mx-auto" /></td>
            <td className="text-center">Body Belt</td>
            <td className="text-center">₹ 700</td>
            <td className="px-16"><input type="number" value="1" className="outline-none border border-black w-10"/></td>
            <td className="text-center">₹ 700</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="p-3 sm:flex sm:flex-wrap sm:content-center lg:flex lg:flex-wrap lg:content-between max-w-7xl mx-auto">
      <div className="lg:w-1/2 mb-8">
        <h3 className="pb-4 text-lg font-semibold">Apply Coupon</h3>
        <div>
          <input type="text" placeholder="Enter your coupon" className="px-3 py-3 outline-none w-2/3 border border-black" />
          <a href="" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md">
            Apply
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 border border-gray-300 p-7">
        <h3 className="pb-4 text-lg font-semibold">Cart Total</h3>
        <table className="border-collapse w-full mb-5">
          <tr>
            <td className="w-1/2 border border-gray-300 text-sm p-3">Cart Subtotal</td>
            <td className="w-1/2 border border-gray-300 text-sm p-3">₹ 2,106</td>
          </tr>
          <tr>
            <td className="w-1/2 border border-gray-300 text-sm p-3">Shipping</td>
            <td className="w-1/2 border border-gray-300 text-sm p-3">Free</td>
          </tr>
          <tr>
            <td className="w-1/2 border border-gray-300 text-sm p-3"><strong>Total</strong></td>
            <td className="w-1/2 border border-gray-300 text-sm p-3"><strong>₹ 2,106</strong></td>
          </tr>
        </table>
        <a href="" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 rounded-md">Proceed to Checkout</a>
      </div>
    </div> 
    </>
  )
}

export default Cart
