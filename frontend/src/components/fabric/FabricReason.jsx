export default function FabricReason({ reason }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Why This Fabric?
      </h2>

      <p className="leading-8 text-gray-600">
        {reason}
      </p>

    </div>
  );
}