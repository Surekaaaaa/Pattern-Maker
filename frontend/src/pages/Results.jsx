import { useContext, useEffect, useState } from "react";

import { AppContext } from "../context/AppContext";

import ResultsHeader from "../components/results/ResultsHeader";

import { getProjectResults } from "../services/resultsService";

import ImageOverview from "../components/results/ImageOverview";
import AnalysisSummary from "../components/results/AnalysisSummary";
import PatternSummary from "../components/results/PatternSummary";
import FabricSummary from "../components/results/FabricSummary";
import DownloadPanel from "../components/results/DownloadPanel";
import ResultsActions from "../components/results/ResultsActions";

export default function Results() {

  const { projectId } = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const [results, setResults] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadResults() {

      try {

        setLoading(true);

        const data = await getProjectResults(projectId);

        setResults(data);

      } catch (err) {

        setError("Failed to load results.");

      } finally {

        setLoading(false);

      }

    }

    if (projectId) {
      loadResults();
    }

  }, [projectId]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <ResultsHeader />

          <div className="rounded-2xl bg-white p-10 shadow text-center">
            Loading final results...
          </div>

        </div>

      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="rounded-2xl bg-white p-10 shadow text-red-600 font-bold">
          {error}
        </div>
      </section>
    );
  }

  return (
  <section className="min-h-screen bg-gray-50 px-6 py-16">

    <div className="mx-auto max-w-7xl">

      <ResultsHeader />

      <div id="results-container" className="space-y-10">

        <ImageOverview />

        <AnalysisSummary />

        <PatternSummary />

        <FabricSummary />

        <DownloadPanel />

        <ResultsActions />

      </div>

    </div>

  </section>
);
}