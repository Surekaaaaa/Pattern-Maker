const API_URL = "http://127.0.0.1:8000";

export async function analyzeDress(frontImage, backImage) {
  const formData = new FormData();

  formData.append("front_image", frontImage);
  formData.append("back_image", backImage);

  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze images.");
  }

  return await response.json();
}