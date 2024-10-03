import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";


const Featuredsection = () => {

  const { products } = useContext(ShopContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const featuredProduct = products.filter((item) => (item.featuredproduct));
    setFeaturedProducts(featuredProduct.slice(0,5));
  },[])

  return (
    <div className="my-10 pb-10">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center pb-10">Featured Products</h2>
      <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {
            featuredProducts.map((item, index) =>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
      </div>
    </div>
  )
}

export default Featuredsection
