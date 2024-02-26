import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import Modal from "./modal";
import ActionModal from "./actionModal";
import { useDispatch } from "react-redux";
import { addUser } from "../src/redux/actions";
import { useSelector } from "react-redux";

const WorkOrders = () => {
  const dispatch = useDispatch();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [panel, setPanel] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [observedBy, setObservedBy] = useState("");
  const [status, setStatus] = useState("");
  const users = useSelector((state: any) => state.users);

  const handleAddUser = () => {
    const user = {
      id: Date.now(),
      firstName,
      lastName,
      panel,
      source,
      date,
      amount,
      observedBy,
      status,
    };
    dispatch(addUser(user));
    setfirstName("");
    setlastName("");
    setPanel("");
    setSource("");
    setDate("");
    setAmount("");
    setObservedBy("");
    setStatus("");
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [isActionModalOpen, setActionModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openActionModal = () => setActionModalOpen(true);
  const closeActionModal = () => setActionModalOpen(false);

  return (
    <div className="">
      <div className=" flex ">
        <p className="text-[23px] font-bold text-black pt-[2%] pl-[2%]">
          Work Orders
        </p>
        <button
          className="bg-[#17c2af] hover:bg-[#16c2af] text-white font-bold py-2 px-4 rounded-full h-[16%] mt-[2%] ml-[4%] text-[13px]"
          onClick={openModal}
        >
          + Create Order
        </button>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {/*  modal content goes here */}
        <form>
          <h1 className="text-gray-900 text-center mb-[4%]">Create Order</h1>
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
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
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
                value={panel}
                onChange={(e) => setPanel(e.target.value)}
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
                value={source}
                onChange={(e) => setSource(e.target.value)}
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
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              value={observedBy}
              onChange={(e) => setObservedBy(e.target.value)}
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddUser}
            type="submit"
            className="text-white bg-[#15d4ce] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#15d4ce] dark:hover:bg-[#15d4ce] dark:focus:ring-[#15d4ce]"
          >
            Create Order
          </button>
        </form>
      </Modal>
      <div className="flex flex-row justify-between ">
        <div className="ml-[2%] mt-[3%]">
          <span className="font-bold">Date:</span>
          <span className="text-[13px]"> 06/01/2023 - 7/19/2023</span>
        </div>
        <div className="flex flex-row   text-[13px] justify-around w-[20%] mt-[1%]">
          <span className=" w-[38px] h-[38px] flex bg-gray-200 rounded-full   ">
            <IoIosSearch className=" text-[#16c2af] w-[34px]  flex h-[34px]" />
          </span>
          <div className="mx-[4%]">
            {" "}
            <button className="bg-[#17c2af]  hover:bg-[#16c2af] text-white font-bold py-2 px-4 rounded-full  mt-[2%] ml-[4%]">
              SEARCH
            </button>
          </div>
          <div>
            {" "}
            <button className="bg-gray-200 hover:bg-[#16c2af] text-[#17c2af] hover:text-[#fff] border-[1px] border-[#17c2af] font-bold py-2 px-4 rounded-full  mt-[2%] ml-[4%] ">
              FILTERS
            </button>
          </div>
        </div>
      </div>

      {/* table */}
      <div className=" mt-[3%] w-full ">
        <div className="overflow-x-auto  flex justify-evenly ">
          <table className="">
            <thead className="bg-gray-100 ">
              <tr className="text-black text-[12px]">
                <th className="py-3 px-4 text-left">DONOR</th>
                <th className="py-3 px-4 text-left">PANELS</th>
                <th className="py-3 px-4 text-left">BARCODE</th>
                <th className="py-3 px-4 text-left">SOURCE</th>
                <th className="py-3 px-4 text-left">DATE</th>
                <th className="py-3 px-4 text-left">AMOUNT</th>
                <th className="py-3 px-4 text-left">OBSERVED BY</th>
                <th className="py-3 px-4 text-left">STATUS</th>
                <th className="py-3 px-4 text-left">ACTION</th>
              </tr>
            </thead>
            {users.map((user: any) => (
              <tbody className=" text-[12px]" key={user.id}>
                <tr className="border-b border-blue-gray-200">
                  <td className="py-3 px-4 text-[#17c2af]">
                    {user?.lastName},{user?.firstName}
                  </td>
                  <td className="py-3 px-4">{user?.panel}</td>
                  <td className="py-3 px-4 text-[#17c2af]">{user?.id}</td>
                  <td className="py-3 px-4">{user?.source}</td>
                  <td className="py-3 px-4">{user?.date}</td>
                  <td className="py-3 px-4">${user?.amount}</td>
                  <td className="py-3 px-4">{user?.observedBy}</td>
                  <td className="py-3 px-4">{user?.status}</td>
                  <td className="py-3 px-4 cursor-pointer relative">
                    <BsThreeDotsVertical onClick={openActionModal} />
                    <ActionModal
                      isOpen={isActionModalOpen}
                      closeModal={closeActionModal}
                    >
                      <li>EDIT</li>
                      <li>DELETE</li>
                    </ActionModal>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkOrders;
