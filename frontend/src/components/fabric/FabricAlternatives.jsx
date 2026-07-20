export default function FabricAlternatives({ fabrics = [] }) {
  if (!fabrics.length) return null;

  return (
    <div className="rounded-2xl bg-white p-8 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Alternative Fabrics
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {fabrics.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-400 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}