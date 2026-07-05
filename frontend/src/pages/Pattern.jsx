import { useContext, useEffect, useState } from "react";

import { AppContext } from "../context/AppContext";

import PatternHeader from "../components/pattern/PatternHeader";
import PatternLoading from "../components/pattern/PatternLoading";

import { generatePattern } from "../services/patternService";

import PatternPreview from "../components/pattern/PatternPreview";
import PatternInfo from "../components/pattern/PatternInfo";
import PatternPieces from "../components/pattern/PatternPieces";
import PatternActions from "../components/pattern/PatternActions";

export default function Pattern() {

  const [loading, setLoading] = useState(true);

  const {
  analysisResult,
  patternData,
  setPatternData,
} = useContext(AppContext);

  const [error, setError] = useState("");

  useEffect(() => {

    async function createPattern() {

      try {

        setLoading(true);

        const result = await generatePattern(
          analysisResult
        );

        setPatternData(result);

      } catch (err) {

        console.error(err);

        setError("Unable to generate pattern.");

      } finally {

        setLoading(false);

      }

    }

    if (analysisResult) {
      createPattern();
    }

  }, [analysisResult]);

  if (loading) {
    return (
      <section className="min-h-screen bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <PatternHeader />

          <PatternLoading />

        </div>

      </section>
    );
  }

  if (error) {

    return (

      <section className="min-h-screen bg-gray-50 flex items-center justify-center">

        <div className="rounded-2xl bg-white p-10 shadow">

          <h2 className="text-2xl font-bold text-red-600">
            {error}
          </h2>

        </div>

      </section>

    );

  }

  return (

    <section className="min-h-screen bg-gray-50 px-6 py-16">

      <PatternHeader />

<div className="space-y-8">

  <PatternPreview
    image={patternData.preview_image}
  />

  <PatternInfo
    pattern={patternData}
  />

  <PatternPieces
    pieces={patternData.pieces}
  />

  <PatternActions
    pattern={patternData}
  />

</div>

    </section>

  );

}