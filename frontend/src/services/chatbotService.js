const API_URL = "http://127.0.0.1:8000";

export async function sendChatMessage(data) {
  const response = await fetch(`${API_URL}/chatbot/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Chatbot request failed.");
  }

  return await response.json();
}