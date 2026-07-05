import { useNavigate } from "react-router-dom";

export default function FabricActions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-5">

      <button
        onClick={() => navigate("/pattern")}
        className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100"
      >
        Back to Pattern
      </button>

      <button
        onClick={() => navigate("/results")}
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
      >
        Continue →
      </button>

    </div>
  );
}