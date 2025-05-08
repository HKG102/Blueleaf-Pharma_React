import React, { useEffect, useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { useLocation } from "react-router-dom";

function ContactUs() {
  const [countryCode, setCountryCode] = useState("+91");
  const isIndia = countryCode === "+91";
  const [description, setDescription] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <img
        src="/assets/template_photo_contact-us.jpg"
        alt="Contact Us"
        className="w-full h-48 sm:h-64 md:h-80 lg:h-80 rounded-lg mt-4"
      />

      <div className="py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left Side - Contact Details */}
          <div className="w-full lg:w-1/2 xl:w-1/3">
            <h2 className="text-3xl font-bold text-zinc-600 mb-6 underline underline-offset-4 decoration-blue-500 decoration-3">
              Contact Details
            </h2>

            <div className="flex items-start gap-3 mb-4">
              <MdOutlinePerson className="text-2xl mt-1" />
              <div>
                <p className="text-xl font-medium">Mr M L GUPTA</p>
                <p className="text-sm text-gray-500">Manager</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <FaMobileScreenButton className="text-2xl mt-1" />
              <p className="text-xl">Mobile: 09319775620</p>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <CiLocationArrow1 className="text-3xl mt-1" />
              <p className="text-xl">
                House No. 22, F Block, Pallav Puram Phase 1 Modipuram,
                Meerut-250110, Uttar Pradesh, India
              </p>
            </div>

            <div className="flex items-start ml-6 mb-4">
              <button className="text-blue-900 text-xl rounded-xl px-6 py-3 border border-blue-900 transition cursor-pointer">SEND SMS</button>
            </div>  
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="p-6 bg-white shadow-2xl rounded-2xl">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Contact Us
              </h2>

              <div className="flex flex-wrap gap-3 mb-4">
                <button onClick={()=>setDescription("Could you please send me a quotation for the items listed below?")} className="bg-yellow-50 text-black text-sm rounded-2xl px-4 py-2 border border-gray-300 hover:bg-yellow-100 transition cursor-pointer">
                  Get Quotation
                </button>
                <button onClick={()=>setDescription("Can you provide me with the latest price list for your products?")} className="bg-yellow-50 text-black text-sm rounded-2xl px-4 py-2 border border-gray-300 hover:bg-yellow-100 transition cursor-pointer">
                  Get Price List
                </button>
                <button onClick={()=>setDescription("I would like to discuss my requirements in detail. Can we set up a time to talk?")} className="bg-yellow-50 text-black text-sm rounded-2xl px-4 py-2 border border-gray-300 hover:bg-yellow-100 transition cursor-pointer">
                  Discuss Requirement
                </button>
              </div>

              <div className="space-y-6">
                <div className="relative ">
                  <textarea
                    id="label"
                    placeholder=" "
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="peer w-full px-4 pt-6 py-2 border bg-yellow-50 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <label
                    htmlFor="label"
                    className="absolute left-4 top-2 text-gray-500 bg-yellow-50 text-sm transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 px-1"
                  >
                    Enter Label / Description
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="px-3 py-2 h-14 cursor-pointer border bg-yellow-50 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/3"
                  >
                    <option value="+91">India (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">Australia (+61)</option>
                  </select>

                  <div className="relative w-full">
                    <input
                      id="mobile"
                      type={isIndia ? "number" : "email"}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 border bg-yellow-50 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="mobile"
                      className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                                peer-placeholder-shown:top-1 
                                peer-placeholder-shown:text-base 
                                peer-placeholder-shown:text-gray-400 
                                peer-focus:top-0 
                                peer-focus:text-sm 
                                peer-focus:text-blue-500 
                                bg-yellow-50 px-1"
                    >
                      {isIndia ? "Enter Mobile Number" : "Enter Email"}
                    </label>
                  </div>
                </div>

                <button className="w-full bg-gray-800 font-bold text-white py-2 rounded-xl hover:bg-gray-700 transition cursor-pointer">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
