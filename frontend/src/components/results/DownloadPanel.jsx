import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function DownloadPanel() {
  const { patternData } = useContext(AppContext);

  if (!patternData) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Downloads
      </h2>

      <div className="flex flex-wrap gap-4">

        <a
          href={patternData.pdf_url}
          target="_blank"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          Download PDF
        </a>

        <a
          href={patternData.svg_url}
          target="_blank"
          className="rounded-xl border px-6 py-3 font-semibold"
        >
          Download SVG
        </a>

      </div>

    </div>
  );
}