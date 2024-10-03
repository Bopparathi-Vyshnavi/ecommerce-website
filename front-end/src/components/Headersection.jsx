import image1 from "../assets/Images/header-img-1.jpg";
import image2 from "../assets/Images/header-img-2.jpg";


const Headersection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            What your furry wants, 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> When they need it.</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Introducing all the products and collections for small puppy and adult dogs to make your furry friend's life even more pleasant and happy.
        </p>
        <div className="flex justify-center my-10">
            <a href="/shop" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3">
            Shop Now
            </a>
        </div>
        <div className="grid sm:grid-cols-1 gap-10 mt-10 lg:grid-cols-2">
            <img src={image1} alt="" className="w-full h-full" />
            <img src={image2} alt="" className="w-full h-full" />
        </div>
    </div>
  )
}

export default Headersection
