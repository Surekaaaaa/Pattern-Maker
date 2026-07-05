export default function PatternPieces({ pieces = [] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Pattern Pieces
      </h2>

      <div className="space-y-4">

        {pieces.map((piece, index) => (

          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
          >
            <span className="font-medium">
              {piece.name}
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              × {piece.quantity}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}