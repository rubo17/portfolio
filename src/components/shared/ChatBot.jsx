import { useState } from "react";
import { useChat } from "./chatbot/useChat.js";
import ChatWindow from "./chatbot/ChatWindow.jsx";
import ChatToggleButton from "./chatbot/ChatToggleButton.jsx";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isTyping, sendMessage, messagesEndRef } = useChat(isOpen);

  return (
    <div className="fixed bottom-12 right-4 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <ChatWindow
          messages={messages}
          isTyping={isTyping}
          sendMessage={sendMessage}
          messagesEndRef={messagesEndRef}
          onClose={() => setIsOpen(false)}
        />
      )}
      <ChatToggleButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
    </div>
  );
}
