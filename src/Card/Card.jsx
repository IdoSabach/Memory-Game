import React from "react";

export default function Card({ image, text, onSelect }) {
  return (
    <button
      className="card relative flex flex-col items-center rounded-xl p-1 font-bold shadow-xl m-2 bg-transparent text-black"
      onClick={onSelect}
    >
      <img
        src={image}
        alt=""
        className="image w-36 rounded-xl bg-transparent"
      />
      {text}
    </button>
  );
}
