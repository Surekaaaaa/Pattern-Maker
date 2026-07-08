import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function ImageOverview() {
  const { frontPreview, backPreview } = useContext(AppContext);

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Uploaded Images
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard
          title="Front View"
          image={frontPreview}
        />

        <ImageCard
          title="Back View"
          image={backPreview}
        />
      </div>
    </div>
  );
}

function ImageCard({ title, image }) {
  return (
    <div>
      <p className="mb-3 font-medium text-gray-600">
        {title}
      </p>

      {image ? (
        <img
          src={image}
          alt={title}
          className="h-80 w-full rounded-xl border object-cover"
        />
      ) : (
        <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
          <p className="text-gray-500">
            No image available
          </p>
        </div>
      )}
    </div>
  );
}