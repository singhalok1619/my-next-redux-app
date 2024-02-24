import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import {
  IoCalendarOutline,
  IoAnalytics,
  IoPeopleOutline,
  IoSettingsOutline,
  IoHelpCircleSharp,
  IoPowerOutline,
  IoPulseOutline,
  IoLogoAppleAr,
} from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import WorkOrders from "../components/workOrders";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [drawerContent, setDrwaerContent] = useState("Reports");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const DrawerItem = [
    {
      id: 1,
      label: "Face Recognition",
      icon: IoLogoAppleAr,
    },
    {
      id: 2,
      label: "Daily Visit",
      icon: "",
    },
    {
      id: 3,
      label: "Donate",
      icon: "",
    },
    {
      id: 4,
      label: "Work Orders",
      icon: "",
    },
    {
      id: 5,
      label: "Reports",
      icon: "",
    },
    {
      id: 6,
      label: "Reports History",
      icon: "",
    },
    {
      id: 7,
      label: "Test History",
      icon: "",
    },
    {
      id: 8,
      label: "Calender Type",
      icon: "",
    },
  ];

  return (
    <>
      <div className="flex flex-row">
        <div
          className={`w-[19%] h-screen text-black transform  block shadow-xl   ${
            isOpen
              ? "translate-x-0 transition-transform duration-300 ease-in-out"
              : "-translate-x-[190px]"
          }`}
        >
          <div className=" flex pt-[40%]">
            <ul className="w-[20%] border-[1px] border-r-black list-none ml-[2%] text-slate-500  ">
              <li className=" text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <CiHome />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoCalendarOutline />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoAnalytics />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoPeopleOutline />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoSettingsOutline />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoHelpCircleSharp />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoPulseOutline />
              </li>
              <li className="text-[30px] p-[5%] pt-[30%] pb-[30%]">
                <IoPowerOutline />
              </li>
            </ul>
            <ul className="list-none p-0 w-[80%] flex flex-col justify-evenly">
              {DrawerItem.map((item: any, id: any) => (
                <li
                  className="p-2   flex flex-row cursor-pointer"
                  key={id}
                  onClick={() => setDrwaerContent(item?.label)}
                >
                  {item?.label}
                  <IoIosArrowForward className="m-[2%]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span
          className={`  p-2 border-none cursor-pointer z-50 absolute top-16 w-[10px] `}
        >
          {toggleSidebar ? (
            <FaArrowLeft
              onClick={toggleSidebar}
              className={`text-[black] transition-transform transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          ) : (
            <FaArrowRight onClick={toggleSidebar} />
          )}
        </span>
        {/* //Rest Content Area */}
        <div className="w-[79%] border-2 border-black h-screen">
          <WorkOrders />
        </div>
      </div>
    </>
  );
}
