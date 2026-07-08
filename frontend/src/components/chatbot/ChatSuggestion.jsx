export default function ChatSuggestion({ onClick }) {
  const suggestions = [
    "Can I change fabric to silk?",
    "How much fabric do I need?",
    "Can I shorten the dress?",
    "Explain this pattern",
  ];

  return (
    <div className="flex flex-wrap gap-3 border-t bg-gray-50 p-4">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onClick?.(suggestion)}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm transition hover:border-blue-500 hover:bg-blue-50"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}