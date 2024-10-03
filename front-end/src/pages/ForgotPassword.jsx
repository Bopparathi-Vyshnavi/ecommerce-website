import { useState } from "react";
import logo from "../assets/Images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {

    const [email,setEmail] = useState('');
    const [otp, setOtp] = useState('');

  return (
    <div className="m-10 p-5 max-w-80 mx-auto border border-slate-300">
      <div>
        <form className="flex flex-col gap-5">
          <h2 className="text-2xl text-purple-500 text-center">FORGOT PASSWORD</h2>
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-slate-300 p-3 outline-none" 
            onChange = {(e) => {setEmail(e.target.value)}} 
            required
          />
          <button type="submit" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 mt-4 text-center" >
            Send OTP
          </button>
        </form>
        <div className="flex p-3 gap-1">
          <h2 className="text-md text-slate-500">If you got the Password? </h2>
          <Link to='/login' className="text-md text-blue-500">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
