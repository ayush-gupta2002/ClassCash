import React from "react";

function TimetableDay({ day, color }) {
  return (
    <div className={"bg-white p-2 font-semibold text-lg " + `${color}`}>
      {day}
    </div>
  );
}

export default TimetableDay;
