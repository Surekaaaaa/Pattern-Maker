export default function PatternPreview({ image }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">
        Pattern Preview
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200">

        <img
          src={image}
          alt="Generated Pattern"
          className="w-full object-contain"
        />

      </div>

    </div>
  );
}