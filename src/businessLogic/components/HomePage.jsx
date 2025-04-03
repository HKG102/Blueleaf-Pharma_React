import React, { useState } from "react";
import Carousel from "../sharedComponents/Carousel";
import mapBg from "../../assets/line.jpg";
import HomePageNewArrivals from "../Data/HomePageNewArrivals"; // Import your data
import HomePageFeature from "../Data/HomePageFeature"; // Import your data

function HomePage() {
  const [hoveredIndex, sethoverIndex] = useState(null);
  const [newArrivalActive, setnewArrivalActive] = useState(true);
  const [featureActive, setfeatureActive] = useState(false);

  const handleDataSet1 = () => {
    setnewArrivalActive(true);
    setfeatureActive(false);
  };

  const handleDataSet2 = () => {
    setnewArrivalActive(false);
    setfeatureActive(true);
  };

  const homePageNewArrivals = HomePageNewArrivals.images.map((image) => {
    return (
      <div
        className="relative w-full md:w-1/6 mb-3 mr-3 pr-1 cursor-pointer overflow-hidden"
        onMouseEnter={() => sethoverIndex(image.id)}
        onMouseLeave={() => sethoverIndex(null)}
      >
        <div className="border-2 border-gray-300 rounded-lg shadow-md">
          <img src={image.url} alt={image.description} />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-blue-700 p-4 transition-transform duration-500 ease-in-out transform ${
              hoveredIndex === image.id ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <p className="text-white text-center hover:text-neutral-300">
              {image.description}
            </p>
            <p className="text-white text-center underline hover:text-neutral-300 hover:no-underline">
              Send Inquiry
            </p>
          </div>
        </div>
      </div>
    );
  });

  const homePageFeature = HomePageFeature.images.map((image) => {
    return (
      <div
        className="relative w-full md:w-1/4 mb-3 mr-3 pr-1 cursor-pointer overflow-hidden"
        onMouseEnter={() => sethoverIndex(image.id)}
        onMouseLeave={() => sethoverIndex(null)}
      >
        <div className="border-2 border-gray-300 rounded-lg shadow-md">
          <img src={image.url} alt={image.description} />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-blue-700 p-4 transition-transform duration-500 ease-in-out transform ${
              hoveredIndex === image.id ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <p className="text-white text-center hover:text-neutral-300">
              {image.description}
            </p>
            <p className="text-white text-center underline hover:text-neutral-300 hover:no-underline">
              Send Inquiry
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel />
      <div className="flex justify-center py-5 text-2xl font-thin">
        BLUE LEAF PHARMA
      </div>
      <p className="font-medium pb-12">
        Delivering high-quality pharmaceutical products such as Bluprox P
        Injection 100ml, Moxicruz Injection 300 Mg, Estrumin 7 Bolus Injection
        and many more.
      </p>
      <div
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="flex justify-center pt-1 font-thin">
          {newArrivalActive && (
            <>
              <button
                onClick={handleDataSet1}
                className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                New Arrivals
              </button>
              <button
                onClick={handleDataSet2}
                className="ml-4 bg-white border font-semibold text-neutral-500 py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                Features
              </button>
            </>
          )}

          {featureActive && (
            <>
              <button
                onClick={handleDataSet1}
                className=" bg-white border font-semibold text-neutral-500 py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer"
              >
                New Arrivals
              </button>
              <button
                onClick={handleDataSet2}
                className="ml-4 bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Features
              </button>
            </>
          )}
        </div>
      </div>

      {newArrivalActive && (
        <div className="flex flex-wrap justify-center pt-10">
          {homePageNewArrivals}
        </div>
      )}
      {featureActive && (
        <div className="flex flex-wrap pt-10">{homePageFeature}</div>
      )}

      <div className="flex justify-center font-thin pt-10">
        <button className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          Click to View All Products
        </button>
      </div>

      <div className="w-full pt-10">
        <div className="text-white" style={{ backgroundColor: "#243242" }}>
          <div className="flex justify-center py-5 text-xl font-thin">
            <p className="text-justify px-50">
              Founded in 2020, Blue Leaf Pharma is a promising pharmaceutical
              company dealing with different kinds of pharmaceutical injections
              and pharmaceutical tablets. As a progressive manufacturer and
              supplier, we are committed to our clients and total quality
              assurance is our primary aim. Over the last three years, we have
              developed a large client base supplying them with high-quality
              products such as Bluprox P Injection 100ml, Moxicruz Injection 300
              Mg, Estrumin 7 Bolus Injection, Apptosacc Tablet, Kentaliv 100 Ml
              Injection and many more. Our products are known for their potency,
              genuineness and affordable pricing. We have built a large
              production facility that is equipped with all kinds of modern
              machinery and tools to facilitate our production process.
              Moreover, the production is managed by adroit professionals with
              years of experience in this sector.
            </p>
          </div>
          <div className="flex justify-center pb-5 text-xl font-thin">
            <p className=" text-justify px-50">
              With our experience in the domain of pharmaceutical products, we
              look forward to consolidating our gains, for which we have
              strategized our business process to develop bulk storage and
              delivery process. We have expanded our business to different parts
              of India and harbour long-term relationships with companies,
              distributors and wholesalers. We also have a wide distribution
              network that helps us deliver products in a timely manner.
              Moreover, we are able to deliver products in bulk, thanks to our
              excellent storage facility and supply chain management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
