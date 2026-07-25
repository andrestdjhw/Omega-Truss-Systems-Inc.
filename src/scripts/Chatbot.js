/**
 * OMEGA TRUSS SYSTEMS — Chatbot (React)
 * ------------------------------------------------------------------
 * Asistente guiado (rule-based, sin backend): greeting + quick replies
 * del copy deck, respuestas basadas en las FAQs aprobadas y derivación
 * a /contact/ o teléfono. Mount: #react-chatbot (footer.php).
 *
 * Si el cliente contrata un proveedor de chat después, este componente
 * se reemplaza sin tocar el theme.
 */

import React, { useEffect, useRef, useState } from "react"
import { PHONE } from "./brand"

const CONTACT_URL = "/contact/"

const GREETING =
  "Planning a project? Tell us the location, project type and target timeline. Our engineering team will follow up within one business day."

const QUICK_REPLIES = [
  { id: "consult", label: "Request a consultation" },
  { id: "fire", label: "Ask about fire-zone trusses" },
  { id: "lead", label: "Ask about lead times" },
  { id: "eng", label: "Talk to engineering" },
]

const ANSWERS = {
  consult:
    "Great — the fastest way is a project consultation. Share your project location, type and target timeline, and our engineering team will follow up within one business day.",
  fire:
    "Yes — fire-zone work is core for us. We engineer truss systems for wildfire-designated zones and California's strict code environment, and we support the project through plan check and inspection.",
  lead:
    "Lead times depend on scope, but our record is a 98% on-time delivery rate versus an industry average of about 82%. Share your target schedule and we'll confirm feasibility.",
  eng:
    "Our engineering is fully in-house. The same team that designs your system fabricates and installs it, and plan-check revisions are typically resolved in days, not weeks.",
  install:
    "Installation is done by our own cross-trained crews — no subcontractors. The team that engineered your system is the team that sets it on site.",
  pricing:
    "Every system is engineered to order, so pricing is project-specific. Send us your plans or project details and our engineering team will get back to you within one business day.",
  fallback:
    "Thanks! For project-specific answers, the quickest path is our engineering team — they respond within one business day.",
}

// Matching básico por palabras clave para texto libre
const KEYWORDS = [
  { re: /(fire|wildfire|whz)/i, id: "fire" },
  { re: /(lead\s?time|timeline|schedule|turnaround|how\s+long|when)/i, id: "lead" },
  { re: /(install|crew|set)/i, id: "install" },
  { re: /(price|pricing|cost|quote|estimate|budget)/i, id: "pricing" },
  { re: /(engineer|title\s?24|code|plan\s?check|revision|cad|design)/i, id: "eng" },
  { re: /(consult|contact|talk|call|meet)/i, id: "consult" },
]

function matchAnswer(text) {
  for (const k of KEYWORDS) {
    if (k.re.test(text)) return ANSWERS[k.id]
  }
  return ANSWERS.fallback
}

function ChatIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 16H9.8l-3.9 3.2c-.5.4-1.4.1-1.4-.6V6.5z" />
      <path d="M8.5 9h7M8.5 12h4.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: "bot", text: GREETING }])
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState("")
  const [usedReplies, setUsedReplies] = useState([])
  const bodyRef = useRef(null)

  // Autoscroll al último mensaje
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [messages, typing, open])

  // Escape cierra
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  function botReply(text) {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: "bot", text, cta: true }])
    }, 700)
  }

  function handleQuickReply(qr) {
    setUsedReplies((u) => [...u, qr.id])
    setMessages((m) => [...m, { from: "user", text: qr.label }])
    botReply(ANSWERS[qr.id])
  }

  function handleSubmit() {
    const text = input.trim()
    if (!text) return
    setInput("")
    setMessages((m) => [...m, { from: "user", text }])
    botReply(matchAnswer(text))
  }

  const remainingReplies = QUICK_REPLIES.filter((q) => !usedReplies.includes(q.id))

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat"}
        className="chat-launcher fixed bottom-5 right-5 z-50"
      >
        {open ? (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6 18 18 M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
          </svg>
        ) : (
          <ChatIcon />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Omega Truss Systems"
          className="fixed bottom-24 right-5 z-50 w-[360px] max-w-[calc(100vw-2.5rem)] flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(22,40,60,0.28)] border border-navy/10"
          style={{ height: "min(480px, 70vh)" }}
        >
          {/* Header */}
          <div className="bg-navy">
            <div className="h-0.5 bg-ember" aria-hidden="true"></div>
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="text-[13px] font-display font-bold uppercase tracking-[0.14em] text-white">
                  Omega Truss Systems
                </p>
                <p className="text-[11px] text-white/60 mt-0.5">
                  Engineering team · replies within one business day
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="inline-flex h-8 w-8 items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6 18 18 M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mensajes */}
          <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.from === "user"
                      ? "max-w-[85%] rounded-lg rounded-br-sm bg-navy px-3.5 py-2.5 text-[13px] leading-relaxed text-white"
                      : "max-w-[85%] rounded-lg rounded-bl-sm bg-mist px-3.5 py-2.5 text-[13px] leading-relaxed text-navy"
                  }
                >
                  {m.text}
                  {m.cta && (
                    <span className="mt-2.5 flex flex-wrap gap-2">
                      <a
                        href={CONTACT_URL}
                        className="inline-flex items-center rounded bg-ember px-3 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-white hover:bg-navy transition-colors"
                      >
                        Go to project form
                      </a>
                      <a
                        href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                        className="inline-flex items-center rounded border border-navy/25 px-3 py-1.5 text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-navy hover:border-navy transition-colors"
                      >
                        Call {PHONE}
                      </a>
                    </span>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="rounded-lg rounded-bl-sm bg-mist px-4 py-3">
                  <span className="flex gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce [animation-delay:0.15s]"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce [animation-delay:0.3s]"></span>
                  </span>
                </div>
              </div>
            )}

            {/* Quick replies */}
            {!typing && remainingReplies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {remainingReplies.map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleQuickReply(q)}
                    className="rounded-full border border-navy/25 px-3.5 py-1.5 text-[12px] text-navy hover:border-ember hover:text-ember transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-navy/10 bg-white px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Type your question…"
                aria-label="Type your question"
                className="flex-1 rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-[13px] text-navy placeholder:text-navy/40 outline-none focus:border-navy/40"
              />
              <button
                type="button"
                onClick={handleSubmit}
                aria-label="Send"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white hover:bg-ember transition-colors"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                  <path d="M4.5 12 20 4.5 14.5 20l-2.8-5.7L4.5 12z" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}