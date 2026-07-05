import ImageUploader from "./ImageUploader";
import ImagePreview from "./ImagePreview";

export default function UploadCard({
  type,
  title,
  preview,
}) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-6">

        {title}

      </h2>

      {preview ? (

        <ImagePreview
          type={type}
          preview={preview}
        />

      ) : (

        <ImageUploader
          type={type}
        />

      )}

    </div>

  );
}