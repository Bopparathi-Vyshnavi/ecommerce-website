import contactimg from "../assets/Images/contact-img.webp"

const Contactus = () => {
  return (
    <>
      <div className="bg-contimg bg-cover bg-center w-full overflow-hidden px-52 lg:py-96 ">
          <div className="">
            <h1 className=" sm:text-md lg:text-7xl tracking-wide">#Let's_talk </h1>
            <h1 className="pt-10 sm:text-sm lg:text-4xl text-red-500 ">LEAVE A MESSAGE, We love to hear!</h1>
          </div>
      </div>
      <div className="lg:max-w-6xl sm:max-w-96 mx-auto mt-10 pb-10">
        <form className="flex flex-col gap-5 p-5 mx-3 border border-slate-300">
          <span className="text-sm text-pink-600">LEAVE A MESSAGE</span>
          <h2 className="text-lg text-purple-500">We love to hear from you</h2>
          <input type="text" placeholder="Your Name" className="border border-slate-300 p-3 outline-none" />
          <input type="email" placeholder="E-mail Id" className="border border-slate-300 p-3 outline-none" />
          <input type="text" placeholder="Subject" className="border border-slate-300 p-3 outline-none" />
          <textarea name="message" id="" cols={30} rows={10} placeholder="Your Message" className="border border-slate-300 p-3 outline-none"></textarea> 
        
          <a href="" className="w-24 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mt-4 rounded-md">
            Submit
          </a>
        </form>
      </div>
    </>
  )
}

export default Contactus
