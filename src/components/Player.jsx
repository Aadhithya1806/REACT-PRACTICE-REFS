import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();
  const handleStart = () => {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknowner Entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleStart}>Set Name</button>
      </p>
    </section>
  );
}
