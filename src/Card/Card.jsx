import React from "react";

export default function Card({ image, text, onSelect }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const boundingRect = card.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left - boundingRect.width / 2;
    const offsetY = e.clientY - boundingRect.top - boundingRect.height / 2;
    const xAxis = (offsetX / boundingRect.width) * 30;
    const yAxis = -(offsetY / boundingRect.height) * 30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <button
      className="card relative flex flex-col items-center bg-slate-400 rounded-xl pb-4 font-bold text-white shadow-xl m-2"
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="" className="image w-40 rounded-xl p-3" />
      {text}
    </button>
  );
}
