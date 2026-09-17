const QUICK_REPLIES = ["¿Quién eres?", "Ver proyectos", "Contacto"];

export default function ChatQuickReplies({ onSelect, disabled }) {
  return (
    <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
      {QUICK_REPLIES.map((reply) => (
        <button
          key={reply}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(reply)}
          className="rounded-full border border-accent/40 px-3 py-1.5 text-xs text-accent transition-colors hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {reply}
        </button>
      ))}
    </div>
  );
}
