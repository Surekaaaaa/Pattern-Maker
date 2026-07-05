const API_URL = "http://127.0.0.1:8000";

export async function getFabricRecommendation(patternId) {
  const response = await fetch(
    `${API_URL}/fabric-recommendation/${patternId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch fabric recommendation.");
  }

  return await response.json();
}