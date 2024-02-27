import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../src/redux/actions";

const UpdateUserForm = ({ oldUserId }) => {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(oldUserId);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPanel, setNewPanel] = useState("");
  const [newSource, setNewSource] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newObservedBy, setNewObservedBy] = useState("");
  const [newStatus, setNewStatus] = useState("");


  const handleUpdateUser = () => {
    const user = {
      id: parseInt(userId, 10),
      firstName: newFirstName,
      lastName: newLastName,
      panel: newPanel,
      source: newSource,
      date: newDate,
      amount: newAmount,
      observedBy: newObservedBy,
      status: newStatus,
    };
    dispatch(updateUser(user));
    setUserId("");
    setNewFirstName("");
    setNewLastName("");
    setNewPanel("");
    setNewSource("");
    setNewDate("");
    setNewAmount("");
    setNewObservedBy("");
    setNewStatus("");
  };

  return (
    <div>
      <form>
        <h1 className="text-gray-900 text-center mb-[4%]">Update Order</h1>
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              placeholder="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              First name
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="Jimmy"
              required
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
          </div>
          <div>
            <label
              placeholder="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Testington"
              required
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
          </div>
          <div>
            <label
              placeholder="Panels"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Panels
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-gray-600 "
              placeholder="Panels"
              required
              value={newPanel}
              onChange={(e) => setNewPanel(e.target.value)}
            />
          </div>
          <div>
            <label
              placeholder="Source"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Source
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Source"
              required
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
            />
          </div>
          <div>
            <label
              placeholder="Date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="01-01-2024"
              required
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div>
            <label
              placeholder="Amount"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Amount $
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="0"
              required
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            placeholder="Observed By"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Observed By
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Chavan Vishal"
            required
            value={newObservedBy}
            onChange={(e) => setNewObservedBy(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            placeholder="Status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Status
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Status"
            required
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          />
        </div>
        <button
          onClick={handleUpdateUser}
          type="submit"
          className="text-white bg-[#15d4ce] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#15d4ce] dark:hover:bg-[#15d4ce] dark:focus:ring-[#15d4ce]"
        >
          Update Order
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
