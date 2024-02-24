// components/Calendar.js  this is a component
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import { useState } from "react";
// import Modal from "./modal";
import { useDispatch } from "react-redux";
import { addEvent } from "../src/redux/actions";
import { useSelector } from "react-redux";

const Calendar = ({ currentDate }: any) => {
  const dispatch = useDispatch();
  const events = useSelector((state: any) => state.events);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  //   const [thisDay, setThisDay] = useState("");

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
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <>
          <div
            key={day}
            className="p-4 w-[170px] h-[170px] text-center border rounded-md hover:bg-gray-500 cursor-pointer"
            onClick={() => {
              setEventDate(day);
            }}
          >
            <span className="text-sm font-semibold">{format(day, "d")}</span>
            <input
              type="text"
              key={day}
              placeholder="EVENT TITLE"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
            <button onClick={handleAddEvent}>Add EVENT</button>
          </div>
        </>
      ))}
      <div>
        {/* {events.map((event: any) => (
          <span>
            <p>{event.id}</p>
            <p>{event.eventTitle}</p>
            <p>{format(event?.eventDate, "d")}</p>
          </span>
        ))} */}
      </div>
    </div>
  );
};

export default Calendar;
