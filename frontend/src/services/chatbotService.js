const API_URL = "http://127.0.0.1:8000";

export async function sendChatMessage(payload) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Chat request failed.");
  }

  return await response.json();
}