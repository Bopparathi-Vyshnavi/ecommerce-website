
import { shopproducts } from "../constants/AllProducts"
import { useParams } from "react-router-dom"
import { ChevronRight, Star } from 'lucide-react';
import  RelatedSection  from "../components/RelatedSection"




const Product = () => {
  
  const {productId} = useParams();
  const product = shopproducts.find((e) => e.id === Number(productId));
  
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="mt-2 text-md text-gray-300 flex ">
        <a href="/" className="hover:underline" >Home</a> <ChevronRight /> <a href="/shop" className="hover:underline" >Shop</a> <ChevronRight /> {product.name} 
      </div>
      <div className="mt-5 grid sm:grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="border border-gray-200 py-14">
          <img src={product.imageSrc} className="w-96 mx-auto" alt="" />
        </div>
        <div className="">
          <h3 className="mt-2 text-3xl text-slate-600">{product.fname}</h3>
          <div className=" flex gap-2 mt-3">
            <Star className="stroke-yellow-500" />
            <Star className="stroke-yellow-500" />
            <Star className="stroke-yellow-500" />
            <Star className="stroke-yellow-500" />
            <Star />
            <p>({product.ratings})</p>
          </div>
          <p className="mt-5 text-2xl font-medium text-gray-900">{product.price}</p>
          <div className="mt-3">
            <label className="text-sm">Quantity:</label>
            <select className="ml-2 border border-gray-500 rounded-md w-10">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <button className="mt-3 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 rounded-md">{product.btn2}</button>
          <button className="mt-3 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-6 rounded-md">{product.btn}</button>
          <h3 className="mt-5 text-xl text-orange-500">Product Description:</h3>
          <p className="mt-3 text-md text-gray-500">{product.description}</p>
        </div>
      </div>
      <RelatedSection />
    </div>
  )
}

export default Product
