import ChatHeader from "./ChatHeader.jsx";
import ChatMessages from "./ChatMessages.jsx";
import ChatQuickReplies from "./ChatQuickReplies.jsx";
import ChatInput from "./ChatInput.jsx";

export default function ChatWindow({ messages, isTyping, sendMessage, messagesEndRef, onClose }) {
  return (
    <div className="flex h-[480px] w-80 flex-col overflow-hidden rounded-2xl border border-white/5 bg-main shadow-2xl">
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} isTyping={isTyping} messagesEndRef={messagesEndRef} />
      <ChatQuickReplies onSelect={sendMessage} disabled={isTyping} />
      <ChatInput onSend={sendMessage} disabled={isTyping} />
    </div>
  );
}
