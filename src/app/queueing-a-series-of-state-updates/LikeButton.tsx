"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);

    setTimeout(() => {
      setLikes(l => l + 1);
    }, 2000);
  }

  return (
    <div>
      <p>Likes: {likes}</p>
      <button
        className="bg-blue-600 h-8 flex items-center justify-center px-4
        text-white rounded-lg hover:bg-blue-700 transition-colors ease-linear
        duration-150 font-semibold text-sm tracking-wide"
        onClick={handleLike}
      >
        Like 👍
      </button>
    </div>
  );
}
