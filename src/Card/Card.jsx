export default function Card({ image , text , onSelect}) {
  return (
    <button className="card flex flex-col items-center" onClick={onSelect}>
      <img src={image} alt="" className="image w-40"/>
      {text}
    </button>
  );
}
