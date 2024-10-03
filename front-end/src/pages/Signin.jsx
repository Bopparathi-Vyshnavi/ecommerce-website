import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../assets/Images/logo1.png";
import axios from "axios";


const Signin = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const response = await axios.post('http://localhost:8080/api/user/signin',{
        name: name,
        email: email,
        password: password
      }) ;
      console.log(response.data)
      navigate('/login')
      return response
    } 
    catch(error) {
      alert("user already exists")
      console.error('Error signing in:', error)
    }
  };

 
  return (
    <div className="m-10 p-5 max-w-80 mx-auto border border-slate-300">
      <div className="max-w-40 mx-auto">
        <img src={logo} alt="logo" className="h-10 px-4" />
      </div>
      <div>
        <h2 className="text-2xl text-purple-500 text-center py-3">SIGN IN</h2>
        <form onSubmit={handleSignin} className="flex flex-col gap-5">
          <input 
            onChange = {(e) => setName(e.target.value)}
            required  
            type="text" 
            placeholder="Name" 
            className="border border-slate-300 p-3 outline-none" 
          />
          <input 
            onChange = {(e) => setEmail(e.target.value)}
            required
            type="email" 
            placeholder="Email" 
            className="border border-slate-300 p-3 outline-none" 
          />
          <input 
            onChange = {(e) => setPassword(e.target.value)}
            required  
            type="password" 
            placeholder="Password" 
            className="border border-slate-300 p-3 outline-none" 
          />
          <button type="submit" className=" bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 mt-4 text-center">
            Sign In
          </button>
        </form>
        <div className="flex flex-row p-1 gap-1 mt-2">
          <h2 className="text-md text-slate-500">Already have an account? </h2>
          <Link to="/login" className="text-md text-blue-500 pl-2">Login</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Signin
