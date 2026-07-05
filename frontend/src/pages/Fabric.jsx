import { useContext, useEffect, useState } from "react";

import { AppContext } from "../context/AppContext";

import FabricHeader from "../components/fabric/FabricHeader";
import FabricLoading from "../components/fabric/FabricLoading";

import { getFabricRecommendation } from "../services/fabricService";

import FabricRecommendation from "../components/fabric/FabricRecommendation";
import FabricAlternatives from "../components/fabric/FabricAlternatives";
import FabricConsumption from "../components/fabric/FabricConsumption";
import FabricReason from "../components/fabric/FabricReason";
import FabricActions from "../components/fabric/FabricActions";

export default function Fabric() {

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const {
  patternData,
  fabricData,
  setFabricData,
} = useContext(AppContext);

  useEffect(() => {

    async function loadFabric() {

      try {

        setLoading(true);

        const result = await getFabricRecommendation(
          patternData.pattern_id
        );

        setFabricData(result);

      } catch (err) {

        console.error(err);

        setError("Unable to load fabric recommendations.");

      } finally {

        setLoading(false);

      }

    }

    if (patternData) {
      loadFabric();
    }

  }, [patternData]);

  if (loading) {

    return (

      <section className="min-h-screen bg-gray-50 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <FabricHeader />

          <FabricLoading />

        </div>

      </section>

    );

  }

  if (error) {

    return (

      <section className="min-h-screen flex items-center justify-center">

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

      <FabricHeader />

<div className="space-y-8">

  <FabricRecommendation
    fabric={fabricData.recommended_fabric}
  />

  <FabricAlternatives
    alternatives={fabricData.recommended_fabric.alternatives}
  />

  <FabricConsumption
    consumption={fabricData.fabric_consumption}
  />

  <FabricReason
    reason={fabricData.recommended_fabric.reason}
  />

  <FabricActions />

</div>

    </section>

  );

}