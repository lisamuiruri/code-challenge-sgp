import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: 0,
    savedAmount: 0,
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddGoal({ ...formData, targetAmount: parseFloat(formData.targetAmount), savedAmount: parseFloat(formData.savedAmount) });
    setFormData({
      name: "",
      targetAmount: 0,
      savedAmount: 0,
      category: "",
      deadline: "",
      createdAt: new Date().toISOString().split("T")[0],
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" placeholder="Goal Name" value={formData.name} onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={formData.targetAmount} onChange={handleChange} required />
      <input name="savedAmount" type="number" placeholder="Saved Amount" value={formData.savedAmount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
