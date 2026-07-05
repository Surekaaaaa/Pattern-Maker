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

        <div>
          <p className="mb-3 font-medium text-gray-600">
            Front View
          </p>

          <img
            src={frontPreview}
            className="h-80 w-full rounded-xl object-cover"
          />
        </div>

        <div>
          <p className="mb-3 font-medium text-gray-600">
            Back View
          </p>

          <img
            src={backPreview}
            className="h-80 w-full rounded-xl object-cover"
          />
        </div>

      </div>

    </div>
  );
}