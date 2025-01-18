import { useState } from "react";
import { generateMnemonic } from "bip39";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
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
        <p className="text-center text-sm leading-6 p-4 border border-gray-700 rounded-md bg-gray-800 max-w-xl break-words">
          {mnemonic}
        </p>
      )}
    </div>
  );
}

export default App;
