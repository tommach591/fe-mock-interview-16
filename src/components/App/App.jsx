import { useCallback, useEffect, useState } from "react";
import { getRandomWord } from "../../utils/Dictionary";
import Answer from "../Answer/Answer";
import Completed from "../Completed/Completed";
import Hangman from "../Hangman/Hangman";
import Keyboard from "../Keyboard/Keyboard";
import "./App.css";

function App() {
  const [word, setWord] = useState("");
  const [pressed, setPressed] = useState("");
  const [lives, setLives] = useState(6);

  const gameDone = useCallback(() => {
    if (lives === 0) return -1;
    for (let i = 0; i < word.length; i++) {
      if (!pressed.includes(word[i])) return 0;
    }
    return 1;
  }, [lives, pressed, word]);

  const checkKey = useCallback(
    (key) => {
      if (lives > 0) {
        let newPressed = pressed + key;
        setPressed(newPressed);
        if (!word.includes(key)) setLives(lives - 1);
      }
    },
    [lives, pressed, word]
  );

  useEffect(() => {
    const handleUserKeyPress = (event) => {
      const { key, keyCode } = event;
      if (
        keyCode >= 65 &&
        keyCode <= 90 &&
        !pressed.includes(key.toUpperCase())
      )
        checkKey(key.toUpperCase());
    };

    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  useEffect(() => {
    let ans = getRandomWord().toUpperCase();
    setWord(ans);
    setPressed("");
    console.log(ans);
  }, []);

  return (
    <div className="App">
      {gameDone() ? <Completed status={gameDone()} /> : <div />}
      <Hangman lives={lives} />
      <Answer word={word} pressed={pressed} />
      <Keyboard word={word} pressed={pressed} checkKey={checkKey} />
    </div>
  );
}

export default App;
