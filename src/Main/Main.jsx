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

const cards = [
  {image: blackBlood, name: "Black Blood" },
  {image: bmo, name: "Bmo" },
  {image:finn , name:"Finn"},
  {image:gunter , name:"Gunter"},
  {image:hammerstein , name:"HammerStein"},
  {image:iceKing , name:"Ice King"},
  {image:jake , name:"Jake"},
  {image:pineapples , name:"PineApple"},
  {image:marceline , name:"MarceLine"},
  {image:mek , name:"Mek"},
  {image:mongrol , name:"Mongrol"},
  {image:princess , name:"Princess"},
];

export default function Main() {

  const handleSelect = (name) => {
    console.log(name)
  }

  return (
    <div className="Main grid grid-cols-6 grid-rows-2 gap-y-8 p-2 justify-items-center m-8 bg-slate-200 p-12 rounded-xl">
      {cards.map((card, index) => {
        return <Card key={index} image={card.image} text={card.name} onSelect={() => handleSelect(card.name)}/>;
      })}
    </div>
  );
}
