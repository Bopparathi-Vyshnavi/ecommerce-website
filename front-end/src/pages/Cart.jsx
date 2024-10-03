import cimg from "../assets/Images/banner-cart.jpg";
import { Trash2 } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import CartTotal from "../components/CartTotal";

const Cart = () => {
  
  const { products, currency, cartItems, updateQuantity, navigate  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);


  useEffect(() => {
    const tempData = [];
    for(const items in cartItems) {
      for(const item in cartItems[items]) {
        if(cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        } 
      }
    }
    setCartData(tempData);
  }, [cartItems])

  

  return (
    <>
      <div>
        <img src={cimg} className="w-full h-96" />
      </div>
      <div className="border-t pt-14">
        <h1 className='text-2xl mb-5 mx-10 lg:px-10 font-medium'>YOUR CART</h1>
        <div className="max-w-7xl mx-auto">
          {
            cartData.map((item, index) => {

              const productData = products.find((product) => product._id === item._id);

              return (
                
                <div key={index} className='py-4 border-t border-b text-gray-700 grid lg:grid-cols-[4fr_0.5fr_0.5fr] grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                  <div className="flex items-start gap-6">
                    <img src={productData.image} className="w-40" />
                    <div>
                      <p className="text-sm font-medium">{productData.name}</p>
                      <div className="flex items-center gap-5 mt-2">
                        <p>{currency}{productData.price}</p>
                        <p className="lg:px-2 px-3 py-1 border bg-slate-50">{item.size}</p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border border-gray-500 max-w-10 lg:mt-1 mt-20 px-1 py-1 outline-none' type="number" min={1} defaultValue={item.quantity} />
                  <Trash2 onClick={() => updateQuantity(item._id, item.size, 0)} className="cursor-pointer lg:mt-0 mt-20 mx-5" /> 
                </div>
              ) 

            }) 
          }
          
        </div>
      </div>
      <div className="flex my-5">
        <div className="lg:w-1/2 border mx-auto">
          <CartTotal />
          <button onClick={() => navigate('/placeorder')} className="lg:mx-56 mb-5 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 ">Proceed to Checkout</button>
        </div>
      </div>
      
    </>
  ) 
}

export default Cart
