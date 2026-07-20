export default function FabricRecommendation({ fabric }) {
  if (!fabric) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Recommended Fabrics
      </h2>

      <div className="space-y-5 rounded-xl border border-green-200 bg-green-50 p-6">
        <div>
          <h3 className="text-3xl font-bold text-green-700">
            {fabric.recommendedFabrics.join(", ")}
          </h3>

          <p className="mt-2 text-gray-600">
            Recommended based on the detected garment type and construction.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Info
            title="Fabric Weight"
            value={fabric.fabricWeight}
          />

          <Info
            title="Fabric Width"
            value={fabric.fabricWidth}
          />

          <Info
            title="Needle Size"
            value={fabric.needleSize}
          />

          <Info
            title="Thread Type"
            value={fabric.threadType}
          />

          <Info
            title="Interfacing"
            value={fabric.interfacing}
          />

          <Info
            title="Lining Required"
            value={fabric.liningRequired ? "Yes" : "No"}
          />
        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">
            Care Instructions
          </p>

          <ul className="mt-2 list-disc pl-5 space-y-1">
            {fabric.careInstructions.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}