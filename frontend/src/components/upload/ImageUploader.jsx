import { useContext, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";

const MAX_SIZE = 10 * 1024 * 1024;

export default function ImageUploader({ type }) {
  const inputRef = useRef();

  const {
    setFrontImage,
    setBackImage,
    setFrontPreview,
    setBackPreview,
  } = useContext(AppContext);

  const [dragging, setDragging] = useState(false);

  const saveFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image.");
      return;
    }

    if (file.size > MAX_SIZE) {
      alert("Maximum file size is 10 MB.");
      return;
    }

    const preview = URL.createObjectURL(file);

    if (type === "front") {
      setFrontImage(file);
      setFrontPreview(preview);
    } else {
      setBackImage(file);
      setBackPreview(preview);
    }
  };

  const handleChange = (e) => {
    saveFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    saveFile(file);
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={`h-80 rounded-xl border-2 border-dashed flex cursor-pointer flex-col items-center justify-center transition
      ${
        dragging
          ? "border-blue-600 bg-blue-50"
          : "border-gray-300 hover:border-blue-500"
      }`}
    >
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      <div className="text-6xl">📤</div>

      <h3 className="mt-4 text-lg font-semibold">
        Click or Drag Image
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        JPG • PNG • WEBP
      </p>

      <p className="text-sm text-gray-500">
        Maximum size: 10 MB
      </p>
    </div>
  );
}