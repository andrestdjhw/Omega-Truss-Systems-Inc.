/**
 * OMEGA TRUSS SYSTEMS — Datos de marca compartidos (Navbar + Footer)
 * Único lugar donde se editan NAP y redes sociales.
 */

import React from "react"

// ===== NAP — TODO: reemplazar con datos reales antes de producción =====
export const PHONE = "(760) 986-7177"
export const EMAIL = "info@omegatruss.com"
export const ADDRESS = "Thousand Palms, CA"
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Omega+Truss+Systems+Thousand+Palms+CA" // TODO: dirección exacta

// ===== Redes =====
export const SOCIALS = [
  { id: "fb", label: "Facebook", url: "https://www.facebook.com/OmegaTrussSystems" },
  { id: "ig", label: "Instagram", url: "https://www.instagram.com/omegatrusssystems" },
  { id: "li", label: "LinkedIn", url: "https://www.linkedin.com/company/omegatrusssystems/" },
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
    case "li":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.94 8.5v11H3.56v-11h3.38zM5.25 3.5a1.97 1.97 0 1 1 0 3.94 1.97 1.97 0 0 1 0-3.94zM20.5 13.57v5.93h-3.37v-5.5c0-1.38-.5-2.32-1.73-2.32-.94 0-1.5.63-1.75 1.24-.09.22-.11.52-.11.83v5.75h-3.37s.04-9.33 0-10.3h3.37v1.46c.45-.69 1.25-1.68 3.04-1.68 2.22 0 3.92 1.45 3.92 4.59z" />
        </svg>
      )
    default:
      return null
  }
}