import ChatBotIcon from "../../icons/ChatBotIcon.jsx";
import CloseIcon from "../../icons/CloseIcon.jsx";

export default function ChatHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/5 bg-secondary px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-skillColor">
          <ChatBotIcon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Rubo Bot</p>
          <p className="flex items-center gap-1.5 text-xs text-primaryText/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            En línea
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-primaryText/60 transition-colors hover:text-white"
        aria-label="Cerrar chat"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
