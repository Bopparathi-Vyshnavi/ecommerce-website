import logo from "../assets/Images/logo1.png";

const Signin = () => {
  return (
    <div className="m-10 p-5 max-w-96 mx-auto border border-slate-300">
      <div className="max-w-40 mx-auto">
        <img src={logo} alt="logo" className="h-10 px-4" />
      </div>
      <div className="">
        <form className="flex flex-col gap-5">
          <h2 className="text-2xl text-purple-500 text-center">SIGN UP</h2>
          <input type="text" placeholder="First Name" className="border border-slate-300 p-3 outline-none" />
          <input type="text" placeholder="Last Name" className="border border-slate-300 p-3 outline-none" />
          <input type="email" placeholder="Email" className="border border-slate-300 p-3 outline-none" />
          <input type="password" placeholder="Password" className="border border-slate-300 p-3 outline-none" />
          <a href="" className=" bg-gradient-to-r from-green-500 to-green-800 py-3 px-3 mt-4 text-center rounded-md">
            Sign In
          </a>
        </form>
        <div className="flex flex-row p-3 gap-1 mt-2">
          <h2 className="text-md text-slate-500">Already have an account? </h2>
          <a href="/login" className="text-md text-blue-500 pl-2">Login</a>
        </div>
      </div>
    </div>
  )
}

export default Signin
