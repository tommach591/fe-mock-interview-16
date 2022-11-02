import "./Keyboard.css";
import Key from "../Key";

function Keyboard({ word, pressed, checkKey }) {
  const allKeys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  const getStatus = (key) => {
    return pressed.includes(key)
      ? word.includes(key)
        ? "Correct"
        : "Wrong"
      : "";
  };

  return (
    <div className="Keyboard">
      <div className="Row">
        {allKeys[0].split("").map((e) => {
          return (
            <Key key={e} letter={e} status={getStatus(e)} checkKey={checkKey} />
          );
        })}
      </div>
      <div className="Row">
        {allKeys[1].split("").map((e) => {
          return (
            <Key key={e} letter={e} status={getStatus(e)} checkKey={checkKey} />
          );
        })}
      </div>
      <div className="Row">
        {allKeys[2].split("").map((e) => {
          return (
            <Key key={e} letter={e} status={getStatus(e)} checkKey={checkKey} />
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
