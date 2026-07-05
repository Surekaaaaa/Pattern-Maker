import { useContext, useEffect } from "react";

import { AppContext } from "../context/AppContext";

import AnalysisHeader from "../components/analysis/AnalysisHeader";
import LoadingAnimation from "../components/analysis/LoadingAnimation";
import AnalysisProgress from "../components/analysis/AnalysisProgress";

import { analyzeGarment } from "../services/analysisService";

import ImageComparison from "../components/analysis/ImageComparison";
import AnalysisSummary from "../components/analysis/AnalysisSummary";
import AnalysisDetails from "../components/analysis/AnalysisDetails";
import AnalysisActions from "../components/analysis/AnalysisActions";

export default function Analysis() {
  const {
  projectId,

  loading,
  setLoading,

  analysisResult,
  setAnalysisResult,
} = useContext(AppContext);

  useEffect(() => {
  async function analyze() {
    if (!projectId) return;

    try {
      setLoading(true);

      const result = await analyzeGarment(projectId);

      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  analyze();
}, [projectId]);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-14">

      <div className="mx-auto max-w-7xl">

  <AnalysisHeader />

  {loading ? (
    <LoadingAnimation />
  ) : (
    <div className="space-y-10">

      <AnalysisProgress />

      <ImageComparison />

      <AnalysisSummary />

      <AnalysisDetails />

      <AnalysisActions />

    </div>
  )}

</div>

    </section>
  );
}