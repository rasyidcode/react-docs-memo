"use client";

import { TokenBTC } from "@web3icons/react";
import { useState } from "react";

export default function CryptoCounter() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  function handleStart() {
    setIsCounting(true);

    const x = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      setCount((prevCount) => prevCount + 1);
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(x);
      setIsCounting(false);
    }, 5000);
  }

  return (
    <div>
      <h3 className="text-lg font-semibold">Crypto Counter</h3>
      <p className="text-sm">
        Incrementing a wallet balance by 1 every second for 5 seconds.
      </p>
      <div className="flex gap-4 mt-2">
        <button
          onClick={handleStart}
          className="text-sm h-8 px-4 border bg-gray-100 hover:bg-gray-300/[0.5]
          disabled:bg-gray-50"
          disabled={isCounting}
        >
          {isCounting ? "Counting..." : "Start counting"}
        </button>
      </div>
      <p className="text-lg mt-4 flex items-center">
        <TokenBTC size="24" /> {count}
      </p>
    </div>
  );
}
