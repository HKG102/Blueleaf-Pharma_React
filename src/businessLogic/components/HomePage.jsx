import React, { useEffect, useState } from "react";
import Carousel from "../sharedComponents/Carousel";
import { Link, useLocation } from "react-router-dom";
import mapBg from "/assets/line.jpg";
import HomePageNewArrivals from "../Data/HomePageNewArrivals";
import HomePageFeature from "../Data/HomePageFeature";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

function HomePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("newArrivals");

  const handleTabChange = (tab) => setActiveTab(tab);

  const renderImageGrid = (images, colClass) =>
    images.map((image) => {
      const isHovered = hoveredIndex === image.id;
  
      const handleInteraction = () => {
        // Toggle if it's mobile (or fallback for touch)
        if (isHovered) {
          setHoveredIndex(null);
        } else {
          setHoveredIndex(image.id);
        }
      };
  
      return (
        <div
          key={image.id}
          className={`relative w-full ${colClass} mb-3 mx-3 px-1 cursor-pointer overflow-hidden`}
          onMouseEnter={() => setHoveredIndex(image.id)} // Desktop
          onMouseLeave={() => setHoveredIndex(null)}    // Desktop
          onClick={handleInteraction}                   // Mobile
        >
          <div className="border-2 border-gray-300 rounded-lg shadow-md">
            <img src={image.url} alt={image.description} />
            <div
              className={`absolute bottom-0 left-0 right-0 bg-blue-700 p-4 transition-transform duration-500 ease-in-out transform z-10 ${
                isHovered ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <Link
                to={`/${image.id}`}
                state={{ data: image }}
                className="text-white flex justify-center hover:text-neutral-300"
                onClick={(e) => e.stopPropagation()} // Prevent closing tooltip on link click
              >
                {image.description}
              </Link>
              <Link
                to="/contact"
                className="text-white flex justify-center underline hover:text-neutral-300 hover:no-underline"
                onClick={(e) => e.stopPropagation()}
              >
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

      <p className="font-medium pb-12 text-center max-w-4xl">
        Delivering high-quality pharmaceutical products such as Bluprox P
        Injection 100ml, Moxicruz Injection 300 Mg, Estrumin 7 Bolus Injection
        and many more.
      </p>

      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${mapBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center pt-1 font-thin">
          {[
            { label: "New Arrivals", key: "newArrivals" },
            { label: "Features", key: "features" },
          ].map(({ label, key }) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`mx-2 py-3 px-5 font-semibold rounded-lg transition cursor-pointer border ${
                activeTab === key
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-neutral-500 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center pt-10">
        {activeTab === "newArrivals"
          ? renderImageGrid(HomePageNewArrivals.images, "md:w-1/6")
          : renderImageGrid(HomePageFeature.images, "md:w-1/3")}
      </div>

      <div className="flex justify-center font-thin pt-10">
        <Link
          to="/products"
          className="bg-blue-600 text-white font-semibold mb-10 py-3 px-5 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Click to View All Products
        </Link>
      </div>

      <section className="w-full py-10 text-white" style={{ backgroundColor: "#243242" }}>
        <div className="max-w-7xl mx-auto py-5 text-xl font-thin">
          <p className="text-base sm:text-sm px-2 sm:px-4 text-justify leading-relaxed">
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
          <p className="text-base sm:text-sm px-2 sm:px-4 text-justify leading-relaxed">
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
          <h2 className="text-justify px-2 sm:px-4 font-bold">Quality Assurance</h2>
          <p className="text-base sm:text-sm px-2 sm:px-4 text-justify leading-relaxed">
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
          <h2 className="text-justify px-2 sm:px-4 font-bold">Why Us?</h2>
          <p className="text-base sm:text-sm px-2 sm:px-4 text-justify leading-relaxed">
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
          <ul className="list-disc text-base sm:text-sm px-2 sm:px-4 text-justify leading-relaxed">
            <li>Premium quality products with 100% quality assurance</li>
            <li>Wide distribution network</li>
            <li>Affordable pricing</li>
            <li>Well-managed storage system</li>
            <li>Excellent supply chain management</li>
          </ul>
        </div>
      </section>

      <div className="w-full lg:px-50 md:px-10 text-xl font-bold pt-5">
        <h2>Most Popular Product</h2>
      </div>

      <div className="w-full max-w-6xl mx-auto py-10">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          loop={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {HomePageNewArrivals.images.map((img) => (
            <SwiperSlide key={img.id}>
              <Link
                to={`/${img.id}`}
                state={{ data: img }}
                className="border-gray-300 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={img.url}
                  alt={img.description}
                  className="w-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
                <div className="flex justify-center">
                  <button className="w-full bg-gray-800 text-white font-semibold py-3 px-5 hover:bg-black transition cursor-pointer h-14 truncate">
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
