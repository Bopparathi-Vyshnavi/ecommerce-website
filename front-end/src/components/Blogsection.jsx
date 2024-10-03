import { blogItems } from "../constants/BlogPosts"

const Blogsection = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 pb-10 lg:px-2 sm:px-8">Blog</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogItems.map((product) => (
            <div key={product.id} className="w-full h-full hover:bg-gray-50 p-2">
              <div className="">
                <img src={product.imageSrc} 
                  className="h-60 w-full"
                />
              </div>
              <h3 className="mt-4 text-lg text-yellow-600 py-2 h-16">{product.title}</h3>
              <p className="mt-2 text-sm font-medium text-gray-600 h-20">{product.description}</p>
              <button className="mt-5 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4">{product.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogsection
