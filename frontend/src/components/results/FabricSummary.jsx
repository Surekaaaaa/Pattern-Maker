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
          {fabricData.recommended_fabric.primary}
        </h3>

        <p className="mt-3 text-gray-600">
          {fabricData.recommended_fabric.reason}
        </p>

        <div className="mt-4 text-sm text-gray-600">
          Estimated:{" "}
          <span className="font-semibold">
            {fabricData.fabric_consumption.meters} m
          </span>
        </div>

      </div>

    </div>
  );
}