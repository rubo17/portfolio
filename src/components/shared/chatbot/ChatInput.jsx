import { useState } from "react";
import SendIcon from "../../icons/SendIcon.jsx";

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-white/5 bg-secondary px-3 py-3"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe tu mensaje..."
        disabled={disabled}
        className="flex-1 rounded-full bg-main px-4 py-2 text-sm text-primaryText placeholder:text-primaryText/40 outline-none focus:ring-1 focus:ring-accent/50 disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-main transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        aria-label="Enviar mensaje"
      >
        <SendIcon className="h-4 w-4" />
      </button>
    </form>
  );
}
