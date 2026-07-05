import { useNavigate } from "react-router-dom";
import { generatePDF } from "../../services/pdfService";

<button
  onClick={() => generatePDF("results-container")}
  className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white"
>
  Download Full Report
</button>

export default function ResultsActions() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-5">

      <button
        onClick={() => navigate("/upload")}
        className="rounded-xl border px-8 py-4 font-semibold hover:bg-gray-100"
      >
        New Project
      </button>

      <button
        onClick={() => navigate("/chatbot")}
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white"
      >
        Ask AI About This Pattern
      </button>

    </div>
  );
}