import React, { useState } from "react";
import { sendToGemini } from "./chatbotService";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const reply = await sendToGemini(input);
      const botMessage = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Gemini API Error:", err);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white p-4 rounded-lg shadow-xl z-50">
      <div className="h-64 overflow-y-auto mb-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-1 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <strong>{msg.role === "user" ? "You" : "Gemini"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 rounded-r">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
