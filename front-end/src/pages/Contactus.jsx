import { useState } from "react"

import axios from "axios"

const Contactus = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const submit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:8080/api/contact/post', {
        name: name,
        email: email,
        subject: subject,
        message: message 
      });
      console.log(response.data)
      alert("Successful")
      return response
    } catch(error) {
      alert("Unsuccessful")
    }
  }

  return (
    <div className="bg-contimg bg-cover bg-center w-full overflow-hidden">
      <div className="lg:ml-20">
        <h1 className=" sm:text-4xl lg:text-3xl m-4 font-medium text-gray-950 tracking-widest">#Let's_talk </h1>
        <div className="lg:max-w-2xl sm:max-w-96 mt-10 pb-10 ">
          <form onSubmit={submit} className="flex flex-col gap-5 p-5 mx-3 border border-slate-300 bg-slate-100">
            <span className="title-font font-medium text-gray-900 text-xl mb-3">LEAVE A MESSAGE</span>
            <h2 className="text-lg text-gray-600">We love to hear from you</h2>
            <input 
              onChange={(e) => {setName(e.target.value)}}
              required 
              type="text"
              placeholder="Your Name" 
              className="bg-slate-100 border border-slate-300 p-3 outline-none" 
            />
            <input 
              onChange={(e) => {setEmail(e.target.value)}}
              required 
              type="email"
              placeholder="Email" 
              className="bg-slate-100 border border-slate-300 p-3 outline-none" 
            />
            <input 
              onChange={(e) => {setSubject(e.target.value)}} 
              required
              type="text" 
              placeholder="Subject" 
              className="bg-slate-100 border border-slate-300 p-3 outline-none" 
            />
            <textarea 
              onChange={(e) => {setMessage(e.target.value)}}
              required 
              name="message" 
              id="" cols={30} rows={10} 
              placeholder="Your Message" 
              className="bg-slate-100 border border-slate-300 p-3 outline-none">
            </textarea> 
            <button type="submit" value="Submit" className="w-24 bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus
