import React from "react";

const Reports = () => {
  return (
    <div className="w-[70%]">
      <p className="text-[23px] font-bold text-black pt-[2%] pl-[2%]">
        Reports
      </p>
      <form className="pl-[2%] mt-[2%]">
        <div className="mb-6">
          <select
            className="bg-gray-200  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Status"
          >
            <option value="select">Select Report Type</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4"> Option 4</option>
          </select>
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <input
              type="text"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 bg-gray-200"
              placeholder="Start Date"
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Due Date"
              required
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <select
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 bg-gray-200"
              placeholder="Agency"
              required
            >
              <option value="select">Agency</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4"> Option 4</option>
            </select>
          </div>
          <div>
            <select
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 bg-gray-200"
              placeholder="Agency"
              required
            >
              <option value="select">Select Format</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4"> Option 4</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <span className="flex text-[16px] font-bold text-gray-700">
              {" "}
              Use Date
            </span>
            <span className="flex mt-[5%]">
              <input type="radio" value="HTML" className="bg-[15d4ce]" />
              <label className=" ml-[3%]">Collected</label>
            </span>
            <br></br>
          </div>
        </div>
        <div className=" rounded shadow-lg flex pt-[2%] pb-[2%] pr-[1%] justify-end">
          <button
            type="submit"
            className="text-white bg-[#15d4ce] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#15d4ce] dark:hover:bg-[#15d4ce] dark:focus:ring-[#15d4ce] flex"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reports;
