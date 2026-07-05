import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function PatternSummary() {
  const { patternData } = useContext(AppContext);

  if (!patternData) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Generated Pattern
      </h2>

      <img
        src={patternData.preview_image}
        className="w-full rounded-xl border object-contain"
      />

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Pattern ID</p>
          <p className="font-semibold">{patternData.pattern_id}</p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Format</p>
          <p className="font-semibold">PDF + SVG</p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-semibold text-green-600">Ready</p>
        </div>

      </div>

    </div>
  );
}