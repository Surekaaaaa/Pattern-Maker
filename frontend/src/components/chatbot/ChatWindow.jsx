import ChatMessage from "./ChatMessage";

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto p-6">

      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          message={msg.text}
          isUser={msg.isUser}
        />
      ))}

    </div>
  );
}