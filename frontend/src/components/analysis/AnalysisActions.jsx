import { useNavigate } from "react-router-dom";

export default function AnalysisActions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-5">

      <button
        onClick={() => navigate("/upload")}
        className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
      >
        Upload Different Images
      </button>

      <button
        onClick={() => navigate("/measurements")}
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Generate Pattern →
      </button>

    </div>
  );
}