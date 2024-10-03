import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link, useParams } from "react-router-dom"
import { Star,  ChevronRight } from 'lucide-react';
import  RelatedSection  from "../components/RelatedSection"

const Product = () => {
  
  const [productData, setProductData] = useState(null);
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [size, setSize] = useState('');


  useEffect(() => {
    if (productId && products && Array.isArray(products)) {
      const item = products.find((item) => item._id === productId);
      if (item) {
        setProductData(item);
      } else {
        console.log('Product not found');
      } 
    }
  }, [productId, products]);


  
  
  if (!productData) {
    return <p>Loading...</p>; 
  }
  
  return (
    <div className="max-w-7xl mx-auto pt-20 transition-opacity ease-in duration-500 opacity-100">
      <h3 className="text-gray-400 text-xs flex mx-3 my-3">
        <Link to='/'>Home</Link><ChevronRight width={15} className='pb-2' /><Link to='/shop'>Shop</Link><ChevronRight width={15} className='pb-2' />{productData.name}
      </h3>
      <div className="flex gap-8  flex-col sm:flex-row">
        <div className="flex-1 lg:w-full sm:w-[80%] border mx-2">
          <img src={productData.image} className="w-full lg:p-20 p-10" alt="" />
        </div>
        <div className="flex-1 mt-4 mx-5"> 
          {/* <h3 className="mt-3 text-sm">{productData.brand}</h3> */}
          <p className='mt-3 text-gray-500 font-medium text-xl md:w-4/5'>{productData.fname}</p>
          <div className=" flex items-center gap-1 mt-5">
            <Star width={20} color="gold"  strokeWidth={4} />
            <Star width={20} color="gold"  strokeWidth={4} />
            <Star width={20} color="gold"  strokeWidth={4} />
            <Star width={20} color="gold"  strokeWidth={4} />
            <Star width={20} color="gold"  strokeWidth={1} />
            <p className='pl-2'>({productData.ratings})</p>
          </div>
          <p className='mt-3 text-sm font-light text-green-600'>In Stock</p>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price} <strong className='ml-2 font-semibold text-sm text-red-500'>10% off</strong></p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size:</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-gray-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          
          <button onClick={() => addToCart(productData._id, size)} className="mt-3 text-sm bg-gradient-to-r from-green-500 to-green-800 py-3 px-8">ADD TO CART</button>
          
          <hr className='mt-8 sm:4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-2'>
            <p>100% good Quality product.</p>
            <p>Free Delivery is available.</p>
            <p>Cash on delivery is available on this product.</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className="flex text-md px-5 py-3 border mx-3">Product Description:</b>
        </div>
        <div className='border mx-3 px-6 py-6'>
          <p className="py-2 text-sm text-gray-500">{productData.description1}</p>
          <p className="py-2 text-sm text-gray-500">{productData.description2}</p>
        </div>
      </div> 
      <RelatedSection category={productData.category} subCategory={productData.subCategory} />
    </div>
  )
}

export default Product
