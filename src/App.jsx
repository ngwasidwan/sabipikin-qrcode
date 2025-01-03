import { Scanner } from "@yudiel/react-qr-scanner";

function App() {
  function handleScan(result) {
    console.log(result);
    alert(`data is ${result}`);
  }
  function handleError(error) {
    console.log(error.message);
    alert(error.message);
  }
  return (
    <div>
      <Scanner
        onScan={handleScan}
        onError={handleError}
        scanDelay={300}
        constraints={{ video: { facingMode: "user" } }}
      />
    </div>
  );
}

export default App;
