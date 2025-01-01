import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

function App() {
  const [scan, setScan] = useState("");
  function handleScan(data) {
    console.log(data);
    setScan("this");
  }
  function handleError(error) {
    setScan("error");
    console.log(error);
  }
  return (
    <div>
      {scan ? (
        <p>{scan}</p>
      ) : (
        <>
          <Scanner onScan={handleScan} onError={handleError} scanDelay={300} />

          <p>new scanner</p>
        </>
      )}
    </div>
  );
}

export default App;
