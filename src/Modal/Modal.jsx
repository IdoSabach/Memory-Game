const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50%)",
  backgroundColor: "#fff",
  padding: "40px",
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
      <div style={OVER_STYLE} />
      <div className="modal rounded-xl flex flex-col" style={MODAL_STYLES}>
        <header className="title font-bold text-center text-5xl bg-white">{text}</header>
        <div className="score text-center bg-white mt-6 text-xl">Your Score: {currScore}</div>
        <button onClick={handleClose} className="btn text-center mt-6 text-3xl bg-black rounded-xl text-white p-2">Play Again?</button>
      </div>
    </>
  );
}
