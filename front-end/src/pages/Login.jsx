import { useState } from "react";
import logo from "../assets/Images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const response = await axios.post('http://localhost:8080/api/user/login',{
        email: email,
        password: password,
      }) ;
      console.log(response.data)
      localStorage.setItem('email', email, {expires:7});
      navigate('/')
      return response
    } 
    catch(error) {
      alert("user doesn't exist")
      console.error('Error signing in:', error)
    }
  };

  return (
    <div className="m-10 p-5 max-w-80 mx-auto border border-slate-300">
      <div className="max-w-40 mx-auto">
        <img src={logo} alt="logo" className="h-10 px-4" />
      </div>
      <div>
        <form onSubmit = {handleLogin} className="flex flex-col gap-5 mb-3">
          <h2 className="text-2xl text-purple-500 text-center">LOGIN</h2>
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-slate-300 p-3 outline-none" 
            onChange = {(e) => {setEmail(e.target.value)}} 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border border-slate-300 p-3 outline-none" 
            onChange = {(e) => {setPassword(e.target.value)}} 
            required
          />
          <button type="submit" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 mt-4 text-center" >
            Login
          </button>
        </form>
        <Link to='/forgotpassword' className=" text-md text-blue-500">Forgot Password</Link>
        <div className="flex flex-row py-3 gap-1">
          <h2 className="text-md text-slate-500">Don't have an account? </h2>
          <Link to='/signin' className="text-md text-blue-500">Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
