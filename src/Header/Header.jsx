export default function Header(){
  return(
    <div className="header flex flex-row justify-between text-3xl pt-2 pb-2 pr-8 pl-8">
      <div className="logo w-24 text-center">logo</div>
      <div>Memory Game</div>
      <div className="score w-24 text-center"> score </div>
    </div>
  )
}