import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

function Header() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <nav className=" bg-blue-600 text-white flex justify-between">
        <div className="flex items-start px-10 py-1">
          <img src="src\assets\logo.jpg" className="w-25" alt="Company Logo" />
          <div className="m-5">
            <div className="text-2xl font-bold">BLUE LEAF PHARMA</div>
            <div>GST : 09AAWFB2543F1Z9</div>
          </div>
        </div>
        <div>
          <div
            className=" m-2 px-2 rounded-xl flex items-center h-10"
            style={{ backgroundColor: "#044a96" }}
          >
            <div className="p-4 text-xl"> Call : 08071931416</div>
          </div>
          <Link
            to="/contact"
            className="m-2 px-2 rounded-xl flex items-center h-10 cursor-pointer"
            style={{ backgroundColor: "#ffc600" }}
          >
            <img
              className="ml-7"
              src="src\assets\send-inq.png"
              alt="inquery-icon"
            />
            <div className="ml-2 text-xl text-black"> Send Inquiry</div>
          </Link>
        </div>
      </nav>

      <div className="relative">
        <div className="p-4 bg-blue-600 text-white flex justify-between">
          <div className="px-15 flex space-x-6 items-center">
            <Link to="/" className="text-xl hover:text-blue-300">
              Home Page
            </Link>

            <Link to="/about" className="text-xl hover:text-blue-300">
              Company Profile
            </Link>

            {/* Dropdown Trigger */}
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="relative"
            >
              <div className="text-xl px-5 cursor-pointer hover:text-blue-300 inline-flex items-center">
                <Link to="/products">Our Products</Link>
                <span className="ml-2">{hover ? <FaMinus /> : <FaPlus />}</span>
              </div>

              {/* Dropdown Menu */}
              {hover && (
                <div className="absolute left-0 top-full mt-1 bg-white text-black rounded shadow-lg w-52 z-50">
                  <Link
                    to="/products/product1"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Product 1
                  </Link>
                  <Link
                    to="/products/product2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Product 2
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-xl px-5 hover:text-blue-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
