export default function Card( {image , text} ){
  return(
    <div className="card">
      <img src={image} alt="" />
      <div>{text}</div>
    </div>
  )
}