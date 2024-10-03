import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const { currency, getCartAmount } = useContext(ShopContext);


  return (
   
      
    <div className="lg:mx-auto mx-3 my-5 lg:w-1/2  p-7">
      <h3 className="pb-4 text-lg font-semibold">Cart Total</h3>
      <table className="border-collapse w-full mb-3 ">
        <tr>
          <td className="w-1/2 border border-gray-300 text-sm p-3">
            Cart Subtotal
          </td>
          <td className="w-1/2 border border-gray-300 text-sm p-3">
            <p>{currency} {getCartAmount()}.00</p>
          </td>
        </tr>
        <tr>
          <td className="w-1/2 border border-gray-300 text-sm p-3">
            Shipping
          </td>
          <td className="w-1/2 border border-gray-300 text-sm p-3">
            Free
          </td>
        </tr>
        <tr>
          <td className="w-1/2 border border-gray-300 text-sm p-3">
            <strong>Total</strong>
          </td>
          <td className="w-1/2 border border-gray-300 text-sm p-3">
            <strong>{currency} {getCartAmount()}.00</strong>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default CartTotal
