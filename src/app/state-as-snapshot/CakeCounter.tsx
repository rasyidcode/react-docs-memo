"use client";

import { useState } from "react";

export default function CakeCounter() {
  const [cakeCount, setCakeCount] = useState(0);

  console.log("rendered");

  return (
    <div>
      <div className="flex flex-wrap border-2 border-black/30 h-20 overflow-y-scroll">
        {new Array(cakeCount).fill(null).map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
            />
          </svg>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="mt-2 flex items-center max-w-max gap-2">
          <button
            className="border-2 border-black/30 px-4 text-sm disabled:border-black/10
            disabled:text-black/10"
            disabled={cakeCount >= 75}
            onClick={() => {
              setCakeCount(cakeCount + 1);
              setCakeCount(cakeCount + 1);
              setCakeCount(cakeCount + 1);
            }}
          >
            +3 cakes
          </button>
          <button
            className="border-2 border-black/30 px-4 text-sm disabled:border-black/10
            disabled:text-black/10"
            disabled={cakeCount <= 0}
            onClick={() => {
              setCakeCount(cakeCount - 1);
              setCakeCount(cakeCount - 1);
              setCakeCount(cakeCount - 1);
            }}
          >
            -3 cakes
          </button>
        </div>
        <h4 className="text-sm">
          Total cakes: <strong>{cakeCount}</strong>
        </h4>
      </div>
    </div>
  );
}
