import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import pay1 from '../assets/Images/payment-1.webp'
import pay2 from '../assets/Images/payment-2.png'
import { ShopContext } from '../context/ShopContext'

const Checkout = () => {

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-4 lg:pt-5 pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 lg:w-full max-w-[480px] mx-3'>
        <h1 className='text-xl sm:text-2xl my-3 font-medium'>Delivery Information</h1>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Address with Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Pincode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone' />
      </div>
      <div className='mt-8 w-full'> 
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12 lg:ml-32 mx-5'>
          <h1 className='text-lg font-medium'>Payment Method</h1>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('phonepay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'phonepay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 w-20 mx-4' src={pay1} alt='' />
            </div>
            <div onClick={() => setMethod('googlepay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'googlepay' ? 'bg-green-500' : ''}`}></p>
              <img className='h-5 w-20 mx-4' src={pay2} alt='' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash on Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
          <button onClick={() => navigate('/orders')} className=" bg-gradient-to-r from-green-500 to-green-800 py-3 px-16">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
