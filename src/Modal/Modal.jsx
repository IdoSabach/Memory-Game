const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50%)",
  backgroundColor: "#fff",
  padding: "10px",
  zIndex: 1000,
};

const OVER_STYLE ={
  position: "fixed",
  top: 0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor:'rgba(0,0,0,.7)',
  zIndex: 1000,
}

export default function Modal({ handleClose, currScore, open, text }) {
  if (!open) return null;
  return (
    <>
      <div style={OVER_STYLE} className="blackBok rounded-xl" />
      <div className="modal rounded-xl flex flex-col" style={MODAL_STYLES}>
        <header className="title font-bold text-center text-4xl bg-white lg:text-5xl lg:mb-3">{text}</header>
        <div className="score text-center bg-white mt-2 text-xl lg:text-2xl">Your Score: {currScore}</div>
        <button onClick={handleClose} className="btn text-center text-2xl bg-black rounded-xl text-white p-2 mt-2 lg:text-4xl lg:p-4 lg:mt-5 lg:mb-2">Play Again?</button>
      </div>
    </>
  );
}
