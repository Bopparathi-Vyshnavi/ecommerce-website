import travelimg from "../assets/Images/dog-travel-prep.jpg";

const Travelsection = () => {
  return (
    <div className="my-10 grid sm:grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
            <img src={travelimg} alt="travel-image" />
        </div>
        <div className="p-2">
            <h1 className="mt-5 text-4xl sm:text-6xl lg:text-5xl">
                Trust it, love it, travel it or we'll replace it.... 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> Guaranted!</span>
            </h1>
            <p className="mt-8 text-lg text-neutral-500 max-w-4xl">
                At this we belive that your dog will love there travelling kit so much that if they don't... we'll help you to find a replacement.That's responsibility.
            </p>
            <div className=" my-10">
                <a href="/About" className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4">
                    Find more!
                </a>
            </div>
        </div>
    </div>
  )
}

export default Travelsection
