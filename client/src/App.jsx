import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [pvtKey, setPvtKey] = useState(""); 
  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        setPvtKey={setPvtKey}
        pvtKey={pvtKey}
      />
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
