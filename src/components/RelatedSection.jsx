import { rproducts } from "../constants/RelatedProducts"
import { Link } from "react-router-dom"

const RelatedSection = () => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center pb-10">Related Products</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {rproducts.map((item) => (
                    <Link to={`/product/${item.id}`} className="group text-center">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                            src={item.imageSrc}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                        <p className="mt-1 text-lg font-medium text-gray-900">{item.price}</p>
                        <button className="mt-2 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md">{item.btn}</button>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default RelatedSection
