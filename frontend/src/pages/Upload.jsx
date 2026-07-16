import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import { uploadImages } from "../services/uploadService";

import UploadCard from "../components/upload/UploadCard";
import UploadInstructions from "../components/upload/UploadInstructions";

export default function Upload() {
  const {
    frontImage,
    backImage,
    frontPreview,
    backPreview,
    setProjectId,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const ready = frontImage && backImage;

  const handleUpload = async () => {
    if (!frontImage || !backImage) {
      alert("Please upload both images.");
      return;
    }

    try {
      const result = await uploadImages(frontImage, backImage);

      setProjectId(result.projectId);

      navigate("/analysis");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed.");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Upload Dress Images
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Upload clear front and back images of your garment.
            PatternAI will analyze the design and generate sewing
            patterns automatically.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              <UploadCard
                type="front"
                title="Front Image"
                preview={frontPreview}
              />

              <UploadCard
                type="back"
                title="Back Image"
                preview={backPreview}
              />
            </div>
          </div>

          <div>
            <UploadInstructions />
          </div>
        </div>

        {ready && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleUpload}
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Continue to Analysis →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}