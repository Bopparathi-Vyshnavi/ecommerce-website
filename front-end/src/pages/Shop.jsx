import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"

import slide from "../assets/Images/shop-img.jpg"
import ProductItem from "../components/ProductItem";

const Shop = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.fname.toLowerCase().includes(search.toLowerCase()))
    }
    setFilterProducts(productsCopy)
  }

  useEffect(() => {
    setFilterProducts(products)
  },[])
   
  useEffect(() => {
    applyFilter();
  },[search, showSearch])

  return (
    
    <div className="bg-white">
      <img src={slide} className="w-full h-96"/>
      <h2 className="text-center -mt-80 mb-48  text-2xl font-semibold text-gray-800 pb-10">All Collections</h2>
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">  
        <div className="grid grid-cols-2 gap-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {
            filterProducts.map((item, index) =>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop
