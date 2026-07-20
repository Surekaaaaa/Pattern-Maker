export default function PatternPreview({ pattern }) {

  if (!pattern) return null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Pattern Preview
      </h2>

      <div className="overflow-hidden rounded-xl border bg-gray-50">

        {pattern.svg ? (

          <img
            src={`http://127.0.0.1:8000/${pattern.svg.replace(/\\/g, "/")}`}
            alt="Generated Pattern"
            className="mx-auto max-h-[700px] w-auto"
          />

        ) : (

          <div className="flex h-80 items-center justify-center">

            <p className="text-gray-500">
              Pattern preview unavailable.
            </p>

          </div>

        )}

      </div>

    </div>
  );

}