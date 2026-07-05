import { useContext, useState } from "react";

import { AppContext } from "../context/AppContext";
import { sendChatMessage } from "../services/chatbotService";

import ChatHeader from "../components/chatbot/ChatHeader";
import ChatWindow from "../components/chatbot/ChatWindow";
import ChatInput from "../components/chatbot/ChatInput";
import ChatSuggestion from "../components/chatbot/ChatSuggestion";

export default function Chatbot() {

  const {
    projectId,
    analysisResult,
    patternData,
    fabricData,
  } = useContext(AppContext);

  const [messages, setMessages] = useState([
    {
      text: "Hi! Ask me anything about your garment.",
      isUser: false,
    },
  ]);

  const handleSend = async (text) => {

    const userMessage = {
      text,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {

      const response = await sendChatMessage({
        projectId,
        message: text,
        context: {
          analysisResult,
          patternData,
          fabricData,
        },
      });

      const botMessage = {
        text: response.reply,
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (err) {

      setMessages((prev) => [
        ...prev,
        {
          text: "Error getting response.",
          isUser: false,
        },
      ]);

    }
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto flex max-w-4xl flex-col rounded-2xl bg-white shadow h-[80vh]">

        <ChatHeader />

        <ChatWindow messages={messages} />

        <ChatSuggestion onClick={handleSend} />

        <ChatInput onSend={handleSend} />

      </div>

    </section>
  );
}