export default function FabricConsumption({ consumption }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Fabric Consumption
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="rounded-xl border p-5">
          <p className="text-gray-500">
            Required Fabric
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-600">
            {consumption.meters} m
          </h3>
        </div>

        <div className="rounded-xl border p-5">
          <p className="text-gray-500">
            Fabric Width
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-600">
            {consumption.fabric_width_cm} cm
          </h3>
        </div>

      </div>

    </div>
  );
}