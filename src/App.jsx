import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
// import QRCode from "react-qr-code";

function App() {
  const [scanData, setScan] = useState("");
  function handleScan({ data }) {
    console.log(data);
    // const jsonObj = Object.fromEntries(data);
    alert(`data is ${data}`);
  }
  function handleError(error) {
    setScan(error.message);
  }
  return (
    <div>
      {scanData && (
        <div>
          <p>Result: {scanData}</p>
          <p>after scanData</p>
        </div>
      )}
      <>
        <Scanner onScan={handleScan} onError={handleError} scanDelay={300} />
      </>
    </div>
  );
}

export default App;
