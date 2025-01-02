import { Scanner } from "@yudiel/react-qr-scanner";

function App() {
  function handleScan(result) {
    alert(`data is ${Object.values(result).join(" ")}`);
  }
  function handleError(error) {
    console.log(error.message);
  }
  return (
    <div>
      <Scanner onScan={handleScan} onError={handleError} scanDelay={300} />
    </div>
  );
}

export default App;
