export default function PatternPreview({ pattern }) {

  if (!pattern) return null;

  let imageUrl = "";

  if (pattern.svg) {
    imageUrl = `http://127.0.0.1:8000/${pattern.svg.replace(/\\/g, "/")}`;
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Pattern Preview
      </h2>

      <div className="overflow-auto rounded-xl border bg-gray-50 p-6">

        {imageUrl ? (

          <img
            src={imageUrl}
            alt="Generated Pattern"
            className="mx-auto max-w-full"
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