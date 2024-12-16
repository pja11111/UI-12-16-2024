import React from "react";

const Monero = () => {
    return (
      <div className="w-[350px] h-[250px] border border-gray-600 shadow-lg rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gray-700 text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
          <img
            src="https://cryptologos.cc/logos/monero-xmr-logo.png"
            alt="Monero Logo"
            className="mr-2 h-6"
          />
          <span>Monero</span>
        </div>
  
        {/* Content */}
        <div className="p-0.5 flex-grow">
          <table className="table-fixed border-collapse border border-gray-300 w-full text-sm">
            <tbody>
              {/* Row 1 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
                  Pool Hashrate
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
                  1,174,368.7 kH/s
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
                  Miners Count
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
                  2,379
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
                  Price
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
                  2.05mB $205.06
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Additional Info */}
        <div className="bg-white border pb-3 px-0.5">
          <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li>Payouts 0.11 - 10 XMR</li>
              <li>Algorithm RandomX</li>
            </ul>
          </div>
  
          {/* Footer Buttons */}
          <div className="flex gap-x-4 py-1 justify-center items-center mt-auto px-4 bg-white">
            <button className="w-1/2 py-2.5 text-xs bg-gray-700 text-white font-medium hover:bg-gray-800 transition rounded">
              Quick Start
            </button>
            <button className="w-1/2 py-2.5 text-xs bg-gray-700 text-white font-medium hover:bg-gray-800 transition rounded">
              Overview
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Monero;