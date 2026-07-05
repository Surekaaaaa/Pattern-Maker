import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Analysis from "../pages/Analysis";
import Measurements from "../pages/Measurements";
import Pattern from "../pages/Pattern";
import Fabric from "../pages/Fabric";
import Chatbot from "../pages/Chatbot";
import Results from "../pages/Results";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="upload" element={<Upload />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="measurements" element={<Measurements />} />
        <Route path="pattern" element={<Pattern />} />
        <Route path="fabric" element={<Fabric />} />
        <Route path="chatbot" element={<Chatbot />} />
        <Route path="results" element={<Results />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;