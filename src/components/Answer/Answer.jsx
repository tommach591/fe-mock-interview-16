import "./Answer.css";

function Answer({ word, pressed }) {
  return (
    <div className="Answer">
      {word.split("").map((e, i) => {
        return (
          <div className="Spot" key={i}>
            {pressed.includes(e) ? <h1>{e}</h1> : <div />}
          </div>
        );
      })}
    </div>
  );
}

export default Answer;
