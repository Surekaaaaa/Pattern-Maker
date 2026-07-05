export default function ChatSuggestion({ onClick }) {

  const suggestions = [
    "Can I change fabric to silk?",
    "How much fabric do I need?",
    "Can I shorten the dress?",
    "Explain this pattern",
  ];

  return (
    <div className="flex flex-wrap gap-3 p-4">

      {suggestions.map((s) => (
        <button
          key={s}
          onClick={() => onClick(s)}
          className="rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
        >
          {s}
        </button>
      ))}

    </div>
  );
}