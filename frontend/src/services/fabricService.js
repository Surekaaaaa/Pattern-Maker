const API_URL = "http://127.0.0.1:8000";

export async function getFabricRecommendation(projectId) {
  const response = await fetch(`${API_URL}/fabric/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectId,
    }),
  });

  if (!response.ok) {
    throw new Error("Fabric recommendation failed.");
  }

  const result = await response.json();

  return result.data;
}