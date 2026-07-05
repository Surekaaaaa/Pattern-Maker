import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function ImageComparison() {
  const { frontPreview, backPreview } = useContext(AppContext);

  return (
    <div className="grid gap-8 md:grid-cols-2">

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="mb-4 text-xl font-semibold">
          Front Image
        </h3>

        <img
          src={frontPreview}
          alt="Front Garment"
          className="h-[420px] w-full rounded-xl object-cover"
        />

      </div>

      <div className="rounded-2xl bg-white p-6 shadow">

        <h3 className="mb-4 text-xl font-semibold">
          Back Image
        </h3>

        <img
          src={backPreview}
          alt="Back Garment"
          className="h-[420px] w-full rounded-xl object-cover"
        />

      </div>

    </div>
  );
}