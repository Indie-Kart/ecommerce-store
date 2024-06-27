// ChatbotIcon.tsx
"use client";
import React, { useState } from "react";
import ChatbotModal from "./chatbotmodel";

const ChatbotIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleOpen}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      </div>
      {isOpen && <ChatbotModal onClose={handleClose} />}
    </>
  );
};

export default ChatbotIcon;
