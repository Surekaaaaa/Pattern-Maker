import { useState } from "react";

export default function ChatInput({ onSend }) {

  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-3 border-t bg-white p-4">

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask about your pattern..."
        className="flex-1 rounded-xl border px-4 py-3 outline-none"
      />

      <button
        onClick={handleSend}
        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
      >
        Send
      </button>

    </div>
  );
}