import React, { useEffect, useState } from "react";
import axios from "axios";
import FieldValue from "./FieldValue";

function Batch({ batchID }) {
  const [batch, setBatch] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBatch = async () => {
      try {
        console.log("batchID", batchID);
        const res = await axios.get(`http://localhost:3000/batches/${batchID}`);
        setBatch(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getBatch();
    console.log(batch);
  }, []);

  let content = <div className="m-auto spinner"></div>;

  if (!isLoading) {
    content = (
      <div className="w-full flex flex-col justify-center">
        <h1 className="font-semibold text-3xl border-b-2 border-black w-full text-center">
          {batch.name}
        </h1>
        <FieldValue field="Year" value={batch.year}></FieldValue>
        <FieldValue field="Students" value={batch.students.length}></FieldValue>
        <FieldValue field="Time"></FieldValue>
        <FieldValue field="Class Representative"></FieldValue>
      </div>
    );
  }

  return (
    <div className="h-full min-w-[400px] rounded-lg p-4 overflow-scroll bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-600 hover:to-yellow-600 cursor-pointer shadow-lg duration-500 hover:scale-105 hover:border-4 hover:border-white">
      {content}
    </div>
  );
}

export default Batch;
