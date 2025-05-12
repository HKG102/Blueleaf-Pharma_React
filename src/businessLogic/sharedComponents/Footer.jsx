import React from "react";
import mapBg from "/assets/map-bg.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="text-white px-6 py-12 md:px-20 lg:px-40"
        style={{ backgroundColor: "#023268" }}
      >
        <div
          className="bg-no-repeat bg-right bg-contain"
          style={{ backgroundImage: `url(${mapBg})` }}
        >
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Contact Details + Buttons */}
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Contact Details
              </h2>
              <div className="font-bold">BLUE LEAF PHARMA</div>
              <div>GST : 09AAWFB2543F1Z9</div>
              <div className="mt-2">
                House No. 22, F Block, Pallav Puram Phase 1, Modipuram,<br />
                Meerut - 250110, Uttar Pradesh, India
              </div>
              <div className="mt-2">
                <span className="font-bold">Phone:</span> 09319775620
              </div>

              {/* Buttons under contact (always together) */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/contact">
                  <button className="w-full sm:w-auto bg-white text-black font-semibold py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    SEND INQUIRY
                  </button>
                </Link>
                <button className="w-full sm:w-auto bg-white text-black font-semibold py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  SEND SMS
                </button>
              </div>
            </div>

            {/* Manager Info */}
            <div className="flex-1">
              <p className="font-bold">Mr. M L GUPTA (Manager)</p>
              <p className="mt-2">
                <span className="font-bold">Mobile:</span>{" "}
                <a href="tel:09319775620" className="underline">
                  09319775620
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Links */}
      <div className="p-4 text-center text-black bg-gray-100">
        <div className="flex flex-wrap justify-center gap-4 text-base md:text-xl">
          <Link to="/" className="hover:underline">
            Home Page
          </Link>
          <Link to="/about" className="hover:underline">
            Company Profile
          </Link>
          <Link to="/products" className="hover:underline">
            Our Products
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/siteMap" className="hover:underline">
            Site Map
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
