import React, { useEffect, useState } from "react";
import { getGoals, addGoal, deleteGoal } from "./services/api";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  async function loadGoals() {
    const data = await getGoals();
    setGoals(data);
  }

  async function handleAddGoal(goal) {
    await addGoal(goal);
    loadGoals();
  }

  async function handleDeleteGoal(id) {
    await deleteGoal(id);
    loadGoals();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>SMART Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </div>
  );
}

export default App;
