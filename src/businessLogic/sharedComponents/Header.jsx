import React from "react";
import { Link } from "react-router-dom";

function header() {
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
          <div
            className="m-2 px-2 rounded-xl flex items-center h-10"
            style={{ backgroundColor: "#ffc600" }}
          >
            <img  className="ml-7" src="src\assets\send-inq.png" alt="inquery-icon" />
            <div className="ml-2 text-xl text-black"> Send Inquiry</div>
          </div>
        </div>
      </nav>
      <div className="p-4 bg-blue-600 text-white flex justify-between">
        <div className="px-15">
          <Link to="/" className="text-xl mx-2 hover:text-blue-300">
            Home Page
          </Link>
          <Link to="/about" className="text-xl px-5 hover:text-blue-300">
            Company Profile
          </Link>
          <Link to="/products" className="text-xl px-5 hover:text-blue-300">
            Our Products
          </Link>
          <Link to="/contact" className="text-xl px-5 hover:text-blue-300">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default header;
