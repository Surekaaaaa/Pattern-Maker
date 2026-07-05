const API_URL = "http://127.0.0.1:8000";

export async function uploadImages(frontImage, backImage) {
  const formData = new FormData();

  formData.append("front", frontImage);
  formData.append("back", backImage);

  const response = await fetch(`${API_URL}/upload/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}