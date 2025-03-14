"use client";

import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleBuy() {
    // setPending(pending + 1);
    setPending((p) => p + 1);
    await delay(3000);
    // setPending(pending - 1);
    setPending((p) => p - 1);
    // setCompleted(completed + 1);
    setCompleted((c) => c + 1);
  }

  return (
    <div>
      <h3 className="text-sm font-bold">Pending: {pending}</h3>
      <h3 className="text-sm font-bold">Completed: {completed}</h3>
      <button
        onClick={handleBuy}
        className="px-4 py-1 bg-emerald-500 rounded-lg mt-2 text-white
        font-semibold uppercase hover:bg-emerald-600 transition-colors
        duration-150 ease-in-out"
      >
        Buy
      </button>
    </div>
  );
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
