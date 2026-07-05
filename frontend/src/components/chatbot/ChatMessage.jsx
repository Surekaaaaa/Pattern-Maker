export default function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow
        ${isUser
          ? "bg-blue-600 text-white"
          : "bg-white border"
        }`}
      >
        {message}
      </div>

    </div>
  );
}