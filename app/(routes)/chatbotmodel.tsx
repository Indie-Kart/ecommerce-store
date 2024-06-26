import React, { useState } from "react";

interface ChatbotModalProps {
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  user: "bot" | "user";
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newUserMessage: Message = {
        id: messages.length + 1,
        text: input,
        user: "user",
      };
      setMessages([...messages, newUserMessage]);
      setInput("");

      // Simulate bot response
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        user: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }
  };

  const getBotResponse = (input: string) => {
    if (input.toLowerCase().includes("hello")) {
      return "Hello! How can I assist you today?";
    } else if (input.toLowerCase().includes("how are you")) {
      return "I am just a bot, but I am here to help you!";
    } else {
      return "I am sorry, I didn't understand that. Can you please rephrase?";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Chatbot</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>
        <div className="chatbot-messages mb-4 max-h-60 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-2 rounded mb-2 ${
                message.user === "bot" ? "bg-blue-200" : "bg-green-200"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input flex">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white p-2 rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
