"use client";

import { useState } from "react";

export default function Chat() {
  const [to, setTo] = useState("Trump");
  const [message, setMessage] = useState("Hello");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTimeout(() => {
            alert(`You send "${message}" to ${to}!`);
          }, 5000);
        }}
        className="flex gap-2 items-center"
      >
        <div className="text-sm">
          <label>To:</label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="border px-2"
          >
            <option value="Trump">Trump</option>
            <option value="Biden">Biden</option>
          </select>
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm"
        />
        <button
          type="submit"
          className="border h-8 flex items-center justify-center px-4
          text-sm hover:bg-gray-100 transition-colors duration-150
          ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
}
