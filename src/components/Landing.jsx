import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <Navbar />
      <h1 className="text-4xl font-bold mb-6">Choose the Blockchain:</h1>
      <div className="flex flex-row gap-6">
        <button
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={() => navigate("/mnemonic", { state: { blockchain: "SOL" } })}
        >
          Solana
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600"
          onClick={() => navigate("/mnemonic", { state: { blockchain: "ETH" } })}
        >
          Ethereum
        </button>
      </div>
    </div>
  );
};

export default Landing;
