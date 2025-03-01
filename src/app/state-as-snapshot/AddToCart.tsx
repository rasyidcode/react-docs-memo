"use client";

import { useState } from "react";

export default function AddToCart() {
  const [count, setCount] = useState(0);

  if (count > 10) {
    return <h1>Your item count exceeded the limit.</h1>;
  }

  return (
    <div>
      <div className="flex items-center max-w-max relative gap-2">
        Your cart: 
        <svg
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span
          className="absolute bg-red-400 rounded-full h-5 w-5
        flex items-center justify-center -top-2.5 -right-2.5 text-white
        font-semibold text-sm"
        >
          {count}
        </span>
      </div>
      <button
        className="h-8 bg-foreground text-background px-4 mt-5 rounded-xl
        hover:bg-black/[0.8] transition-colors duration-150 ease-linear
        text-sm"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
