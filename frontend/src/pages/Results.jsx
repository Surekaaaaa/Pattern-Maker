import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import ResultsHeader from "../components/results/ResultsHeader";
import ImageOverview from "../components/results/ImageOverview";
import AnalysisSummary from "../components/results/AnalysisSummary";
import PatternSummary from "../components/results/PatternSummary";
import FabricSummary from "../components/results/FabricSummary";
import DownloadPanel from "../components/results/DownloadPanel";
import ResultsActions from "../components/results/ResultsActions";

export default function Results() {
  const {
    analysisResult,
    patternData,
    fabricData,
  } = useContext(AppContext);

  const loading =
    !analysisResult ||
    !patternData ||
    !fabricData;

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <ResultsHeader />

          <div className="rounded-2xl bg-white p-10 text-center shadow">
            Loading final results...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <ResultsHeader />

        <div
          id="results-container"
          className="space-y-10"
        >
          <ImageOverview />

          <AnalysisSummary />

          <PatternSummary pattern={patternData} />

          <FabricSummary fabric={fabricData} />

          <DownloadPanel />

          <ResultsActions />
        </div>
      </div>
    </section>
  );
}