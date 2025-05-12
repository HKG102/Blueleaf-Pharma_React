import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMinus, FaPlus, FaBars, FaTimes } from "react-icons/fa";
import PharmaceuticalProductsInfo from "../Data/PharmaceuticalProductInfo";
import FeedSupplementInfo from "../Data/FeedSupplementInfo.json";

function Header() {
  const [hover, setHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation(); // 👈 to detect route change
  const menuRef = useRef(); // 👈 to detect outside click

  // ✅ Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setProductMenuOpen(false);
  }, [location]);

  // ✅ Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setProductMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <nav className="bg-blue-600 text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2">
        <div className="flex items-center">
          <Link to="/">
            <img src="/assets/logo.jpg" className="w-20" alt="Company Logo" />
          </Link>
          <div className="ml-3">
            <div className="text-lg md:text-2xl font-bold">BLUE LEAF PHARMA</div>
            <div className="text-sm">GST : 09AAWFB2543F1Z9</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
          <div className="px-3 py-1 rounded-xl flex items-center mb-2 md:mb-0 md:mr-4" style={{ backgroundColor: "#044a96" }}>
            <div className="text-sm md:text-base">Call: 09319775620</div>
          </div>
          <Link to="/contact" className="px-3 py-1 rounded-xl flex items-center bg-yellow-400 text-black text-sm md:text-base">
            <img src="/assets/send-inq.png" alt="inquiry" className="w-5 h-5 mr-2" />
            Send Inquiry
          </Link>
        </div>
      </nav>

      {/* Mobile Toggle */}
      <div className="bg-blue-600 text-white px-4 py-2 flex justify-between md:hidden">
        <div className="text-xl font-semibold">Menu</div>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        ref={menuRef}
        className={`bg-blue-600 text-white md:flex justify-center md:space-x-6 p-4 md:p-0 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" className="block px-3 py-2 hover:text-blue-300 text-lg">
          Home Page
        </Link>
        <Link to="/about" className="block px-3 py-2 hover:text-blue-300 text-lg">
          Company Profile
        </Link>

        {/* Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => !isMobile && setHover(true)}
          onMouseLeave={() => !isMobile && setHover(false)}
          onClick={() => isMobile && setProductMenuOpen((prev) => !prev)}
        >
          <div className="flex items-center px-3 py-2 cursor-pointer text-lg hover:text-blue-300">
            Our Products
            <span className="ml-2">{(hover || productMenuOpen) ? <FaMinus /> : <FaPlus />}</span>
          </div>
          {(hover || productMenuOpen) && (
            <div className="absolute md:left-0 top-full bg-white text-black rounded shadow-lg w-52 z-50">
              <Link
                to="/productsCatregory"
                state={{ category: "Pharmaceutical Injection", data: PharmaceuticalProductsInfo }}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Pharmaceutical Injection
              </Link>
              <Link
                to="/productsCatregory"
                state={{ category: "Feed Supplement", data: FeedSupplementInfo }}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Feed Supplement
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="block px-3 py-2 hover:text-blue-300 text-lg">
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Header;
