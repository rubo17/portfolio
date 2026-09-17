import ChatBotIcon from "../../icons/ChatBotIcon.jsx";
import CloseIcon from "../../icons/CloseIcon.jsx";

export default function ChatToggleButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-14 w-14 items-center justify-center rounded-full bg-black shadow-lg transition-transform hover:scale-105"
      aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
    >
      {isOpen ? (
        <CloseIcon className="h-6 w-6 text-accent" />
      ) : (
        <ChatBotIcon className="h-7 w-7 text-accent" />
      )}
    </button>
  );
}
