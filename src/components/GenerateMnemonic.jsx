import { useState } from "react";
import { generateMnemonic } from "bip39";
import Navbar from "./Navbar";
import { useNavigate, useLocation } from "react-router-dom";

const GenerateMnemonic = () => {
  const [mnemonic, setMnemonic] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const blockchain = location.state?.blockchain || "Unknown";

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <Navbar />
      <button
        onClick={() => {
          const mn = generateMnemonic();
          setMnemonic(mn);
        }}
        className="mb-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Generate Seed Phrase
      </button>
      {mnemonic && (
          <div className="flex flex-col items-center">
          <p className="text-center text-sm leading-6 p-4 border border-gray-700 rounded-md bg-gray-800 max-w-xl break-words">
            {mnemonic}
          </p>
          {blockchain === "SOL" ? (
            <button
              onClick={() => {
                navigate("/solana-wallet", { state: { mnemonic } });
              }}
              className="mt-4 px-6 py-2 bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Solana Wallet
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/eth-wallet", { state: { mnemonic } });
              }}
              className="mt-4 px-6 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Ethereum Wallet
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GenerateMnemonic;
