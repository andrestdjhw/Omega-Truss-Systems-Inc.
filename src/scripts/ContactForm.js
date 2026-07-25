/**
 * OMEGA TRUSS SYSTEMS — ContactForm (React)
 * ------------------------------------------------------------------
 * Campos del copy deck dev V1 (sección 11). Envía por admin-ajax
 * (action: omega_contact) con nonce; el handler PHP vive en
 * functions.php y manda el correo con wp_mail.
 * Mount: #react-contact-form con data-ajax y data-nonce.
 */

import React, { useState } from "react"

const ROLES = ["Builder", "Architect", "General Contractor", "Developer", "Engineer", "Other"]
const TYPES = ["Luxury Residential", "Multifamily", "Commercial", "Public", "Other"]

const labelCls = "block font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-navy/70"
const inputCls =
  "mt-2 block w-full border border-navy/15 bg-white px-3.5 py-2.5 text-[14px] text-navy placeholder:text-navy/35 outline-none focus:border-navy/50 transition-colors"

export default function ContactForm() {
  const rootEl = document.querySelector("#react-contact-form")
  const ajaxUrl = rootEl?.dataset.ajax || "/wp-admin/admin-ajax.php"
  const nonce = rootEl?.dataset.nonce || ""

  const [status, setStatus] = useState("idle") // idle | sending | success | error
  const [form, setForm] = useState({
    name: "", company: "", role: "", email: "", phone: "",
    location: "", type: "", timeline: "", message: "",
    company_site: "", // honeypot — oculto; los bots lo llenan
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
      <div className="border border-navy/10 bg-mist p-10 text-center">
        <p className="font-display text-xl font-bold text-navy">Thank you.</p>
        <p className="mt-3 text-[15px] leading-relaxed text-navy/75">
          Our engineering team will contact you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
        <div>
          <label htmlFor="cf-name" className={labelCls}>Name *</label>
          <input id="cf-name" type="text" required value={form.name} onChange={set("name")} className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-company" className={labelCls}>Company</label>
          <input id="cf-company" type="text" value={form.company} onChange={set("company")} className={inputCls} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="cf-role" className={labelCls}>Role</label>
          <select id="cf-role" value={form.role} onChange={set("role")} className={inputCls}>
            <option value="">Select…</option>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cf-email" className={labelCls}>Email *</label>
          <input id="cf-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>Phone</label>
          <input id="cf-phone" type="tel" value={form.phone} onChange={set("phone")} className={inputCls} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="cf-location" className={labelCls}>Project location (city / county)</label>
          <input id="cf-location" type="text" value={form.location} onChange={set("location")} className={inputCls} />
        </div>
        <div>
          <label htmlFor="cf-type" className={labelCls}>Project type</label>
          <select id="cf-type" value={form.type} onChange={set("type")} className={inputCls}>
            <option value="">Select…</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="cf-timeline" className={labelCls}>Target timeline</label>
          <input id="cf-timeline" type="text" value={form.timeline} onChange={set("timeline")} className={inputCls} placeholder="e.g. Framing in Q1 2027" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelCls}>Message / link to plans</label>
          <textarea id="cf-message" rows="5" value={form.message} onChange={set("message")} className={inputCls}></textarea>
        </div>

        {/* Honeypot — invisible para humanos */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="cf-website">Company site</label>
          <input id="cf-website" type="text" tabIndex="-1" autoComplete="off" value={form.company_site} onChange={set("company_site")} />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 text-sm text-ember">
          Something went wrong. Please try again, or reach us directly at info@omegatruss.com.
        </p>
      )}

      <div className="mt-8">
        <button type="submit" disabled={status === "sending"} className="btn-cta btn-cta--ember [--fold-bg:#ffffff] disabled:opacity-60 disabled:pointer-events-none">
          <span className="points_wrapper" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => <span key={i} className="point"></span>)}
          </span>
          <span className="fold" aria-hidden="true"></span>
          <span className="inner">{status === "sending" ? "Sending…" : "Schedule a Project Consultation"}</span>
        </button>
      </div>
    </form>
  )
}