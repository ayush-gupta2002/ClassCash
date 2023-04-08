import React from "react";
import TimetableDay from "./TimetableDay";

function Timetable() {
  const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const Slots = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];

  const renderedDays = Days.map((day) => {
    return <TimetableDay day={day}></TimetableDay>;
  });

  let renderedSlots = Slots.map((slot) => {
    return <TimetableDay day={slot}></TimetableDay>;
  });

  return (
    <div className="grid grid-cols-12 grid-rows-7 gap-1 mt-10 mx-auto">
      <div></div>
      {renderedSlots}
      <TimetableDay day="Monday"></TimetableDay>
      {renderedSlots}
      <TimetableDay day="Tuesday"></TimetableDay>
      {renderedSlots}
      <TimetableDay day="Wednesday"></TimetableDay>
      {renderedSlots}
      <TimetableDay day="Thursday"></TimetableDay>
      {renderedSlots}
      <TimetableDay day="Friday"></TimetableDay>
      {renderedSlots}
    </div>
  );
}

export default Timetable;
