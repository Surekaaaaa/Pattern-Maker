import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function FabricSummary() {
  const { fabricData } = useContext(AppContext);

  if (!fabricData) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Fabric Recommendation
      </h2>

      <div className="rounded-xl border border-green-200 bg-green-50 p-6">
        <h3 className="text-2xl font-bold text-green-700">
          {fabricData.recommendedFabric}
        </h3>

        <p className="mt-3 text-gray-600">
          Recommended for durability, comfort, and the best garment finish.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Info
            title="Required Fabric"
            value={fabricData.estimatedConsumption}
          />

          <Info
            title="Fabric Width"
            value={fabricData.fabricWidth}
          />

          <Info
            title="Fabric Weight"
            value={fabricData.fabricWeight}
          />

          <Info
            title="Needle Size"
            value={fabricData.needleSize}
          />

          <Info
            title="Thread Type"
            value={fabricData.threadType}
          />

          <Info
            title="Care Instructions"
            value={fabricData.careInstructions}
          />
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 font-semibold">
        {value}
      </p>
    </div>
  );
}