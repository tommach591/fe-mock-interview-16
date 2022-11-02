import "./Completed.css";

function Completed({ status }) {
  return (
    <div className="Completed">
      <h1>
        {status === 1 ? "Congrats! " : "You lose. "} Refresh the page to play
        again.
      </h1>
    </div>
  );
}

export default Completed;
