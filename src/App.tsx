import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

     ws.onmessage = (event) => {
      setValue(parseFloat(JSON.parse(event.data).p));
     
    };
  }, []);

  return (
    <div className="App">
      <h1>{value}</h1>
    </div>
  );
}

export default App;
