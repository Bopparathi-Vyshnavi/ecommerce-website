import aboutimg from "../assets/Images/about-img3.jpg";

const Aboutsection = () => {
  return (
    <div className="px-3 mx-auto grid sm:grid-cols-1 gap-10 my-10 lg:grid-cols-2 max-w-7xl">
      <div>
        <img src={aboutimg} alt="" />
      </div>
      <div className="border border-slate-300 p-5">
        <p className=" text-md text-neutral-500 max-w-3xl">
          We Furry&Co came with a vision to make pet parenting hassle free. We are recognized as the best <span className="text-orange-400">pet products online store in India.</span> Getting a pet is like getting a child they
          need our care concern and also all the basic needs. We understand <span className="text-orange-400">your love towards your pet</span> and also the troubles you face while pet parenting, which made us set up our vision.
        </p>
        <p className="mt-5 text-md text-neutral-500 max-w-4xl">
          From new <span className="text-orange-400">dog toys</span>, chews, yummy treats, nutritious <span className="text-orange-400">pet food</span>, accessories, comfy and trendy dog beds, <span className="text-orange-400">grooming articles</span>, bath, and skin care products, fashionable dog apparel, shoes and
          what not? All the woofing brands for all breed dogs like labrador, husky, retriever, shitzu, beagle, german shepord, etc. clubbed with unexpected pricing and every day crazy discounts. We just stop at nothing.
          It doesn’t matter which pet you have all that matters is you have a pet and we are at your doorstep whenever you order anything for them.
        </p>
      </div>
    </div>
  )
}

export default Aboutsection
