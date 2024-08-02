

const Contactus = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 pb-10">
      <form className="flex flex-col gap-5 p-5 border border-slate-300">
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
  )
}

export default Contactus
