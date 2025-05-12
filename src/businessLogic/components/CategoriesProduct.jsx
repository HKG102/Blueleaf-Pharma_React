import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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
    <div className="px-4 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">{category}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.images.map((image, index) => (
          <div
            key={index}
            className="p-4 rounded shadow-2xl bg-white gap-4"
          >
            <Link
              to={`/${image.id}`}
              state={{ data: image }}
              className="text-xl sm:text-2xl text-blue-600 hover:underline"
            >
              {image.description}
            </Link>

            <div className="flex flex-col sm:flex-row w-full">
              <div className="flex-shrink-0 sm:w-1/2 w-full">
                <img
                  src={image.url}
                  alt={image.description}
                  className="w-full h-auto rounded-lg mt-4"
                />
              </div>

              <div className="sm:pl-5 pt-4 sm:pt-0 flex-grow">
                <div className="text-base sm:text-lg mb-2">
                  <strong>Supply Ability:</strong>{" "}
                  <span className="text-gray-500">{image.supply}</span>
                </div>
                <div className="text-base sm:text-lg mb-2">
                  <strong>Storage Instructions:</strong>{" "}
                  <span className="text-gray-500">{image.storage}</span>
                </div>
                <div className="text-base sm:text-lg mb-2">
                  <strong>Drug Type:</strong>{" "}
                  <span className="text-gray-500">{image.drugType}</span>
                </div>
                <div className="text-base sm:text-lg mb-2">
                  <strong>Physical Form:</strong>{" "}
                  <span className="text-gray-500">{image.physicalForm}</span>
                </div>
                <div className="text-lg sm:text-xl font-bold mt-4">
                  <strong>Price:</strong>{" "}
                  {image.price} INR/{image.type}
                </div>
                <div className="mt-6">
                  <Link to="/contact">
                    <button className="w-full sm:w-auto bg-red-800 text-white text-base sm:text-lg rounded-lg px-6 py-3 border border-red-800 hover:bg-red-600 hover:border-red-600 transition">
                      SEND INQUIRY
                    </button>
                  </Link>
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
