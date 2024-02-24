import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

import blackBlood from "../images/icons8-black-blood-96.png";
import bmo from "../images/icons8-bmo-96.png";
import finn from "../images/icons8-finn-96.png";
import gunter from "../images/icons8-gunter-96.png";
import hammerstein from "../images/icons8-hammerstein-96.png";
import iceKing from "../images/icons8-ice-king-96.png";
import jake from "../images/icons8-jake-96.png";
import pineapples from "../images/icons8-joe-pineapples-96.png";
import marceline from "../images/icons8-marceline-96.png";
import mek from "../images/icons8-mek-quake-96.png";
import mongrol from "../images/icons8-mongrol-96.png";
import princess from "../images/icons8-princess-bubblegum-96.png";

const initialCards = [
  { image: blackBlood, name: "Black Blood" },
  { image: bmo, name: "Bmo" },
  { image: finn, name: "Finn" },
  { image: gunter, name: "Gunter" },
  { image: hammerstein, name: "HammerStein" },
  { image: iceKing, name: "Ice King" },
  { image: jake, name: "Jake" },
  { image: pineapples, name: "PineApple" },
  { image: marceline, name: "MarceLine" },
  { image: mek, name: "Mek" },
  { image: mongrol, name: "Mongrol" },
  { image: princess, name: "Princess" },
];

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Main() {
  const [currScore, setCurrScore] = useState(0);
  const [cards, setCards] = useState(initialCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [bestScore , SetBestScore] = useState(0)

  useEffect(() => {
    if(selectedCards.length===12){
      alert("You Won!");
      setCurrScore(0);
      setSelectedCards([]);
      SetBestScore(12)
    }
  },[selectedCards])

  const handleSelect = (name) => {
    if(selectedCards.includes(name)){
      alert("You selected the same card twice. You are disqualified!");
      setCurrScore(0);
      setSelectedCards([]);
      if(currScore > bestScore){
        SetBestScore(currScore)
      }else{
        SetBestScore(bestScore)
      }
      
    }else{
      setCurrScore((prev) => prev + 1);
      setSelectedCards([...selectedCards, name]);
    }

    const shuffledCards = shuffleArray(cards);
    setCards(shuffledCards);
  };

  return (
    <div className="main p-2 justify-items-center m-8 bg-blue-100 p-12 rounded-xl">
      <header className="head flex pt-5 justify-around text-xl font-bold bg-blue-100">
        <div className="curr bg-blue-100">Curr Score: {currScore} </div>
        <div className="best bg-blue-100">Best Score: {bestScore} </div>
      </header>
      <div className="mainCards grid grid-cols-6 grid-rows-2 gap-y-4 p-2 justify-items-center m-8 bg-blue-100 p-12 rounded-xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            text={card.name}
            onSelect={() => handleSelect(card.name)}
          />
        ))}
      </div>
    </div>
  );
}
