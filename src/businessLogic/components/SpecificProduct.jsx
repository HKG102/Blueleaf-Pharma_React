import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import PharmaceuticalProductInfo from "../Data/PharmaceuticalProductInfo";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules"; // Import Swiper modules

function SpecificProduct() {
  const location = useLocation();
  const { data } = location.state || {};
  const targetRef = React.useRef(null);
  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      <div className="p-6 rounded shadow-2xl bg-white w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={data?.url}
            alt={data?.description}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Details Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="text-2xl md:text-3xl font-semibold mb-2">
            {data?.description}
          </div>
          <hr className="border-gray-200 mb-4" />

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="text-lg md:text-xl font-semibold text-blue-500">
              {data?.price} INR / {data?.type}
            </div>
            <button className="border border-red-500 rounded-lg text-sm hover:bg-red-700 hover:border-red-700 hover:text-white px-4 py-2 transition cursor-pointer">
              Get a Price/Quote
            </button>
          </div>

          <div className="text-xl md:text-2xl font-semibold mb-4">
            Product Details:
          </div>

          <ul className="w-full space-y-2">
            <li className="flex justify-between border-b border-gray-200 py-2 text-base md:text-lg">
              <span className="font-semibold">Drug Type</span>
              <span className="text-gray-600">{data?.drugType}</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 py-2 text-base md:text-lg">
              <span className="font-semibold">Physical Form</span>
              <span className="text-gray-600">{data?.physicalForm}</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 py-2 text-base md:text-lg">
              <span className="font-semibold">Storage Instruction</span>
              <span className="text-gray-600">{data?.storage}</span>
            </li>
            <li className="flex justify-between border-b border-gray-200 py-2 text-base md:text-lg">
              <button
                onClick={handleScroll}
                className="font-semibold text-blue-400 hover:underline cursor-pointer"
              >
                Click to View more
              </button>
            </li>
            {/* Add more details as needed */}
          </ul>
          <div className="my-4 flex">
            Share Product:{" "}
            <span className="px-1 text-3xl hover:text-blue-600 cursor-pointer">
              <FaFacebook />
            </span>
            <span className="px-1 text-3xl  cursor-pointer">
              <FaSquareXTwitter />
            </span>
            <span className="px-1 text-3xl hover:text-blue-800 cursor-pointer">
              <FaLinkedin />
            </span>
          </div>
          <button className="mb-3 border text-red-500 border-red-500 rounded-lg text-2xl hover:bg-red-700 hover:border-red-700 hover:text-white px-4 py-2 transition cursor-pointer">
            REQUEST TO CALL BACK
          </button>
          <Link to="/contact">
            <button className="w-full border text-white border-red-700 bg-red-700 rounded-lg text-2xl hover:bg-white hover:border-red-500 hover:text-red-500 px-4 py-2 transition cursor-pointer">
              SEND INQUIRY
            </button>
          </Link>
        </div>
      </div>
      <div
        ref={targetRef}
        className="my-5 p-4 sm:p-6 rounded shadow-2xl bg-white w-full max-w-6xl flex flex-col gap-6"
      >
        {/* Section Title */}
        <div className="text-xl sm:text-2xl font-light border-b border-gray-200 py-2">
          {data.description} Price And Quantity
        </div>

        {/* Price & Quantity */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4 py-3 text-base sm:text-xl">
            <div className="flex flex-col sm:flex-row font-semibold justify-between gap-1 sm:gap-4">
              <span>Price</span>
              <span className="font-light">{data.price} INR/{data.type}</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-3 text-base sm:text-xl">
            <div className="flex flex-col sm:flex-row font-semibold justify-between gap-1 sm:gap-4">
              <span>Minimum Order Quantity</span>
              <span className="font-light">{data.quantity} {data.type}</span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="text-xl sm:text-2xl font-light border-b border-gray-200 py-2">
          {data.description} Product Specifications
        </div>
        <div className="flex flex-wrap">
          {[
            { label: "Physical Form", value: data.physicalForm },
            { label: "Drug Type", value: data.drugType },
            { label: "Storage Instructions", value: data.storage },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/2 px-4 py-3 text-base sm:text-xl"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4">
                <span className="font-semibold">{item.label}</span>
                <span className="font-light">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trade Info */}
        <div className="text-xl sm:text-2xl font-light border-b border-gray-200 py-2">
          {data.description} Trade Information
        </div>
        <div className="flex flex-wrap">
          {[
            { label: "Payment Terms", value: "Cash in Advance (CID)" },
            { label: "Supply Ability", value: data.supplyAbility },
            { label: "Delivery Time", value: "2-4 Days" },
            { label: "Main Domestic Market", value: "All India" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/2 px-4 py-3 text-base sm:text-xl"
            >
              <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-4">
                <span className="font-semibold">{item.label}</span>
                <span className="font-light">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-xl sm:text-2xl font-light border-b border-gray-200 py-2">
          Product Description
        </div>
        <div className="text-base sm:text-xl font-light px-4">{data.productDescription}</div>
      </div>


      <div className="pt-10 text-3xl">
        Other Popular Products on our Website
      </div>

      <div className="w-full max-w-7xl mx-auto py-10 px-4">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}
          className="mySwiper"
        >
          {PharmaceuticalProductInfo.images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-white h-full flex flex-col">
                <Link to={`/${img.id}`} state={{ data: img }}>
                  <img
                    src={img.url}
                    alt={img.description}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover"
                  />
                </Link>
                <div className="p-3 sm:p-4 flex flex-col gap-1 text-sm sm:text-base">
                  <Link
                    to={`/${img.id}`}
                    state={{ data: img }}
                    className="font-semibold text-blue-700 hover:underline line-clamp-2"
                  >
                    {img.description}
                  </Link>
                  <div>
                    <span className="font-medium">Price:</span> {img.price} INR/{img.type}
                  </div>
                  <div>
                    <span className="font-medium">MOQ:</span> {img.quantity}
                  </div>
                  <div>
                    <span className="font-medium">Drug Type:</span> {img.drugType}
                  </div>
                  <div>
                    <span className="font-medium">Form:</span> {img.physicalForm}
                  </div>
                  <div>
                    <span className="font-medium">Storage:</span> {img.storage}
                  </div>
                  <Link to="/contact" className="mt-2">
                    <button className="w-full text-red-700 border border-red-700 rounded-md hover:bg-red-700 hover:text-white px-3 py-2 text-sm transition">
                      Send Inquiry
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SpecificProduct;
