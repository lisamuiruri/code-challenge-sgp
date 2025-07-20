import React from "react";

function GoalItem({ goal, onDelete }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const deadline = new Date(goal.deadline);
  const today = new Date();
  const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
  const isOverdue = daysLeft < 0 && goal.savedAmount < goal.targetAmount;
  const isComplete = goal.savedAmount >= goal.targetAmount;

  return (
    <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>
        Saved: ${goal.savedAmount} / ${goal.targetAmount}
      </p>
      <progress value={goal.savedAmount} max={goal.targetAmount} />
      <p>Deadline: {goal.deadline} ({daysLeft} days left)</p>
      {isOverdue && <p style={{ color: "red" }}> Overdue</p>}
      {isComplete && <p style={{ color: "green" }}> Goal Complete</p>}
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}

export default GoalItem;
