const API_URL = "http://127.0.0.1:8000";

export async function generatePattern(analysisData) {
  const response = await fetch(`${API_URL}/generate-pattern`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(analysisData),
  });

  if (!response.ok) {
    throw new Error("Pattern generation failed.");
  }

  return await response.json();
}