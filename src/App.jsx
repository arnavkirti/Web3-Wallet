import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import GenerateMnemonic from "./components/GenerateMnemonic";
import SolanaWallet from "./components/SolanaWallet";
import EthWallet from "./components/EthWallet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mnemonic" element={<GenerateMnemonic />} />
        <Route path="/solana-wallet" element={<SolanaWallet />} />
        <Route path="/eth-wallet" element={<EthWallet />} />
      </Routes>
    </Router>
  );
}

export default App;
