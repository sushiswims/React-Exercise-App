import { useState, useEffect } from "react";

function DurationExercise({ name, onBack }) {
  const [seconds, setSeconds] = useState(0); // total seconds
  const [isRunning, setIsRunning] = useState(false); // is the timer on?

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000); // every 1 second
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const pad = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div>
      <button onClick={onBack}>← Back to Main</button>
      <h2>{name}</h2>

      <p>
        Time: {pad(minutes)}:{pad(sec)}
      </p>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DurationExercise;