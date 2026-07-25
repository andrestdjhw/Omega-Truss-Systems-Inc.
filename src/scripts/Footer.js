/**
 * OMEGA TRUSS SYSTEMS — Footer (React)
 * Mount: #react-footer (footer.php) con data-home y data-logo (versión clara del logo).
 * NAP pendiente: actualizar PHONE / EMAIL / ADDRESS cuando el cliente confirme.
 */

import React from "react"
import { PHONE, EMAIL, ADDRESS, SOCIALS, SocialIcon } from "./brand"

const SERVICES = [
  { label: "Custom Roof Trusses", href: "/custom-roof-trusses/" },
  { label: "Floor Trusses", href: "/floor-trusses/" },
  { label: "Structural Engineering & CAD", href: "/structural-engineering-cad/" },
  { label: "Fabrication & Quality Control", href: "/fabrication-quality-control/" },
  { label: "Installation", href: "/installation/" },
  { label: "Roof Sheathing & Project Support", href: "/roof-sheathing-project-support/" },
]

const COMPANY = [
  { label: "About", href: "/about/" },
  { label: "Featured Projects", href: "/featured-projects/" },
  { label: "Location", href: "/location/" },
  { label: "Contact", href: "/contact/" },
]

// Estampado de marca sobre el navy del footer (ajustable)
const PATTERN_COLOR = "rgba(255, 255, 255, 0.05)"

function CtaPoints() {
  return (
    <span className="points_wrapper" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="point"></span>
      ))}
    </span>
  )
}

const colHead =
  "text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-5"
const link =
  "block py-1.5 text-[14px] text-white/75 hover:text-white transition-colors"

export default function Footer() {
  const rootEl = document.querySelector("#react-footer")
  const homeUrl = rootEl?.dataset.home || "/"
  const logoUrl = rootEl?.dataset.logo || ""
  const patternUrl = rootEl?.dataset.pattern || ""
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-navy text-white">
      {/* Estampado: PNG como máscara, teñido con PATTERN_COLOR */}
      {patternUrl && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: PATTERN_COLOR,
            WebkitMaskImage: `url(${patternUrl})`,
            maskImage: `url(${patternUrl})`,
            WebkitMaskRepeat: "repeat",
            maskRepeat: "repeat",
            WebkitMaskSize: "auto 60%",
            maskSize: "auto 60%",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        ></div>
      )}

      {/* Hairline de marca */}
      <div className="relative h-0.5 bg-ember" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-5">
            <a href={homeUrl} className="brand-chip brand-chip--ember" aria-label="Omega Truss Systems — Home">
              {logoUrl ? (
                <img src={logoUrl} alt="Omega Truss Systems" className="h-10 w-auto" />
              ) : (
                <span className="leading-none">
                  <span className="block text-2xl font-bold tracking-[0.08em] text-white">OMEGA</span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.42em] text-white/80 mt-1">
                    Truss Systems
                  </span>
                </span>
              )}
            </a>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              Custom engineered truss systems for Southern California's most demanding
              residential, multifamily and commercial projects. Designed, fabricated
              and installed entirely in-house.
            </p>

            {/* Redes sociales */}
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-chip"
                >
                  <SocialIcon id={s.id} />
                </a>
              ))}
            </div>
          </div>

          {/* Structural Solutions */}
          <div className="lg:col-span-3">
            <h2 className={colHead}>Structural Solutions</h2>
            <nav aria-label="Structural Solutions">
              {SERVICES.map((s) => (
                <a key={s.href} href={s.href} className={link}>{s.label}</a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className={colHead}>Company</h2>
            <nav aria-label="Company">
              {COMPANY.map((c) => (
                <a key={c.href} href={c.href} className={link}>{c.label}</a>
              ))}
            </nav>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-2">
            <h2 className={colHead}>Get In Touch</h2>
            {PHONE && (
              <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`} className={link}>{PHONE}</a>
            )}
            {EMAIL && (
              <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>
            )}
            <p className="py-1.5 text-[14px] text-white/75">{ADDRESS}</p>
            <a
              href="/contact/"
              className="btn-cta btn-cta--ember mt-5 [--fold-bg:var(--color-navy)]"
            >
              <CtaPoints />
              <span className="fold" aria-hidden="true"></span>
              <span className="inner">Schedule a Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra legal */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[12px] text-white/50">
            © {year} Omega Truss Systems Inc. All rights reserved.
          </p>
          <p className="text-[12px] text-white/50">
            Site by{" "}
            <a
              href="https://www.828marketingsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-ember transition-colors"
            >
              828 Marketing Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}