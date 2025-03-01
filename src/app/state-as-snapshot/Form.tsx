"use client";

import { useState } from "react";

function sendMessage(message: string) {
  console.log(message);
}

export default function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  if (isSent) return <h1>Your message is on its way!</h1>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
      className="flex flex-col items-end gap-4
      max-w-max"
    >
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="border"
      />
      <button
        className="border px-4 hover:bg-black/[0.02] rounded-full"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}
