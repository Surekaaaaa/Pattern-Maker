export default function FabricReason({ fabric }) {
  if (!fabric) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-5 text-2xl font-bold">
        Why This Fabric?
      </h2>

      <p className="leading-8 text-gray-600">
        <strong>{fabric.recommendedFabric}</strong> is recommended because it
        provides good comfort, durability, and drape for this garment. It is
        suitable for everyday wear and produces clean sewing results while
        maintaining the intended fit and appearance.
      </p>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">
          Care Instructions
        </h3>

        <p className="mt-2 text-gray-600">
          {fabric.careInstructions}
        </p>
      </div>
    </div>
  );
}