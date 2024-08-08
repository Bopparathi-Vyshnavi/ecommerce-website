import aboutimg from "../assets/Images/about-img1.jpg";
import Deliversection from '../components/Deliversection';
import Blogsection from '../components/Blogsection' 
import Aboutsection from "../components/Aboutsection";

const About = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-cyan-200 to-cyan-200 mx-auto lg:max-w-8xl">
        <div className="flex flex-row">  
          <div className="my-auto flex flex-col sm:mx-3">
            <h1 className=" sm:text-md lg:text-7xl text-center tracking-wide">#Know Us </h1>
            <h1 className="lg:mt-5 sm:text-sm lg:text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-center text-transparent bg-clip-text">Let us help with all your Pets need.</h1>
            <p className="lg:m-10 sm:text-xs lg:text-lg text-center text-neutral-500 lg:max-w-4xl">
              At Furry&Co, we've assembled all the essential services to ensure your pet's health and happiness just steps away from you.
            </p>
          </div>
          <div className="max-w-xl">
            <img src={aboutimg} className="" />
          </div>
        </div>
      </div>
  
      <Blogsection />
      <Deliversection />
      <Aboutsection />
    </>
  )
}

export default About
