import col1 from "../assets/Images/food.jpg";
import col2 from "../assets/Images/toys.jpg";
import col3 from "../assets/Images/medicine.jpg";
import col4 from "../assets/Images/groom.jpg";
import col5 from "../assets/Images/accessories.webp";
import col6 from "../assets/Images/dog-treat.png";

const CategoriesSection = () => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center pb-8">All Categories</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
                <div>
                    <img src={col1} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    <h6 className="text-md text-center py-2">Pet Food</h6>
                </div>
                <div>
                    <img src={col2} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    <h6 className="text-md text-center py-2">Pet Toys</h6>
                </div>
                <div>
                    <img src={col3} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    <h6 className="text-md text-center py-2">Pet Supplies</h6>
                </div>
                <div>
                    <img src={col4} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    <h6 className="text-md text-center py-2">Pet Grooming</h6>
                </div>
                <div>
                    <img src={col5} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    <h6 className="text-md text-center py-2">Pet Accessories</h6>
                </div>
                <div>
                    <img src={col6} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                    <h6 className="text-md text-center py-2">Pet Treats</h6>
                </div>
            </div>
             
        </div>
    </div>
  )
}

export default CategoriesSection
