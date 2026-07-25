/**
 * OMEGA TRUSS SYSTEMS — Datos de marca compartidos (Navbar + Footer)
 * Único lugar donde se editan NAP y redes sociales.
 */

import React from "react"

// ===== NAP — TODO: reemplazar con datos reales antes de producción =====
export const PHONE = "(000) 000-0000"
export const EMAIL = "info@omegatruss.com"
export const ADDRESS = "Thousand Palms, CA"
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Omega+Truss+Systems+Thousand+Palms+CA" // TODO: dirección exacta

// ===== Redes — TODO: URLs reales =====
export const SOCIALS = [
  { id: "fb", label: "Facebook", url: "" },
  { id: "ig", label: "Instagram", url: "" },
  { id: "tt", label: "TikTok", url: "" },
  { id: "gmb", label: "Google Business Profile", url: "" },
]

export function SocialIcon({ id }) {
  const cls = "h-4 w-4"
  switch (id) {
    case "fb":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.1v2.8h2.4V21h3z" />
        </svg>
      )
    case "ig":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case "tt":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.5 8.6a6.3 6.3 0 0 1-3.8-1.3v6.6a5.6 5.6 0 1 1-5.6-5.6c.2 0 .5 0 .7.1v3a2.6 2.6 0 1 0 1.9 2.5V2.5h3a6.3 6.3 0 0 0 3.8 5v1.1z" />
        </svg>
      )
    case "gmb":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M4 9.5 5.3 5h13.4L20 9.5M4 9.5a2.3 2.3 0 0 0 4.5.6 2.3 2.3 0 0 0 4.6 0 2.3 2.3 0 0 0 4.6 0A2.3 2.3 0 0 0 20 9.5M5.5 12v7h13v-7M10 19v-4.5h4V19" />
        </svg>
      )
    default:
      return null
  }
}