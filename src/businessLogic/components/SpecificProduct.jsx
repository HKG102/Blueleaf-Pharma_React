import React from "react";
import { useLocation } from "react-router-dom";

function SpecificProduct() {
  const location = useLocation();
  console.log(location);
  const { data } = location.state || {};
  console.log(data);
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 ">
        <div className="p-10 rounded shadow-2xl bg-white lg:flex-row items-start gap-6">
          <div className="lg:w-1/1 flex flex-row">
            <div className="w-1/2">
              <img
                src={data.url}
                alt={data.description}
                className=" rounded-lg w-full"
              />
            </div>

            <div className="w-1/2 pl-20 flex flex-col">
              <div className="text-3xl">{data.description}</div>
              <hr className="text-gray-200"/>
              <div className="flex flex-row pt-4">
                <div className="text-2xl text-blue-500">{data.price}INR/{data.type}</div>
                <button className="ml-4 border border-red-500 rounded-lg hover:bg-red-700 hover:border-red-700 hover:text-white p-2 cursor-pointer">Get a Price/Quote </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecificProduct;
