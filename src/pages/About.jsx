import aboutimg from "../assets/Images/about-img1.jpg";
import Deliversection from '../components/Deliversection';
import Blogsection from '../components/Blogsection' 
import Aboutsection from "../components/Aboutsection";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10">
      <div className="bg-">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">#Know Us </h1>
        
          <h1 className="mt-4 text-4xl bg-gradient-to-r from-orange-500 to-red-800 text-center text-transparent bg-clip-text">Let us help with all your Pets need.</h1>
       
        <p className="m-10 text-lg text-center text-neutral-500 max-w-4xl">
          At Furry&Co, we've assembled all the essential services to ensure your pet's health and happiness just steps away from you.
        </p>
      </div>
      {/* <img src={aboutimg} className=""/> */}
      <Blogsection />
      <Deliversection />
      <Aboutsection />
    </div>
  )
}

export default About
