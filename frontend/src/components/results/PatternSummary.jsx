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

      <div className="mb-6 flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">
            Pattern Preview
          </p>

          <p className="mt-2 text-sm text-gray-500">
            The AI-generated sewing pattern preview will appear here in a future version.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Info
          title="Pattern Name"
          value={patternData.patternName}
        />

        <Info
          title="Format"
          value={patternData.format}
        />

        <Info
          title="Difficulty"
          value={patternData.difficulty}
        />

        <Info
          title="Seam Allowance"
          value={patternData.seamAllowance}
        />

        <Info
          title="Estimated Time"
          value={patternData.estimatedTime}
        />

        <Info
          title="Status"
          value="Ready"
        />
      </div>

      <div className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">
          Pattern Pieces
        </h3>

        <div className="grid gap-3 md:grid-cols-2">
          {patternData.patternPieces.map((piece, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-3"
            >
              {piece}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>
    </div>
  );
}