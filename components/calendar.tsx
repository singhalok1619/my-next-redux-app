import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent, addReminder } from "../src/redux/actions";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import Modal from "./modal";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const dispatch = useDispatch();
  const events = useSelector((state: any) => state.events) || [];
  const reminder = useSelector((state: any) => state.reminder) || [];

  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [reminderDate, setReminderDate] = useState("");
  const [reminderTitle, setReminderTitle] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEventModalOpen, setEventModalOpen] = useState(false);
  const openEventModal = () => setEventModalOpen(true);
  const closeEventModal = () => setEventModalOpen(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleAddEvent = () => {
    const event = {
      id: Date.now(),
      eventTitle,
      eventDate,
    };
    dispatch(addEvent(event));
    setEventTitle("");
    setEventDate("");
  };

  const handleAddReminder = () => {
    const reminder = {
      id: Date.now(),
      reminderTitle,
      eventDate,
    };
    dispatch(addReminder(reminder));
    setReminderDate("");
    setReminderTitle("");
  };

  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  console.log(reminder, "reminder");

  return (
    <div className=" mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <button border-2 border-black onClick={prevMonth}>
          <IoIosArrowDropleft />
        </button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button className="" onClick={nextMonth}>
          <IoIosArrowDropright />
        </button>
      </div>
      <div className="grid grid-cols-7   ">
        {days.map((day) => (
          <>
            <div
              key={day}
              className="h-[90px] p-2 text-center border rounded-md  cursor-pointer hover:bg-gray-100 "
              onClick={() => {
                setEventDate(day);
              }}
            >
              <FaPlus
                onClick={openModal}
                className="text-[#45474B] text-[12px] "
              />
              <span className="text-[12px] text-[#45474B] text-right font-semibold">
                {format(day, "d")}
              </span>
              <div className="flex flex-col">
                {events.map((event: any) => {
                  if (isSameDay(new Date(event.eventDate), day)) {
                    return (
                      <>
                        <span
                          className="border-[1px] border-black rounded-sm mb-[1%]"
                          onClick={openEventModal}
                        >
                          Events: {events.length}
                        </span>
                        <Modal
                          isOpen={isEventModalOpen}
                          closeModal={closeEventModal}
                        >
                          <span className=" text-[20px] flex justify-center items-center mt-[0]">
                            Events on{" "}
                            <p className="font-bold mx-[2%] text-[35px] text-[#2c3039]">
                              {" "}
                              {format(event.eventDate, "d MMMM")}
                            </p>
                          </span>
                          <span>{event?.eventTitle}</span>
                        </Modal>
                      </>
                    );
                  }
                  return null;
                })}

                {/* <span className="border-[1px] border-black rounded-sm mb-[1%]">
                  Reminder : 0
                </span> */}
              </div>
            </div>
          </>
        ))}
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <form>
            <div className="mb-1">
              <label
                placeholder="Observed By"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                New Event
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Event"
                required
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#15d4ce] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#15d4ce] dark:hover:bg-[#15d4ce] dark:focus:ring-[#15d4ce]"
              onClick={handleAddEvent}
            >
              Create Event
            </button>
            <div className="border-[1px] border-[#D0D4CA] mt-[5%] mb-[5%]"></div>

            <div className="mb-2">
              <label
                placeholder="New Event"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                New Reminder
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Reminder"
                value={reminderTitle}
                onChange={(e) => setReminderTitle(e.target.value)}
                required
              />
            </div>
            <button
              onClick={handleAddReminder}
              type="submit"
              className="text-white bg-[#15d4ce] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#15d4ce] dark:hover:bg-[#15d4ce] dark:focus:ring-[#15d4ce]"
            >
              Create Reminder
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Calendar;
