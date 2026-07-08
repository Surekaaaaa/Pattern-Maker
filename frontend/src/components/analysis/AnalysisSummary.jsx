import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function AnalysisSummary() {
  const { analysisResult } = useContext(AppContext);

  if (!analysisResult) return null;

  const cards = [
    {
      title: "Garment",
      value: analysisResult?.garmentType,
    },
    {
      title: "Fit",
      value: analysisResult?.fit,
    },
    {
      title: "Sleeve",
      value: analysisResult?.sleeve,
    },
    {
      title: "Neckline",
      value: analysisResult?.neckline,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white p-6 shadow"
        >
          <p className="text-sm uppercase tracking-wide text-gray-500">
            {card.title}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-blue-600">
            {card.value || "-"}
          </h3>
        </div>
      ))}

    </div>
  );
}