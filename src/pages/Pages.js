import React from "react";
import Zephyr from "../components/Zephyr";
import EthereumClassic from "../components/EthereumClassic";
import Monero from "../components/Monero";
import Raven from "../components/Raven";
import Conflux from "../components/Conflux";
import Ergo from "../components/Ergo";

// const Zephyr = () => {
//   return (
//     <div className="w-[350px] h-[250px] border border-blue-600 shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-blue-600 text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-dMK4YDZah7SVCDyIo85jP0rJ_IevV6LlA&s"
//           alt="Zephyr Logo"
//           className="mr-2 h-6"
//         />
//         <span>Zephyr</span>
//       </div>

//       {/* Content */}
//       <div className="p-0.5 flex-grow">
//         <table className="table-fixed border-collapse border border-gray-300 w-full text-sm ml-0 mr-0">
//           <tbody>
//             {/* Row 1 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Pool Hashrate
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 70,355.0 kH/s
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Miners Count
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 128
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Price
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 0.03mB $3.11
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Additional Info */}
//       <div className="bg-white border pb-11 px-0.5">
//         <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
//           <ul className="list-disc list-inside text-gray-700 pl-4">
//             <li>Payouts 0.1 - 50 ZEPH</li>
//             <li>Algorithm RandomX</li>
//           </ul>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex gap-x-9 py-1 justify-center items-center mt-auto px-4 bg-gray-100">
//           <button className="w-1/2 py-2.5 text-xs bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded">
//             Quick Start
//           </button>
//           <button className="w-1/2 py-2.5 text-xs bg-blue-600 text-white font-medium hover:bg-blue-700 transition rounded">
//             Overview
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const EthereumClassic = () => {
//   return (
//     <div className="w-[350px] h-[250px] border border-green-600 shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-green-600 text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMisNKM0xCM4IvQrDwDX0GwGArwR8CBbq88g&s" // Replace with actual logo
//           alt="Ethereum Classic Logo"
//           className="mr-2 h-6"
//         />
//         <span>Ethereum Classic</span>
//       </div>

//       {/* Content */}
//       <div className="p-0.5 flex-grow">
//         <table className="table-fixed border-collapse border border-gray-300 w-full text-sm ml-0 mr-0">
//           <tbody>
//             {/* Row 1 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Pool Hashrate
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 430.0 Gh/s
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Miners Count
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 918
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Price
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 0.33mB $33.84
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Additional Info */}
//       <div className="bg-white border pb-3 px-0.5">
//         <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
//           <ul className="list-disc list-inside text-gray-700 pl-4">
//             <li>Payouts 0.1 - 100 ETC</li>
//             <li>Algorithm Etchash</li>
//           </ul>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex gap-x-4 py-1 justify-center items-center mt-auto px-4 bg-white">
//           <button className="w-1/2 py-2.5 text-xs bg-green-600 text-white font-medium hover:bg-green-700 transition rounded">
//             Quick Start
//           </button>
//           <button className="w-1/2 py-2.5 text-xs bg-green-600 text-white font-medium hover:bg-green-700 transition rounded">
//             Overview
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Monero = () => {
//   return (
//     <div className="w-[350px] h-[250px] border border-gray-600 shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-gray-700 text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
//         <img
//           src="https://cryptologos.cc/logos/monero-xmr-logo.png"
//           alt="Monero Logo"
//           className="mr-2 h-6"
//         />
//         <span>Monero</span>
//       </div>

//       {/* Content */}
//       <div className="p-0.5 flex-grow">
//         <table className="table-fixed border-collapse border border-gray-300 w-full text-sm">
//           <tbody>
//             {/* Row 1 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
//                 Pool Hashrate
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
//                 1,174,368.7 kH/s
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
//                 Miners Count
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
//                 2,379
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
//                 Price
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
//                 2.05mB $205.06
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Additional Info */}
//       <div className="bg-white border pb-3 px-0.5">
//         <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
//           <ul className="list-disc list-inside text-gray-700 pl-4">
//             <li>Payouts 0.11 - 10 XMR</li>
//             <li>Algorithm RandomX</li>
//           </ul>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex gap-x-4 py-1 justify-center items-center mt-auto px-4 bg-white">
//           <button className="w-1/2 py-2.5 text-xs bg-gray-700 text-white font-medium hover:bg-gray-800 transition rounded">
//             Quick Start
//           </button>
//           <button className="w-1/2 py-2.5 text-xs bg-gray-700 text-white font-medium hover:bg-gray-800 transition rounded">
//             Overview
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Raven = () => {
//   return (
//     <div className="w-[350px] h-[250px] border border-[#404080] shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-[#404080] text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
//         <img
//           src="https://cryptologos.cc/logos/ravencoin-rvn-logo.png"
//           alt="Raven Logo"
//           className="mr-2 h-6"
//         />
//         <span>Raven</span>
//       </div>

//       {/* Content */}
//       <div className="p-0.5 flex-grow">
//         <table className="table-fixed border-collapse border border-gray-300 w-full text-sm">
//           <tbody>
//             {/* Row 1 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
//                 Pool Hashrate
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
//                 258.2 Gh/s
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
//                 Miners Count
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
//                 1,024
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left">
//                 Price
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left">
//                 0.26mɃ $28.29
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Additional Info */}
//       <div className="bg-white border pb-2 px-0.5">
//         <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
//           <ul className="list-disc list-inside text-gray-700 pl-4">
//             <li>Payouts 50 - 50000 RVN</li>
//             <li>Algorithm KAWPOW</li>
//           </ul>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex gap-x-9 py-1 justify-center items-center mt-auto px-4 bg-gray-100">
//           <button className="w-1/2 py-2.5 text-xs bg-[#404080] text-white font-medium hover:bg-[#2c2c80] transition rounded">
//             Quick Start
//           </button>
//           <button className="w-1/2 py-2.5 text-xs bg-[#404080] text-white font-medium hover:bg-[#2c2c80] transition rounded">
//             Overview
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Conflux = () => {
//   return (
//     <div className="w-[350px] h-[250px] border border-sky-500 shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-sky-500 text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
//         <img
//           src="https://avatars.githubusercontent.com/u/46887720?s=200&v=4"
//           alt="Ergo Logo"
//           className="mr-2 h-6"
//         />
//         <span>Conflux</span>
//       </div>

//       {/* Content */}
//       <div className="p-0.5 flex-grow">
//         <table className="table-fixed border-collapse border border-gray-300 w-full text-sm ml-0 mr-0">
//           <tbody>
//             {/* Row 1 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Pool Hashrate
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 70,355.0 kH/s
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Miners Count
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 128
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Price
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 0.03mB $3.11
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Additional Info */}
//       <div className="bg-white border pb-11 px-0.5">
//         <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
//           <ul className="list-disc list-inside text-gray-700 pl-4">
//             <li>Payouts 0.1 - 50 ZEPH</li>
//             <li>Algorithm RandomX</li>
//           </ul>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex gap-x-9 py-1 justify-center items-center mt-auto px-4 bg-gray-100">
//           <button className="w-1/2 py-2.5 text-xs bg-sky-500 text-white font-medium hover:bg-blue-700 transition rounded">
//             Quick Start
//           </button>
//           <button className="w-1/2 py-2.5 text-xs bg-sky-500  text-white font-medium hover:bg-blue-700 transition rounded">
//             Overview
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Ergo = () => {
//   return (
//     <div className="w-[350px] h-[250px] border border-bg-black shadow-lg rounded-lg overflow-hidden flex flex-col">
//       {/* Header */}
//       <div className="bg-black text-white py-2 px-4 text-lg font-semibold flex items-center justify-center">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvdRKqpoN1Y6XBa0W-YbcpvOoYZauK8wpmaw&s"
//           alt="Ergo Logo"
//           className="mr-2 h-6"
//         />
//         <span>Ergo</span>
//       </div>

//       {/* Content */}
//       <div className="p-0.5 flex-grow">
//         <table className="table-fixed border-collapse border border-gray-300 w-full text-sm ml-0 mr-0">
//           <tbody>
//             {/* Row 1 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Pool Hashrate
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 70,355.0 kH/s
//               </td>
//             </tr>
//             {/* Row 2 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Miners Count
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 128
//               </td>
//             </tr>
//             {/* Row 3 */}
//             <tr className="border-t">
//               <td className="border border-gray-300 px-2 py-1 font-medium text-gray-800 text-left pl-2">
//                 Price
//               </td>
//               <td className="border border-gray-300 px-2 py-1 text-gray-700 text-left pl-2">
//                 0.03mB $3.11
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Additional Info */}
//       <div className="bg-white border pb-11 px-0.5">
//         <div className="bg-gray-100 border border-gray-300 p-2 rounded-md">
//           <ul className="list-disc list-inside text-gray-700 pl-4">
//             <li>Payouts 0.1 - 50 ZEPH</li>
//             <li>Algorithm RandomX</li>
//           </ul>
//         </div>

//         {/* Footer Buttons */}
//         <div className="flex gap-x-9 py-1 justify-center items-center mt-auto px-4 bg-gray-100">
//           <button className="w-1/2 py-2.5 text-xs bg-black text-white font-medium hover:bg-blue-700 transition rounded">
//             Quick Start
//           </button>
//           <button className="w-1/2 py-2.5 text-xs bg-black text-white font-medium hover:bg-blue-700 transition rounded">
//             Overview
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const Pages = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 pt-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2 text-gray-700">
        Welcome To Nanopool
      </h1>

      {/* Card Containe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white rounded-md">
        <Zephyr />
        <EthereumClassic />
        <Monero />
        <Raven />
        <Conflux />
        <Ergo />
      </div>
    </div>
  );
};

export default Pages;
