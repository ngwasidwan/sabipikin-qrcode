import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

function App() {
  const [scanData, setScan] = useState("");
  function handleScan(data) {
    alert(`data is ${data}`);
    setScan(data);
  }
  function handleError(error) {
    // setScan("error");
    alert(error.message);
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
    </div>
  );
}

export default App;
