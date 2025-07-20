import React, { useEffect, useState } from "react";
import { getGoals, addGoal, deleteGoal, updateGoal } from "./services/api";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import DepositForm from "./components/DepositForm";

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  async function loadGoals() {
    try {
      const data = await getGoals();
      setGoals(data);
    } catch (error) {
      console.error("Error loading goals:", error);
    }
  }

  async function handleAddGoal(goal) {
    try {
      await addGoal(goal);
      loadGoals();
    } catch (error) {
      console.error("Error adding goal:", error);
    }
  }

  async function handleDeleteGoal(id) {
    try {
      await deleteGoal(id);
      loadGoals();
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  }

  async function handleDeposit(goalId, amount) {
    try {
      const goal = goals.find((g) => g.id === goalId);
      if (!goal) return;

      const updatedSavedAmount = goal.savedAmount + amount;
      await updateGoal(goalId, { savedAmount: updatedSavedAmount });
      loadGoals();
    } catch (error) {
      console.error("Error making deposit:", error);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>SMART Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList goals={goals} onDelete={handleDeleteGoal} />
    </div>
  );
}

export default App;
