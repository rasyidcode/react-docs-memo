"use client";

import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleClick}
        className="h-8 border px-2 text-sm hover:bg-gray-100 transition-colors
      duration-150 ease-linear"
      >
        Change to {walk ? "Stop" : "Walk"}
      </button>
      <h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
        {walk ? "Walk" : "Stop"}
      </h1>
    </div>
  );
}
