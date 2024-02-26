import React from "react";
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalClass = isOpen ? "block" : "hidden";

  return (
    <div className={`fixed z-10 inset-0  overflow-y-auto ${modalClass}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-[4%]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <IoIosClose
            className="absolute right-5 top-5 text-[30px]"
            onClick={closeModal}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
