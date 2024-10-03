import { useState } from "react";
import logo from "../assets/Images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Reset = () => {

  const [password,setPassword] = useState('');

  return (
    <div className="m-10 p-5 max-w-80 mx-auto border border-slate-300">
      <div>
        <form className="flex flex-col gap-5">
          <h2 className="text-2xl text-purple-500 text-center">RESET PASSWORD</h2>
          <input 
            type="password" 
            placeholder="password" 
            className="border border-slate-300 p-3 outline-none" 
            onChange = {(e) => {setPassword(e.target.value)}} 
            required
          />
          <button type="submit" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 mt-4 text-center rounded-md" >
            Reset
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reset

