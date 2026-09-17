
import { buildPortfolioContext } from "../src/data/chatbotContext.js";

const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

function setCorsHeaders(res) {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { message, history = [] } = req.body || {};

  if (!message || typeof message !== "string") {
    res.status(400).json({ error: "Falta el campo 'message'" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Falta configurar GEMINI_API_KEY en Vercel" });
    return;
  }

  const contents = [
    ...history
      .filter((m) => m && typeof m.text === "string")
      .slice(-10)
      .map((m) => ({
        role: m.from === "bot" ? "model" : "user",
        parts: [{ text: m.text }],
      })),
    { role: "user", parts: [{ text: message }] },
  ];

  try {
    const response = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: buildPortfolioContext() }] },
        contents,
        generationConfig: { maxOutputTokens: 300, temperature: 0.7 },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      res.status(502).json({ error: "Error al contactar con la IA" });
      return;
    }

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    res.status(200).json({ reply: reply || "Lo siento, no he podido generar una respuesta." });
  } catch (err) {
    console.error("Chat function error:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
