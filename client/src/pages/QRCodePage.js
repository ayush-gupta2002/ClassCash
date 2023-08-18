import React from "react";
import QRScanner from "../components/QRScanner";

function QRCodePage() {
  return (
    <div className="text-white w-full h-full flex flex-col">
      <h1 className="mx-auto text-4xl my-10 border-2 p-4 rounded-lg">
        Pay using ClassCash
      </h1>
      <QRScanner></QRScanner>
    </div>
  );
}

export default QRCodePage;
