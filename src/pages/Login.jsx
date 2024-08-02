import logo from "../assets/Images/logo1.png";

const Login = () => {
  return (
    <div className="m-10 p-5 max-w-80 mx-auto border border-slate-300">
      <div className="max-w-40 mx-auto">
        <img src={logo} alt="logo" className="h-10 px-4" />
      </div>
      <div className="">
        <form className="flex flex-col gap-5">
          <h2 className="text-2xl text-purple-500 text-center">LOGIN</h2>
          <input type="email" placeholder="Email" className="border border-slate-300 p-3 outline-none" />
          <input type="password" placeholder="Password" className="border border-slate-300 p-3 outline-none" />
          <a href="" className=" bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 mt-4 text-center rounded-md">
            Login
          </a>
        </form>
        <div className="flex flex-row p-3 gap-1">
          <h2 className="text-md text-slate-500">Don't have an account? </h2>
          <a href="" className="text-md text-blue-500">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default Login
