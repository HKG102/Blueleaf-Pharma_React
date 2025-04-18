import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PharmaceuticalProductsInfo from "../Data/PharmaceuticalProductInfo";

function CategoriesProduct() {
  const location = useLocation();
  const { category, data } = location.state || {};

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold m-5">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 py-10">
        {data?.images.map((image, index) => (
          <div
            key={index}
            className="p-4 rounded shadow-2xl bg-white flex flex-col lg:flex-row items-start gap-2"
          >
            <div className="w-full">
              <Link
                to={`/${image.id}`}
                state={{
                  data: image
                }}
                className="w-full text-3xl cursor-pointer text-blue-600"
              >
                {image.description}
              </Link>
              <div className="flex lg:w-full md:w-1/2">
                <img
                  src={image.url}
                  alt={image.description}
                  className="h-70 rounded-lg mt-5"
                />
                <div className="pt-5 pl-5">
                  <div className="text-lg">
                    Supply Ability:
                    <span className="text-gray-500"> {image.supply} </span>
                  </div>
                  <div className="text-lg pt-2">
                    Storage Instructions:
                    <span className="text-gray-500"> {image.storage} </span>
                  </div>
                  <div className="text-lg pt-2">
                    Drug Type:
                    <span className="text-gray-500"> {image.drugType} </span>
                  </div>
                  <div className="text-lg pt-2">
                    Physical Form:
                    <span className="text-gray-500">
                      {" "}
                      {image.physicalForm}{" "}
                    </span>
                  </div>
                  <div className="text-xl font-bold pt-30">
                    Price:
                    <span className="">
                      {" "}
                      {image.price} INR/{image.type}{" "}
                    </span>
                  </div>
                  <div className="pt-5">
                    <button className=" text-white bg-red-800 text-lg rounded-lg px-6 py-3 border border-red-800 hover:bg-red-600 hover:border-red-600 transition cursor-pointer">
                      SEND INQUIRY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesProduct;
