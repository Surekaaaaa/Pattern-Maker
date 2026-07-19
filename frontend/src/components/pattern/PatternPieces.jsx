export default function PatternPieces({ pieces = [] }) {
  if (!pieces.length) {
    return (
      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-6 text-2xl font-bold">
          Pattern Pieces
        </h2>

        <p className="text-gray-500">
          No pattern pieces available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Pattern Pieces
      </h2>

      <div className="space-y-4">
        {pieces.map((piece, index) => (
          <div
            key={piece}
            className="flex items-center justify-between rounded-xl border border-gray-200 p-4"
          >
            <span className="font-medium">
              {piece}
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Piece {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}