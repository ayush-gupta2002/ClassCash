import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useState, useEffect } from "react";
import QRCodeSuccess from "./QRCodeSuccess";

function QRScanner() {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="flex-col w-1/2 mx-auto">
      {scanResult ? <QRCodeSuccess></QRCodeSuccess> : <div id="reader"></div>}
    </div>
  );
}

export default QRScanner;
