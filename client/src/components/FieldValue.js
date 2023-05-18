import React from "react";

function FieldValue({ field, value }) {
  return (
    <div className="flex gap-2 my-2">
      <div className="font-semibold text-xl text-gray-400">{field}</div>
      <div className="font-semibold text-xl text-white">{value}</div>
    </div>
  );
}

export default FieldValue;
