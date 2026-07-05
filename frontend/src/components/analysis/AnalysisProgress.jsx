export default function AnalysisProgress() {
  return (
    <div className="mb-10 rounded-xl bg-blue-50 p-6">

      <div className="mb-4 flex justify-between">

        <span className="font-medium">
          Analysis Progress
        </span>

        <span>
          100%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-blue-100">

        <div className="h-full w-full bg-blue-600"></div>

      </div>

    </div>
  );
}