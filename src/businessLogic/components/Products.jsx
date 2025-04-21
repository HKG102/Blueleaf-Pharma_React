import React, { useEffect } from "react";
import PharmaceuticalProductsInfo from "../Data/PharmaceuticalProductInfo";
import FeedSupplementInfo from "../Data/FeedSupplementInfo.json";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation, Link } from "react-router-dom";

const ProductList = ({ list }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {list.images.map((product, index) => (
        <Link
          to={`/${product.id}`}
          state={{
            data: product,
          }}
          key={index}
          className="flex items-start gap-2 hover:underline cursor-pointer"
        >
          <IoIosArrowForward className="mt-1 text-blue-500" />
          <span className="text-sm sm:text-base">{product.description}</span>
        </Link>
      ))}
    </div>
  );
};

function Products() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <img
        src="src/assets/template_photo_contact-us.jpg"
        alt="Contact Us"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-80 rounded-lg mt-4"
      />

      <div className="py-10">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold pb-10">
          Showroom
        </h2>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full">
            <div className="p-4 sm:p-6 bg-white shadow-2xl rounded-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Product Image Card */}
                <div className="w-full lg:w-1/3 border-gray-300 border-4 rounded-lg shadow-md overflow-hidden hover:bg-blue-500 hover:border-blue-500 hover:text-white transition duration-300 ease-in-out">
                  <img
                    src="src/assets/Bluprox-P-100ml-Injection.jpg"
                    alt=""
                    className="w-full h-60 sm:h-72 cursor-pointer"
                  />
                  <div className="text-center text-xl font-semibold py-3 px-5 cursor-pointer text-black hover:text-white transition">
                    ({PharmaceuticalProductsInfo.images.length})
                  </div>
                </div>

                {/* Description Column */}
                <div className="w-full lg:w-1/1 px-0 lg:px-10 text-blue-500">
                  <Link
                    to="/productsCatregory"
                    state={{
                      category: "Pharmaceutical Injection",
                      data: PharmaceuticalProductsInfo,
                    }}
                    className="text-2xl sm:text-3xl font-bold hover:text-black cursor-pointer"
                  >
                    Pharmaceutical Injection
                  </Link>
                  <hr className="my-2 border-gray-300" />
                  <div className="pt-4">
                    <ProductList list={PharmaceuticalProductsInfo} />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end pr-3">
                <Link
                  to="/productsCatregory"
                  state={{
                    category: "Pharmaceutical Injection",
                    data: PharmaceuticalProductsInfo,
                  }}
                  className=" text-white bg-red-600 text-xl rounded-xl px-4 py-2 border border-red-600 hover:bg-red-800 hover:border-red-800 transition cursor-pointer"
                >
                  ...More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 py-10">
          <div className="w-full">
            <div className="p-4 sm:p-6 bg-white shadow-2xl rounded-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Product Image Card */}
                <div className="w-full lg:w-1/3 border-gray-300 border-4 rounded-lg shadow-md overflow-hidden hover:bg-blue-500 hover:border-blue-500 hover:text-white transition duration-300 ease-in-out">
                  <img
                    src="src\assets\Apptosacc-Powder.jpg"
                    alt=""
                    className="w-full h-60 sm:h-72 cursor-pointer"
                  />
                  <div className="text-center text-xl font-semibold py-3 px-5 cursor-pointer text-black hover:text-white transition">
                    ({FeedSupplementInfo.images.length})
                  </div>
                </div>

                {/* Description Column */}
                <div className="w-full lg:w-1/1 px-0 lg:px-10 text-blue-500">
                  <Link
                    to="/productsCatregory"
                    state={{
                      category: "Feed Supplement",
                      data: FeedSupplementInfo,
                    }}
                    className="text-2xl sm:text-3xl font-bold hover:text-black cursor-pointer"
                  >
                    Feed Supplement
                  </Link>
                  <hr className="my-2 border-gray-300" />
                  <div className="pt-4">
                    <ProductList list={FeedSupplementInfo} />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end pr-3">
                <Link
                  to="/productsCatregory"
                  state={{
                    category: "Feed Supplement",
                    data: FeedSupplementInfo,
                  }}
                  className=" text-white bg-red-600 text-xl rounded-xl px-4 py-2 border border-red-600 hover:bg-red-800 hover:border-red-800 transition cursor-pointer"
                >
                  ...More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
