import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contactus from './pages/Contactus'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'


export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}
