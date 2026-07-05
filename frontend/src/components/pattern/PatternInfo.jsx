export default function PatternInfo({ pattern }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Pattern Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <Info
          title="Pattern ID"
          value={pattern.pattern_id}
        />

        <Info
          title="Estimated Fabric"
          value={`${pattern.fabric_consumption} m`}
        />

        <Info
          title="Available Formats"
          value="PDF, SVG"
        />

        <Info
          title="Status"
          value="Ready"
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
        {value}
      </h3>

    </div>
  );
}