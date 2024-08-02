import { shopproducts } from "../constants"
import { Link } from "react-router-dom"
import slide from "../assets/Images/shop-img.jpg"

const Shop = () => {
  return (
    

    <div className="bg-white">
      <img src={slide} className="w-full h-96 mt-1"/>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-10">All Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {shopproducts.map((product) => (
            <Link to={'/product'} key={product.id}  className="group text-center">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button className="mt-2 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md">{product.btn}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
