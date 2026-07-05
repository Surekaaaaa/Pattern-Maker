import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function AnalysisSummary() {
  const { analysisResult } = useContext(AppContext);

  if (!analysisResult) return null;

  const items = [
    ["Garment", analysisResult.garment_type],
    ["Fit", analysisResult.fit],
    ["Neckline", analysisResult.neckline],
    ["Sleeve", analysisResult.sleeve_type],
    ["Length", analysisResult.length],
  ];

  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        AI Analysis Summary
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {items.map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border p-4"
          >
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-blue-600">
              {value || "-"}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}