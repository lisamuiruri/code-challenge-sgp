const BASE_URL = "http://localhost:3000/goals";

export async function getGoals() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch goals");
  return res.json();
}

export async function addGoal(goal) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  if (!res.ok) throw new Error("Failed to add goal");
  return res.json();
}

export async function deleteGoal(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete goal");
  return res.json();
}

export async function updateGoal(id, updatedFields) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedFields),
  });
  if (!res.ok) throw new Error("Failed to update goal");
  return res.json();
}
