import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function AnalysisDetails() {
  const { analysisResult } = useContext(AppContext);

  if (!analysisResult) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-8 text-2xl font-bold">
        Detected Features
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        {Object.entries(analysisResult).map(([key, value]) => (

          <div
            key={key}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
          >
            <span className="font-medium capitalize">
              {key.replaceAll("_", " ")}
            </span>

            <span className="font-semibold text-blue-600">
              {String(value)}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}