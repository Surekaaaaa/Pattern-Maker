import { createContext, useEffect, useMemo, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {

  const [projectId, setProjectId] = useState(() => {
    return localStorage.getItem("projectId") || null;
  });

  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const [frontPreview, setFrontPreview] = useState(null);
  const [backPreview, setBackPreview] = useState(null);

  const [analysisResult, setAnalysisResult] = useState(null);
  const [patternData, setPatternData] = useState(null);
  const [fabricData, setFabricData] = useState(null);

  const resetProject = () => {
    setProjectId(null);
    setFrontImage(null);
    setBackImage(null);
    setFrontPreview(null);
    setBackPreview(null);
    setAnalysisResult(null);
    setPatternData(null);
    setFabricData(null);
    localStorage.removeItem("projectId");
  };

  useEffect(() => {
    if (projectId) {
      localStorage.setItem("projectId", projectId);
    }
  }, [projectId]);

  const value = useMemo(() => ({
    projectId,
    setProjectId,

    frontImage,
    setFrontImage,

    backImage,
    setBackImage,

    frontPreview,
    setFrontPreview,

    backPreview,
    setBackPreview,

    analysisResult,
    setAnalysisResult,

    patternData,
    setPatternData,

    fabricData,
    setFabricData,

    resetProject,
  }), [
    projectId,
    frontImage,
    backImage,
    frontPreview,
    backPreview,
    analysisResult,
    patternData,
    fabricData,
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}