import { useEffect, useRef, useState } from "react";

const API_URL = import.meta.env.PUBLIC_CHATBOT_API_URL;

const INITIAL_MESSAGE = {
  from: "bot",
  text: "¡Hola! Soy el asistente de Rubén. ¿En qué puedo ayudarte?",
};

export function useChat(isOpen) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, isOpen]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const history = messages;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);

    if (!API_URL) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "El chat todavía no está conectado a la IA." },
      ]);
      return;
    }

    setIsTyping(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.reply || "No he podido responder, inténtalo de nuevo." },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Ha ocurrido un error al conectar con el asistente." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage, messagesEndRef };
}
