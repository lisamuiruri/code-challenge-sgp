const BASE_URL = "http://localhost:3000/goals";


export async function getGoals() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addGoal(goal) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return res.json();
}

export async function updateGoal(id, updates) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteGoal(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}
