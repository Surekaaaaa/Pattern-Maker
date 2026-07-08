export default function FabricConsumption({ consumption }) {
  if (!consumption) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Fabric Consumption
      </h2>

      <div className="grid gap-5 md:grid-cols-3">
        <Info
          title="Required Fabric"
          value={consumption.estimatedConsumption}
        />

        <Info
          title="Fabric Width"
          value={consumption.fabricWidth}
        />

        <Info
          title="Fabric Weight"
          value={consumption.fabricWeight}
        />
      </div>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-xl border border-gray-200 p-5">
      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-blue-600">
        {value}
      </h3>
    </div>
  );
}