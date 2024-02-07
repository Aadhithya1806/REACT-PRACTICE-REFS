import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerCard from "./components/TimerCard.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerCard title="Easy" targetTime={2}></TimerCard>
        <TimerCard title="Medium" targetTime={1}></TimerCard>
        <TimerCard title="Hard" targetTime={0.75}></TimerCard>
        <TimerCard title="Insane" targetTime={0.5}></TimerCard>
      </div>
    </>
  );
}

export default App;
