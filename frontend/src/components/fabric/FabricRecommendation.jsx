export default function FabricRecommendation({ fabric }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Recommended Fabric
      </h2>

      <div className="rounded-xl border border-green-200 bg-green-50 p-6">

        <h3 className="text-3xl font-bold text-green-700">
          {fabric.primary}
        </h3>

        <p className="mt-3 text-gray-600">
          This is the recommended fabric for achieving the best drape,
          comfort, and appearance for your garment.
        </p>

      </div>

    </div>
  );
}