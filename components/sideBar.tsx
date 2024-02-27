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
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import WorkOrders from "./workOrders";
import Reports from "./reports";
import Calendar from "./calendar";
import Logo from "../src/redux/logo.png";
import Image from "next/image";
import { IoIosCamera } from "react-icons/io";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [drawerContent, setDrawerContent] = useState("Reports");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const DrawerItem = [
    {
      id: 1,
      label: "Face Recognition",
      icon: `IoIosCamera`,
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

  const ContactUs = () => {
    return (
      <div className=" w-[110px] h-[45px] absolute right-9 bottom-10 rounded-l-3xl rounded-br-3xl cursor-pointer bg-[#006063]">
        <span className="flex justify-center align-middle pt-[7%]">
          <AiOutlineQuestionCircle className="text-center text-white font-bold mt-[4%] mr-[3%]" />
          <p className="flex text-center text-white font-bold">Contact</p>
        </span>
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-row ">
        <div className="">
          <Image src={Logo} alt="Logo" className="absolute mb-3" />
          <ul className=" border-[1px] border-r-gray-300 list-none  text-slate-500 fixed h-[100vh] pt-[10%] px-[1.1em]">
            <li className=" text-[30px] p-[5%]  pb-[70%]">
              <CiHome className="text-[20px] cursor-pointer bg-[#dcf6f3] text-[#5fccc1] rounded-full" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%]">
              <IoCalendarOutline className="text-[20px]" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%]">
              <IoAnalytics className="text-[20px]" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%]">
              <IoPeopleOutline className="text-[20px]" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%] ">
              <IoSettingsOutline className="text-[20px]" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%]">
              <IoHelpCircleSharp className="text-[20px]" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%] ">
              <IoPulseOutline className="text-[20px]" />
            </li>
            <li className="text-[30px] p-[5%] pt-[70%] pb-[70%] ">
              <IoPowerOutline className="text-[20px]" />
            </li>
          </ul>
        </div>
        <div
          className={`w-[23vw] h-screen *:  text-black transform  block ${
            isOpen
              ? "translate-x-[3.5em] transition-transform duration-300 ease-in-out"
              : "-translate-x-[100em]"
          }`}
        >
          <div className="h-screen ml-[1.7em]">
            <div className="text-[26px] pl-[0.6em] pt-[1.2em] font-bold  ">
              Home
            </div>
            <div className="mt-[2em] ">
              <ul className="list-none p-0  flex flex-col  ">
                {DrawerItem.map((item: any, id: any) => (
                  <li
                    className={`p-2 mt-[2%] mb-[2%]  flex flex-row cursor-pointer justify-between  rounded-3xl ${
                      item.label == drawerContent ? "bg-[#edfaf9]" : "bg-none"
                    }`}
                    key={id}
                    onClick={() => setDrawerContent(item?.label)}
                  >
                    {item?.label}
                    <IoIosArrowForward className="m-[2%]" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <span
          className={`  p-2 border-none cursor-pointer z-50 absolute top-16 w-[10px] `}
        >
          {toggleSidebar ? (
            <FaArrowLeft
              onClick={toggleSidebar}
              className={`text-gray-600 ml-[0.7em] transition-transform transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          ) : (
            <FaArrowRight onClick={toggleSidebar} />
          )}
        </span>

        {/* //Rest Content Area */}
        <div
          className={`w-[70vw] ml-[2%] h-screen   text-black transform  block  ${
            isOpen
              ? "translate-x-[2.2em] transition-transform duration-300 ease-in-out"
              : "-translate-x-[7em]"
          }`}
        >
          {drawerContent == "Work Orders" && <WorkOrders />}
          {drawerContent == "Reports" && <Reports />}
          {drawerContent == "Calender Type" && <Calendar />}
        </div>
        <ContactUs />
      </div>
    </>
  );
}
