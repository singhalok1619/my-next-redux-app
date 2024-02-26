"use client";
import { useState } from "react";
import { addMonths, subMonths, format } from "date-fns";
import Calendar from "../components/calendar";



const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <button border-2 border-black onClick={prevMonth}>
          Previous Month
        </button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button className="border-2 border-black" onClick={nextMonth}>
          Next Month
        </button>
      </div>

      <Calendar currentDate={currentDate} />
    </div>
  );
};

export default Home;
