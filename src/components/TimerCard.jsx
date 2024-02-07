import React from "react";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
const TimerCard = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const dialog = useRef();
  const timer = useRef();

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  const handleTimer = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  };

  const handleStop = () => {
    dialog.current.showModal();
    clearInterval(timer.current);
    console.log(timeRemaining);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        handleReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        {/* isTimerActive && <p>You are Lost!</p> */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleTimer}>
            {isTimerActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Timer is running...." : " Start the timer"}
        </p>
      </section>
    </>
  );
};

export default TimerCard;
