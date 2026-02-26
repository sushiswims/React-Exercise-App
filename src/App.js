import { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

// list of exercises in the menu
const exercises = [
  { id: 1, name: "Push Ups", type: "repetition" },
  { id: 2, name: "Running", type: "duration" },
  { id: 3, name: "Plank", type: "duration" },
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleBackToMain = () => {
    setSelectedExercise(null);
  };

  let exerciseScreen = null;

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      exerciseScreen = (
        <RepetitionExercise
          name={selectedExercise.name}
          onBack={handleBackToMain}
        />
      );
    } else if (selectedExercise.type === "duration") {
      exerciseScreen = (
        <DurationExercise
          name={selectedExercise.name}
          onBack={handleBackToMain}
        />
      );
    }
  }

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>

      {/* MAIN MENU */}
      {!selectedExercise && (
        <div>
          <h2>Select an Exercise</h2>
          {exercises.map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => setSelectedExercise(exercise)}
            >
              {exercise.name} ({exercise.type})
            </button>
          ))}
        </div>
      )}

      {/* EXERCISE SCREEN */}
      {selectedExercise && (
        <div style={{ marginTop: "20px" }}>{exerciseScreen}</div>
      )}
    </div>
  );
}

export default App;