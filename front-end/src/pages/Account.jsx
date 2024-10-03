import { Package2, ShoppingCart, CircleUserRound, Contact } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Account = () => {

  const localVal = localStorage.getItem('email')
  const [name, setName] = useState('')

  const logOut = () => {
    localStorage.removeItem('email')
  }

  const submit = async () => {
    try {
      await axios.post('http://localhost:8080/api/user/account', {
        localVal
      })
      .then(res => {
        setName(res.data)
      })
      .catch(e => {
        alert('Something went wrong!');
      })
    } catch (error) {
      alert("user doesn't exist")
      console.error('Error signing in:', error)
    }
  }

  useEffect(() => {
    submit()
  },[localVal])

  return (
    <div>
      <section className='text-gray-600 grid place-items-center my-6'>
        <h1 className='sm:text-3xl lg:text-2xl mb-4 font-medium text-gray-600'>MY ACCOUNT</h1>
        <h1 className='flex sm:text-4xl lg:text-3xl mb-4 font-medium text-gray-950'><CircleUserRound className='size-8 mx-2' /> Hello, {name}</h1>
        <p className='mb-8'>Your Email ID: {localVal}</p>
        <div className='p-4 w-full flex flex-wrap justify-center'>
          <Link to='/orders' className='cursor-pointer w-48 m-4 hover:shadow-lg border-2 text-center border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg'>
            <Package2 className='size-20 mx-auto' />
            <h2 className='title-font font-medium sm:text-lg lg:text-2xl mt-4 text-gray-900'>Your Orders</h2>
          </Link>
          <Link to='/cart' className='cursor-pointer w-48 m-4 hover:shadow-lg border-2 text-center border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg'>
            <ShoppingCart className='size-20 mx-auto' />
            <h2 className='title-font font-medium sm:text-lg lg:text-2xl mt-4 text-gray-900'>Your Cart</h2>
          </Link>
          <Link to='/contactus' className='cursor-pointer w-48 m-4 hover:shadow-lg border-2 text-center border-gray-200 px-4 py-2 lg:py-6 lg:px-10 rounded-lg'>
            <Contact className='size-20 mx-auto' />
            <h2 className='title-font font-medium sm:text-lg lg:text-2xl mt-4 text-gray-900'>Contact Us</h2>
          </Link>
        </div>
        <button onClick={logOut} type="submit" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 text-black text-center rounded-md" >
          Logout
        </button>
      </section>
    </div>
  )
}

export default Account
