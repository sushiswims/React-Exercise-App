import { useState } from "react";

function RepetitionExercise({ name, onBack }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={onBack}>← Back to Main</button>
      <h2>{name}</h2>

      <p>Reps: {count}</p>

      <button onClick={handleIncrement}>+1 Rep</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default RepetitionExercise;