import "./Hangman.css";

function Hangman({ lives }) {
  return (
    <div className="Hangman">
      <div className="Rope" />
      <div className="Arm" />
      <div className="Stand" />
      <div className="Feet" />
      {lives <= 5 ? <div className="Head" /> : <div />}
      {lives <= 4 ? <div className="Body" /> : <div />}
      {lives <= 3 ? <div className="RightArm" /> : <div />}
      {lives <= 2 ? <div className="LeftArm" /> : <div />}
      {lives <= 1 ? <div className="RightLeg" /> : <div />}
      {lives <= 0 ? <div className="LeftLeg" /> : <div />}
    </div>
  );
}

export default Hangman;
