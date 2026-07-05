import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";

export default function ImagePreview({ type, preview }) {
  const inputRef = useRef();

  const {
    setFrontImage,
    setBackImage,
    setFrontPreview,
    setBackPreview,
  } = useContext(AppContext);

  const handleFile = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imagePreview = URL.createObjectURL(file);

    if (type === "front") {
      setFrontImage(file);
      setFrontPreview(imagePreview);
    } else {
      setBackImage(file);
      setBackPreview(imagePreview);
    }
  };

  const removeImage = () => {
    if (type === "front") {
      setFrontImage(null);
      setFrontPreview(null);
    } else {
      setBackImage(null);
      setBackPreview(null);
    }
  };

  return (
    <div className="space-y-5">

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={handleFile}
      />

      <div className="overflow-hidden rounded-xl border border-gray-200">
        <img
          src={preview}
          alt={`${type} preview`}
          className="h-80 w-full object-cover"
        />
      </div>

      <div className="flex gap-4">

        <button
          onClick={removeImage}
          className="flex-1 rounded-lg bg-red-500 py-3 font-semibold text-white hover:bg-red-600"
        >
          Remove
        </button>

        <button
          onClick={() => inputRef.current.click()}
          className="flex-1 rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Change Image
        </button>

      </div>

    </div>
  );
}