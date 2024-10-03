import logoimg from "../assets/Images/logo.jpg";
import delimg1 from "../assets/Images/delivery.jpg";
import delimg2 from "../assets/Images/return.jpg";
import delimg3 from "../assets/Images/security.jpg";
import delimg4 from "../assets/Images/support.png";

const Deliversection = () => {
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-60">
           <img src={logoimg} className="mt-2" alt="logoimage" /> 
        </div>
        <h2 className="text-3xl tracking-tight text-red-900 text-center mt-5">Click it, Shop it, Bag it, and Enjoy..!</h2>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                <div className="border border-gray-300 p-5 hover:opacity-70">
                    <img src={delimg1} alt=""  className="h-20 w-20"/>
                    <h4 className="text-lg font-semibold text-orange-700 py-2">Free Delivery</h4>
                    <p className="mt-1 text-md text-gray-900">Order on above 499 to get free delivery</p>
                </div>
                <div className="border border-gray-300 p-5 hover:opacity-70">
                    <img src={delimg2} alt=""  className="h-20 w-20"/>
                    <h4 className="text-lg font-semibold text-orange-700 py-2">30 day Return</h4>
                    <p className="mt-1 text-md text-gray-900">30 days return available for each product</p>
                </div>
                <div className="border border-gray-300 p-5 hover:opacity-70">
                    <img src={delimg3} alt=""  className="h-20 w-20"/>
                    <h4 className="text-lg font-semibold text-orange-700 py-2">Security Payment</h4>
                    <p className="mt-1 text-md text-gray-900">10% off on your online payment available at all locations</p>
                </div>
                <div className="border border-gray-300 p-5 hover:opacity-70">
                    <img src={delimg4} alt=""  className="h-20 w-20"/>
                    <h4 className="text-lg font-semibold text-orange-700 py-2">24/7 Support</h4>
                    <p className="mt-1 text-md text-gray-900">Customer support is available by 24/7</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deliversection
