import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contactus from './pages/Contactus'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'
import Reset from './pages/Reset'
import Account from './pages/Account'
import Orders from './pages/Orders'
import SearchBar from './components/SearchBar'
import Checkout from './pages/Checkout'


export default function App() {

  const [localVal, setLocalVal] = useState(localStorage.getItem('email'))

  useEffect(() => {
    const interval = setInterval(() => {
      const updateLocal = localStorage.getItem('email')
      if(updateLocal !== localVal){
        setLocalVal(updateLocal)
      }
    },1000)
    return() => {clearInterval(interval)}
  },[localVal])

  return (
    <div>
      
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        {localVal == undefined && <Route path='/login' element={<Login />} />}
        {localVal != undefined && <Route path='/login' element={<Account />} />}
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgotpassword' element={<ForgotPassword/>} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/placeorder' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  )
}
