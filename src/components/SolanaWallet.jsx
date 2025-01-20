import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

function SolanaWallet({ mnemonic }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallets, setWallets] = useState([]);

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex flex-col items-center">
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-3xl font-bold mb-4">Solana Wallet Manager</h1>

        <button
          onClick={function () {
            const seed = mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);

            setCurrentIndex(currentIndex + 1);
            setWallets([
              ...wallets,
              {
                publicKey: keypair.publicKey.toBase58(),
                privateKey: secret.toString("hex"),
              },
            ]);
          }}
          className="px-6 py-3 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          Add Solana Wallet
        </button>

        <div className="mt-6 w-full max-w-2xl">
          {wallets.length > 0 && (
            <h2 className="text-xl font-semibold mb-4">Generated Wallets:</h2>
          )}
          <ul className="space-y-3">
            {wallets.map((wallet, index) => (
              <li
                key={index}
                className="p-4 bg-gray-800 rounded-md shadow-md border border-gray-700"
              >
                <div>
                  <span className="font-medium text-blue-400">
                    SOL Wallet {index + 1} (Public Key):
                  </span>{" "}
                  <span className="break-words">{wallet.publicKey}</span>
                </div>
                <div>
                  <span className="font-medium text-red-400">Private Key:</span>{" "}
                  <span className="break-words">{wallet.privateKey}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SolanaWallet;
