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
    <div>
      <div className="flex flex-col items-center justify-center text-2xl py-10">
        Company Profile
      </div>
      <div className="flex flex-col items-center justify-center text-xl pb-10 px-50">
        Headquartered in Meerut, Uttar Pradesh, we, Blue Leaf Pharma is a young
        and dynamic company with a keen desire to excel in the industry and
        reach the pinnacle of success in pharmaceutical products. We are a
        reliable manufacturer and supplier offering a wide range of products
        such as Kentaliv 100 Ml Injection, Bluprox P Injection 100ml, Estrumin 7
        Bolus Injection, Moxicruz Injection 300 Mg, Apptosacc Tablet and many
        more. Our Quality Control department always tests the raw materials and
        finished products for their quality and only after they meet the
        required criterion, they are sent for the next process.
      </div>
      <div className="flex flex-col justify-center text-xl font-bold pb-10 px-50">
        Key Facts of Blue Leaf Pharma
      </div>

      <div className="overflow-x-auto px-50 pb-10">
        <table className="min-w-full border border-gray-300 text-l">
          <tbody className="divide-y divide-gray-300">
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">Nature of Business</td>
              <td className="px-6 py-4">Manufacturer, Supplier</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">Year of Establishment</td>
              <td className="px-6 py-4">2020</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">Location</td>
              <td className="px-6 py-4">Meerut, Uttar Pradesh, India</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">No. of Employees</td>
              <td className="px-6 py-4">9</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">GST Number</td>
              <td className="px-6 py-4">09AAWFB2543F1Z9</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">Membership & Affiliation</td>
              <td className="px-6 py-4">MSME</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">Shipment Mode</td>
              <td className="px-6 py-4">	
              Road Transport</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="px-6 py-4 font-bold">Mode of Payment</td>
              <td className="px-6 py-4">Online Payments (NEFT/RTGS/IMPS)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyProfile;
