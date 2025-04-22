import React from "react";
import mapBg from "../../assets/map-bg.png"; // Import the image
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Footer() {
  return (
    <>
      <footer
        className="text-white py-20 px-40"
        style={{ backgroundColor: "#023268" }}
      >
        <div
          className="container mx-auto"
          style={{
            backgroundImage: `url(${mapBg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "Right",
            height: "100%",
          }} // Use the imported image
        >
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6">
              <h2 className="text-3xl font-bold items-start mb-10">
                Contact Details
              </h2>
              <div className="font-bold">BLUE LEAF PHARMA</div>
              <div>GST : 09AAWFB2543F1Z9</div>
              <div>
                House No. 22, F Block, Pallav Puram Phase 1 Modipuram, Meerut -
                250110, Uttar Pradesh, India
              </div>
              <div>
                <span className="font-bold">Phone :</span> 09319775620
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-6">
              <p className="font-bold mt-18">Mr M L GUPTA (Manager)</p>
              <p>
                <span className="font-bold">Mobile:</span>{" "}
                <a href="tel:09319775620">09319775620</a>
              </p>
            </div>

            <div className="flex flex-row">
              <Link to='/contact'>
                <button className="bg-white font-semibold text-neutral-950 py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
                  SEND INQUIRY
                </button>
              </Link>

              <button className="ml-4 bg-white  font-semibold text-neutral-950 py-3 px-5 rounded-lg hover:bg-blue-600 hover:text-white transition cursor-pointer">
                SEND SMS
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="p-4 text-black flex justify-center">
        <div className="px-15">
          <Link to="/" className="text-xl mx-2 hover:underline">
            Home Page
          </Link>
          <Link to="/about" className="text-xl px-5 hover:underline">
            Company Profile
          </Link>
          <Link to="/products" className="text-xl px-5 hover:underline">
            Our Products
          </Link>
          <Link to="/contact" className="text-xl px-5 hover:underline">
            Contact Us
          </Link>
          <Link to="/siteMap" className="text-xl px-5 hover:underline">
            Site Map
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
