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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Jimmy"
              required
              // value={firstName}
              // onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Testington"
              required
              // value={lastName}
              // onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 "
              placeholder="Panels"
              required
              // value={panel}
              // onChange={(e) => setPanel(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Chavan Vishal"
            required
            //   value={observedBy}
            //   onChange={(e) => setObservedBy(e.target.value)}
          />
        </div>

        <button
          // onClick={handleAddUser}
          type="submit"
          className="text-white bg-[#15d4ce] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#15d4ce] dark:hover:bg-[#15d4ce] dark:focus:ring-[#15d4ce]"
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default Reports;
