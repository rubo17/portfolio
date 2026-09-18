import ChatBotIcon from "../../icons/ChatBotIcon.jsx";

// Parser mínimo para el markdown que devuelve Gemini: **negrita** y [texto](url).
function renderInlineMarkdown(text) {
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(<strong key={key++}>{match[1]}</strong>);
    } else {
      nodes.push(
        <a
          key={key++}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {match[2]}
        </a>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function MessageBubble({ from, text }) {
  if (from === "bot") {
    return (
      <div className="flex items-end gap-2">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-skillColor">
          <ChatBotIcon className="h-4 w-4 text-accent" />
        </div>
        <p className="max-w-[75%] break-words whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-skillColor px-3 py-2 text-sm text-primaryText">
          {renderInlineMarkdown(text)}
        </p>
      </div>
    );
  }

  return (
    <p className="ml-auto max-w-[75%] break-words whitespace-pre-wrap rounded-2xl rounded-br-sm bg-accent px-3 py-2 text-sm text-main">
      {text}
    </p>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-skillColor">
        <ChatBotIcon className="h-4 w-4 text-accent" />
      </div>
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-skillColor px-3 py-2.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primaryText/60 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primaryText/60 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primaryText/60" />
      </div>
    </div>
  );
}

export default function ChatMessages({ messages, isTyping, messagesEndRef }) {
  return (
    <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-4 scrollbar-hidden">
      {messages.map((msg, i) => (
        <MessageBubble key={i} from={msg.from} text={msg.text} />
      ))}
      {isTyping && <TypingBubble />}
      <div ref={messagesEndRef} />
    </div>
  );
}
