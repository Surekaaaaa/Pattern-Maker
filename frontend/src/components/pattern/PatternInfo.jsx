export default function PatternInfo({ pattern }) {
  if (!pattern) return null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Pattern Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <Info
          title="Pattern Name"
          value={pattern.patternName}
        />

        <Info
          title="Garment Type"
          value={pattern.garmentType}
        />

        <Info
          title="Difficulty"
          value={pattern.difficulty}
        />

        <Info
          title="Seam Allowance"
          value={pattern.seamAllowance}
        />

        <Info
          title="Estimated Fabric"
          value={pattern.estimatedFabric}
        />

        <Info
          title="Fabric Width"
          value={pattern.fabricWidth}
        />

        <Info
          title="Estimated Time"
          value={pattern.estimatedTime}
        />

        <Info
          title="Format"
          value={pattern.format}
        />

        <Info
          title="Project ID"
          value={pattern.projectId}
        />
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {value || "N/A"}
      </h3>
    </div>
  );
}