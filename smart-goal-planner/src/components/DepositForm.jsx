import React, { useState } from "react";

export default function DepositForm({ goals, onDeposit }) {
  const [selectedGoalId, setSelectedGoalId] = useState(goals[0]?.id || "");
  const [amount, setAmount] = useState("");

  const submitDeposit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert("Please enter a valid deposit amount");
      return;
    }
    onDeposit(selectedGoalId, Number(amount));
    setAmount("");
  };

  return (
    <form onSubmit={submitDeposit} style={{ marginTop: 20 }}>
      <h3>Make a Deposit</h3>
      <select
        value={selectedGoalId}
        onChange={(e) => setSelectedGoalId(e.target.value)}
      >
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginLeft: 10 }}
      />
      <button type="submit" style={{ marginLeft: 10 }}>
        Deposit
      </button>
    </form>
  );
}
