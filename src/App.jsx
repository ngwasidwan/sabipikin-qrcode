import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
// import QRCode from "react-qr-code";

function App() {
  const [scanData, setScan] = useState("");
  function handleScan(data) {
    console.log(data);
    setScan(data);
  }
  function handleError(error) {
    // setScan("error");
    console.log(error);
  }
  return (
    <div>
      Results
      {scanData && (
        <div>
          <p>Result: {scanData}</p>
          <p>after scanData</p>
        </div>
      )}
      <>
        <Scanner onScan={handleScan} onError={handleError} scanDelay={300} />
      </>
      {/* <h1>qr code</h1>
      <QRCode value="this" /> */}
    </div>
  );
}

export default App;
