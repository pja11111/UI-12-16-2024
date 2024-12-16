const Raven = () => {
    return (
      <div className="w-[350px] h-[250px] border border-[#404080] shadow-lg rounded-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#404080] text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
          <img
            src="https://cryptologos.cc/logos/ravencoin-rvn-logo.png"
            alt="Raven Logo"
            className="mr-2 h-6"
          />
          <span>Raven</span>
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
                  258.2 Gh/s
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
                  Miners Count
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
                  1,024
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-t">
                <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
                  Price
                </td>
                <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
                  0.26mɃ $28.29
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Additional Info */}
        <div className="bg-white border pb-2 px-0.5">
          <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
            <ul className="list-disc list-inside text-gray-700 pl-4">
              <li>Payouts 50 - 50000 RVN</li>
              <li>Algorithm KAWPOW</li>
            </ul>
          </div>
  
          {/* Footer Buttons */}
          <div className="flex gap-x-9 py-1 justify-center items-center mt-auto px-4 bg-gray-100">
            <button className="w-1/2 py-2.5 text-xs bg-[#404080] text-white font-medium hover:bg-[#2c2c80] transition rounded">
              Quick Start
            </button>
            <button className="w-1/2 py-2.5 text-xs bg-[#404080] text-white font-medium hover:bg-[#2c2c80] transition rounded">
              Overview
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Raven;
