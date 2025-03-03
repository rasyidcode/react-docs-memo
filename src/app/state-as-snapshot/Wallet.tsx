"use client";

import { useState } from "react";

export default function Wallet() {
  const [balance, setBalance] = useState(0);

  function handleClick() {
    setBalance(balance + 100);
    alert(balance);
  }

  function handleClickWithTimer() {
    setBalance(balance + 500);
    setTimeout(() => {
      alert(balance);
    }, 3000);
  }

  return (
    <div className="flex items-center gap-4">
      <h1>
        Your balance is: <strong>${balance}</strong>
      </h1>
      <button
        onClick={handleClick}
        className="h-8 bg-green-500 px-4 hover:bg-green-600 transition-all
      duration-150 ease-linear text-sm flex items-center justify-center font-semibold
       tracking-wide rounded-sm border-green-600 border-2"
      >
        + $100
      </button>
      <button
        onClick={handleClickWithTimer}
        className="h-8 bg-lime-500 px-4 hover:bg-lime-600 transition-all
      duration-150 ease-linear text-sm flex items-center justify-center font-semibold
       tracking-wide rounded-sm border-lime-600 border-2"
      >
        + $500 (timer)
      </button>
    </div>
  );
}
