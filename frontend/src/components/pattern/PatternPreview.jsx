export default function PatternPreview() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-5 text-2xl font-bold">
        Pattern Preview
      </h2>

      <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">
            Pattern Preview
          </p>

          <p className="mt-2 text-sm text-gray-500">
            This preview will be generated after the AI creates the sewing pattern.
          </p>
        </div>
      </div>
    </div>
  );
}