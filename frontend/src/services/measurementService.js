const API_URL = "http://127.0.0.1:8000";

export async function saveMeasurements(
  projectId,
  unit,
  measurements
) {
  const response = await fetch(
    `${API_URL}/measurements/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId,
        unit,
        measurements,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Unable to save measurements.");
  }

  const result = await response.json();

  return result.data;
}