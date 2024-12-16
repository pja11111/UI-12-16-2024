import React from "react";

const EthereumClassic = () => {
    return (
      <div className="w-[350px] h-[250px] border border-green-600 shadow-lg rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-green-600 text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMisNKM0xCM4IvQrDwDX0GwGArwR8CBbq88g&s" // Replace with actual logo
            alt="Ethereum Classic Logo"
            className="mr-2 h-6"
          />
          <span>Ethereum Classic</span>
        </div>
  
        {/* Content */}
        <div className="p-0.5 flex-grow">
          <table className="table-fixed border-collapse border border-gray-300 w-full text-sm ml-0 mr-0">
            <tbody>
              {/* Row 1 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
                  Pool Hashrate
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
                  430.0 Gh/s
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
                  Miners Count
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
                  918
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
                  Price
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
                  0.33mB $33.84
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Additional Info */}
        <div className="bg-white border pb-3 px-0.5">
          <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li>Payouts 0.1 - 100 ETC</li>
              <li>Algorithm Etchash</li>
            </ul>
          </div>
  
          {/* Footer Buttons */}
          <div className="flex gap-x-4 py-1 justify-center items-center mt-auto px-4 bg-white">
            <button className="w-1/2 py-2.5 text-xs bg-green-600 text-white font-medium hover:bg-green-700 transition rounded">
              Quick Start
            </button>
            <button className="w-1/2 py-2.5 text-xs bg-green-600 text-white font-medium hover:bg-green-700 transition rounded">
              Overview
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default EthereumClassic;