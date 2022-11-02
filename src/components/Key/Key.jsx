import "./Key.css";

function Key({ letter, status, checkKey }) {
  return (
    <div
      className={`Key ${status}`}
      onClick={
        status === ""
          ? () => {
              checkKey(letter);
            }
          : () => {}
      }
    >
      <h1>{letter}</h1>
    </div>
  );
}

export default Key;
