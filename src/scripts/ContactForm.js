/**
 * OMEGA TRUSS SYSTEMS — ContactForm (React)
 * ------------------------------------------------------------------
 * Soporta MULTIPLES instancias por pagina. Mount por clase:
 *   <div class="js-contact-form" data-ajax="..." data-nonce="..." data-variant="compact|full"></div>
 * index.js lee los data-attributes y los pasa como props.
 *
 * variant "full"    -> los 9 campos del copy deck (pagina Contact, cierre del Home)
 * variant "compact" -> quick-quote para el hero (Name, Email, Phone, Project type)
 * Ambos envian a admin-ajax action omega_contact (handler en functions.php).
 */

import React, { useState } from "react"

const ROLES = ["Builder", "Architect", "General Contractor", "Developer", "Engineer", "Other"]
const TYPES = ["Luxury Residential", "Multifamily", "Commercial", "Public", "Other"]

const labelCls = "block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70"
// Celda de campo: si una etiqueta llegara a ocupar 2 líneas, el input se
// alinea abajo y la fila sigue pareja
const fieldCls = "flex flex-col justify-end"
const fieldBase =
  "mt-2 block w-full rounded-md border border-white/15 bg-white/[0.07] px-3.5 py-2.5 text-[14px] text-white placeholder:text-white/35 outline-none focus:border-royal focus:bg-white/10 transition-colors [&>option]:text-navy"
// Inputs y selects con la misma altura fija; la textarea usa fieldBase
const inputCls = `${fieldBase} h-11`

function CtaPoints() {
  return (
    <span className="points_wrapper" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="point"></span>
      ))}
    </span>
  )
}

export default function ContactForm({ ajaxUrl = "/wp-admin/admin-ajax.php", nonce = "", variant = "full" }) {
  const compact = variant === "compact"

  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", phone: "",
    location: "", type: "", timeline: "", message: "",
    company_site: "", // honeypot
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    setStatus("sending")
    try {
      const body = new FormData()
      body.append("action", "omega_contact")
      body.append("nonce", nonce)
      Object.entries(form).forEach(([k, v]) => body.append(k, v))
      const res = await fetch(ajaxUrl, { method: "POST", body })
      const json = await res.json()
      setStatus(json && json.success ? "success" : "error")
    } catch (err) {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-lg border border-white/10 bg-white/[0.06] text-center ${compact ? "p-6" : "p-10"}`}>
        <p className="font-display text-xl font-bold text-white">Thank you.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-white/75">
          Our engineering team will contact you within one business day.
        </p>
      </div>
    )
  }

  const submitBtn = (
    <button
      type="submit"
      disabled={status === "sending"}
      className="btn-cta btn-cta--ember w-full [--fold-bg:#ffffff] disabled:opacity-60 disabled:pointer-events-none"
    >
      <CtaPoints />
      <span className="fold" aria-hidden="true"></span>
      <span className="inner">{status === "sending" ? "Sending…" : compact ? "Request Consultation" : "Schedule a Project Consultation"}</span>
    </button>
  )

  const consent = (
    <p className="mt-3 text-[12px] leading-snug text-white/50">
      By submitting, you agree to our{" "}
      <a href="/privacy-policy/" className="text-white/75 underline-offset-2 hover:text-white hover:underline">Privacy Policy</a>
      {" "}and{" "}
      <a href="/terms-and-conditions/" className="text-white/75 underline-offset-2 hover:text-white hover:underline">Terms</a>.
    </p>
  )

  const errorMsg = status === "error" && (
    <p className="mt-4 text-sm text-[#D9A585]">
      Something went wrong. Please try again, or call (760) 986-7177.
    </p>
  )

  /* ============ VARIANTE COMPACTA (hero) ============ */
  if (compact) {
    return (
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <div>
            <label htmlFor="cfc-name" className={labelCls}>Name *</label>
            <input id="cfc-name" type="text" required value={form.name} onChange={set("name")} className={inputCls} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="cfc-email" className={labelCls}>Email *</label>
            <input id="cfc-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="cfc-phone" className={labelCls}>Phone</label>
            <input id="cfc-phone" type="tel" value={form.phone} onChange={set("phone")} className={inputCls} autoComplete="tel" />
          </div>
          <div>
            <label htmlFor="cfc-type" className={labelCls}>Project type</label>
            <select id="cfc-type" value={form.type} onChange={set("type")} className={`${inputCls} form-select`}>
              <option value="">Select…</option>
              {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="cfc-website">Company site</label>
            <input id="cfc-website" type="text" tabIndex="-1" autoComplete="off" value={form.company_site} onChange={set("company_site")} />
          </div>
        </div>

        {errorMsg}
        <div className="mt-5">{submitBtn}</div>
        {consent}
      </form>
    )
  }

  /* ============ VARIANTE COMPLETA ============ */
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
        <div className={fieldCls}>
          <label htmlFor="cf-name" className={labelCls}>Name *</label>
          <input id="cf-name" type="text" required value={form.name} onChange={set("name")} className={inputCls} autoComplete="name" />
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-company" className={labelCls}>Company</label>
          <input id="cf-company" type="text" value={form.company} onChange={set("company")} className={inputCls} autoComplete="organization" />
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-role" className={labelCls}>Role</label>
          <select id="cf-role" value={form.role} onChange={set("role")} className={`${inputCls} form-select`}>
            <option value="">Select…</option>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-email" className={labelCls}>Email *</label>
          <input id="cf-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} autoComplete="email" />
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-phone" className={labelCls}>Phone</label>
          <input id="cf-phone" type="tel" value={form.phone} onChange={set("phone")} className={inputCls} autoComplete="tel" />
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-location" className={labelCls}>Project location</label>
          <input id="cf-location" type="text" value={form.location} onChange={set("location")} className={inputCls} placeholder="City / County" />
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-type" className={labelCls}>Project type</label>
          <select id="cf-type" value={form.type} onChange={set("type")} className={`${inputCls} form-select`}>
            <option value="">Select…</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className={fieldCls}>
          <label htmlFor="cf-timeline" className={labelCls}>Target timeline</label>
          <input id="cf-timeline" type="text" value={form.timeline} onChange={set("timeline")} className={inputCls} placeholder="e.g. Framing in Q1 2027" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelCls}>Message / link to plans</label>
          <textarea id="cf-message" rows="5" value={form.message} onChange={set("message")} className={`${fieldBase} resize-y`}></textarea>
        </div>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="cf-website">Company site</label>
          <input id="cf-website" type="text" tabIndex="-1" autoComplete="off" value={form.company_site} onChange={set("company_site")} />
        </div>
      </div>

      {errorMsg}
      <div className="mt-8">{submitBtn}</div>
      {consent}
    </form>
  )
}