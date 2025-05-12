import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CompanyProfile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-40 py-8">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
        Company Profile
      </h1>

      <p className="text-justify text-base sm:text-lg mb-10">
        Headquartered in Meerut, Uttar Pradesh, we, Blue Leaf Pharma is a young
        and dynamic company with a keen desire to excel in the industry and
        reach the pinnacle of success in pharmaceutical products. We are a
        reliable manufacturer and supplier offering a wide range of products
        such as Kentaliv 100 Ml Injection, Bluprox P Injection 100ml, Estrumin 7
        Bolus Injection, Moxicruz Injection 300 Mg, Apptosacc Tablet and many
        more. Our Quality Control department always tests the raw materials and
        finished products for their quality and only after they meet the
        required criterion, they are sent for the next process.
      </p>

      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Key Facts of Blue Leaf Pharma
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm sm:text-base">
          <tbody className="divide-y divide-gray-300">
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">Nature of Business</td>
              <td className="px-4 py-3">Manufacturer, Supplier</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">Year of Establishment</td>
              <td className="px-4 py-3">2020</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">Location</td>
              <td className="px-4 py-3">Meerut, Uttar Pradesh, India</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">No. of Employees</td>
              <td className="px-4 py-3">9</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">GST Number</td>
              <td className="px-4 py-3">09AAWFB2543F1Z9</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">Membership & Affiliation</td>
              <td className="px-4 py-3">MSME</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">Shipment Mode</td>
              <td className="px-4 py-3">Road Transport</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-3 font-bold">Mode of Payment</td>
              <td className="px-4 py-3">Online Payments (NEFT/RTGS/IMPS)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyProfile;
