import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

const EthWallet = ({ mnemonic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [addresses, setAddresses] = useState([]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Ethereum Wallet Manager</h1>
        <button
          onClick={async function () {
            const seed = await mnemonicToSeed(mnemonic);
            const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
            const hdNode = HDNodeWallet.fromSeed(seed);
            const child = hdNode.derivePath(derivationPath);
            const privateKey = child.privateKey;
            const wallet = new Wallet(privateKey);
            setCurrentIndex(currentIndex + 1);
            setAddresses([...addresses, wallet.address]);
          }}
          className="px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          Add ETH Wallet
        </button>

        <div className="mt-6 w-full max-w-2xl">
          {addresses.length > 0 && (
            <h2 className="text-xl font-semibold mb-4">Generated Wallets:</h2>
          )}
          <ul className="space-y-3">
            {addresses.map((address, index) => (
              <li
                key={index}
                className="p-4 bg-gray-800 rounded-md shadow-md border border-gray-700"
              >
                <span className="font-medium text-blue-400">
                  ETH Wallet {index + 1}:
                </span>{" "}
                <span className="break-words">{address}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EthWallet;
