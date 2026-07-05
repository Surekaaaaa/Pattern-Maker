import { useNavigate } from "react-router-dom";

export default function PatternActions({ pattern }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-5">

      <a
        href={pattern.pdf_url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-700"
      >
        Download PDF
      </a>

      <a
        href={pattern.svg_url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100"
      >
        Download SVG
      </a>

      <button
        onClick={() => navigate("/fabric")}
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700"
      >
        Continue →
      </button>

    </div>
  );
}