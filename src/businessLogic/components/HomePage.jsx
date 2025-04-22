import React, { useEffect, useState } from "react";
import Carousel from "../sharedComponents/Carousel";
import { Link, useLocation } from "react-router-dom";
import mapBg from "../../assets/line.jpg";
import HomePageNewArrivals from "../Data/HomePageNewArrivals"; // Import your data
import HomePageFeature from "../Data/HomePageFeature"; // Import your data
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules"; // Import Swiper modules

function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  
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

  const homePageNewArrivals = HomePageNewArrivals.images.map((image,index) => {
    return (
      <div key={index}
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
            <Link to={`/${image.id}`} state={{data:image}} className="text-white flex justify-center hover:text-neutral-300">
              {image.description}
            </Link>
            <Link to="/contact" className="text-white flex justify-center underline hover:text-neutral-300 hover:no-underline">
              Send Inquiry
            </Link>
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
            <Link to={`/${image.id}`} state={{data:image}} className="text-white flex justify-center hover:text-neutral-300">
              {image.description}
            </Link>
            <Link to="/contact" className="text-white flex justify-center underline hover:text-neutral-300 hover:no-underline">
              Send Inquiry
            </Link>
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
                className="bg-white border font-semibold text-neutral-500 py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer"
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
        <Link  to="/products" className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          Click to View All Products
        </Link>
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
          <div className="flex pb-5 text-xl font-bold">
            <h2 className=" text-justify px-50">Quality Assurance</h2>
          </div>
          <div className="flex justify-center pb-5 text-xl font-thin">
            <p className=" text-justify px-50">
              We are in the pharmaceutical industry, where quality plays the
              most important role. It creates the differentiating factor between
              a good and an average company. Thus, we maintain total quality
              assurance for the products we deliver. We place a high value on
              the quality of our pharmaceutical products because we believe that
              without it, we would not be able to reach our ultimate objective
              of becoming the top firm in this sector. At each level of
              production, all items are tested and rechecked. Furthermore, we
              check products in the post-production stage and always adhere to
              international standards.
            </p>
          </div>
          <div className="flex pb-5 text-xl font-bold">
            <h2 className=" text-justify px-50">Why Us?</h2>
          </div>
          <div className="flex justify-center pb-5 text-xl font-thin">
            <p className=" text-justify px-50">
              All our pharmaceutical products such as Kentaliv 100 Ml Injection,
              Bluprox P Injection 100ml, Estrumin 7 Bolus Injection, Moxicruz
              Injection 300 Mg, Apptosacc Tablet and many more are manufactured
              under the supervision of skilled professionals who are experts in
              their fields. Care is taken to use the latest technology available
              and are subjected to stringent quality tests in order to produce
              flawless products. We make sure we serve our clients well and
              maintain a long-term relationship with them. Some of the reasons
              for our success in the industry are:
            </p>
          </div>
          <div className="flex pb-5 text-xl font-normal">
            <ul className="list-disc text-justify px-55">
              <li>Premium quality products with 100% quality assurance</li>
              <li>Wide distribution network</li>
              <li>Affordable pricing</li>
              <li>Well-managed storage system</li>
              <li>Excellent supply chain management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full px-50 text-xl font-bold pt-5">
        <h2 className="">Most Popular product</h2>
      </div>

      <div className="w-full max-w-6xl mx-auto py-10">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={3}
          spaceBetween={100}
          loop={true}
          className="mySwiper"
        >
          {HomePageNewArrivals.images.map((img) => (
            <SwiperSlide key={img.id}>
              <Link to={`/${img.id}`} state={{data:img}} className=" border-gray-300 rounded-lg shadow-md overflow-hidden">
                <img
                  src={img.url}
                  alt={img.description}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
                <div className="flex justify-center">
                  <button className="w-full bg-gray-800 text-white font-semibold py-3 px-5 hover:bg-black transition cursor-pointer">
                    {img.description}
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HomePage;
