export default function FabricReason({ fabric }) {
  if (!fabric) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-5 text-2xl font-bold">
        Why These Fabrics?
      </h2>

      <p className="leading-8 text-gray-600">
        <strong>{fabric.recommendedFabrics.join(", ")}</strong> are recommended
        because they provide good comfort, durability, breathability, and drape
        for this garment. They are suitable for achieving the desired fit and
        appearance while making sewing easier and producing a professional
        finish.
      </p>

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <h3 className="font-semibold text-blue-700">
          Care Instructions
        </h3>

        <ul className="mt-2 list-disc pl-5 space-y-1 text-gray-600">
          {fabric.careInstructions.map((instruction) => (
            <li key={instruction}>
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}