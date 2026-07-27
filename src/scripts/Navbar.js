/**
 * OMEGA TRUSS SYSTEMS — Navbar + Topbar (React)
 * ------------------------------------------------------------------
 * Ubicación: src/scripts/Navbar.js (reemplazo)
 *
 * Topbar: se esconde al hacer scroll down y reaparece al hacer scroll up.
 * Izquierda: teléfono + email · Centro: geotag → Google Maps · Derecha: redes.
 *
 * TODO NAP (cuando el cliente confirme): PHONE, EMAIL, MAPS_URL con la
 * dirección exacta, y las URLs reales en SOCIALS.
 */

import React, { useEffect, useRef, useState } from "react"
import { PHONE, EMAIL, ADDRESS, MAPS_URL, SOCIALS, SocialIcon } from "./brand"

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

const SERVICES = [
  { label: "Custom Roof Trusses", href: "/custom-roof-trusses/", desc: "Engineered-to-order roof systems for complex architecture." },
  { label: "Floor Trusses", href: "/floor-trusses/", desc: "Open-web systems that simplify MEP and protect schedules." },
  { label: "Structural Engineering & CAD", href: "/structural-engineering-cad/", desc: "Founder-led engineering, Title 24-aligned, plan-check ready." },
  { label: "Fabrication & Quality Control", href: "/fabrication-quality-control/", desc: "Precision fabrication with a 2.4% internal defect rate." },
  { label: "Installation", href: "/installation/", desc: "Set by our own cross-trained crews. One accountable team." },
  { label: "Roof Sheathing & Project Support", href: "/roof-sheathing-project-support/", desc: "Bundled scope through inspection sign-off." },
]

// Contact no va en el menú: el CTA "Schedule a Consultation" cumple ese rol
const LINKS_BEFORE = [
  { label: "About", href: "/about/" },
  { label: "Featured Projects", href: "/featured-projects/" },
]

const LINKS_AFTER = [
  { label: "Location", href: "/location/" },
]

const CTA = { label: "Schedule a Consultation", href: "/contact/" }

// Estampado de marca sobre el navbar: "blanco más oscuro" (ajustable)
const PATTERN_COLOR = "rgba(255, 255, 255, 0.12)"

/* ------------------------------------------------------------------ */
/* Iconos                                                              */
/* ------------------------------------------------------------------ */

function PinIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-6.5-5.4-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6.8 3.5H9l1.4 3.8-1.8 1.4a12.5 12.5 0 0 0 4.7 4.7l1.4-1.8 3.8 1.4v2.2c0 1-.8 1.9-1.9 1.8C10.3 16.4 7.6 13.7 6.9 7.4a1.8 1.8 0 0 1-.1-3.9z" transform="rotate(8 12 12)" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 5.8L19.5 7" />
    </svg>
  )
}

function CtaPoints() {
  return (
    <span className="points_wrapper" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <span key={i} className="point"></span>
      ))}
    </span>
  )
}

function Chevron({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20" fill="none" aria-hidden="true"
    >
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

function isCurrent(href) {
  if (typeof window === "undefined") return false
  const path = window.location.pathname.replace(/\/+$/, "") || "/"
  const target = href.replace(/\/+$/, "") || "/"
  return path === target
}

/* ------------------------------------------------------------------ */
/* Componente                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const rootEl = document.querySelector("#react-navbar")
  const homeUrl = rootEl?.dataset.home || "/"
  const logoUrl = rootEl?.dataset.logo || ""
  const patternUrl = rootEl?.dataset.pattern || ""

  const [scrolled, setScrolled] = useState(false)
  const [topbarHidden, setTopbarHidden] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [panelTop, setPanelTop] = useState(72)

  const dropdownRef = useRef(null)
  const megaRef = useRef(null)
  const headerRef = useRef(null)
  const lastY = useRef(0)

  // Scroll: sombra + dirección para esconder/mostrar la topbar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)
      if (y < 40) {
        setTopbarHidden(false)
      } else if (y > lastY.current + 4) {
        setTopbarHidden(true) // bajando
      } else if (y < lastY.current - 4) {
        setTopbarHidden(false) // subiendo
      }
      lastY.current = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cerrar dropdown con click afuera / Escape
  useEffect(() => {
    const onClick = (e) => {
      const inButton = dropdownRef.current && dropdownRef.current.contains(e.target)
      const inPanel = megaRef.current && megaRef.current.contains(e.target)
      if (!inButton && !inPanel) setServicesOpen(false)
    }
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("click", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  // Panel móvil: bloquear scroll y calcular el borde inferior del header
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "clip" : ""
    if (mobileOpen && headerRef.current) {
      setPanelTop(headerRef.current.getBoundingClientRect().bottom)
    }
    return () => { document.documentElement.style.overflow = "" }
  }, [mobileOpen, topbarHidden])

  const linkBase =
    "text-[13px] font-medium uppercase tracking-[0.14em] text-white/85 hover:text-white transition-colors whitespace-nowrap"
  const currentMark = "text-white border-b border-white pb-0.5"
  const topLink =
    "inline-flex items-center gap-1.5 text-[12px] text-white/75 hover:text-white transition-colors"

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setServicesOpen(false)}
      className={`bg-ember/95 backdrop-blur border-b border-black/10 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_12px_rgba(22,40,60,0.08)]" : ""
      }`}
    >
      {/* Hairline de marca */}
      <div className="h-0.5 bg-navy" aria-hidden="true"></div>

      {/* ============ TOPBAR ============ */}
      <div
        className={`bg-navy overflow-hidden transition-[max-height] duration-300 ease-out ${
          topbarHidden ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-10 flex items-center justify-between gap-4">
          {/* Izquierda: teléfono + email */}
          <div className="flex items-center gap-5 min-w-0">
            <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`} className={topLink}>
              <PhoneIcon />
              <span className="whitespace-nowrap">{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className={`${topLink} hidden sm:inline-flex`}>
              <MailIcon />
              <span className="truncate">{EMAIL}</span>
            </a>
          </div>

          {/* Centro: geotag → Google Maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${topLink} hidden md:inline-flex absolute left-1/2 -translate-x-1/2`}
          >
            <PinIcon />
            <span>{ADDRESS}</span>
          </a>

          {/* Derecha: redes sociales */}
          <div className="flex items-center gap-2">
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
      </div>

      {/* ============ NAV PRINCIPAL ============ */}
      <div className="relative">
        {/* Estampado: el PNG se usa como máscara y se tiñe con PATTERN_COLOR.
            Si el PNG no trajera transparencia, cambiar esta capa por:
            backgroundImage + opacity-[0.06] + filter grayscale(1). */}
        {patternUrl && (
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: PATTERN_COLOR,
              WebkitMaskImage: `url(${patternUrl})`,
              maskImage: `url(${patternUrl})`,
              WebkitMaskRepeat: "repeat-x",
              maskRepeat: "repeat-x",
              WebkitMaskSize: "auto 200%",
              maskSize: "auto 200%",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          ></div>
        )}

      <nav className="relative max-w-7xl mx-auto px-4 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          {/* Logo */}
          <a href={homeUrl} className="brand-chip shrink-0" aria-label="Omega Truss Systems — Home">
            {logoUrl ? (
              <img src={logoUrl} alt="Omega Truss Systems" className="h-9 lg:h-10 w-auto" />
            ) : (
              <span className="leading-none">
                <span className="block text-xl lg:text-2xl font-bold tracking-[0.08em] text-white">OMEGA</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.42em] text-white/75 mt-1">
                  Truss Systems
                </span>
              </span>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {LINKS_BEFORE.map((l) => (
              <a key={l.href} href={l.href} className={`${linkBase} ${isCurrent(l.href) ? currentMark : ""}`}>
                {l.label}
              </a>
            ))}

            {/* Dropdown: Structural Solutions */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className={`${linkBase} inline-flex items-center gap-1.5 ${servicesOpen ? "text-white" : ""}`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Structural Solutions
                <Chevron open={servicesOpen} />
              </button>

            </div>

            {LINKS_AFTER.map((l) => (
              <a key={l.href} href={l.href} className={`${linkBase} ${isCurrent(l.href) ? currentMark : ""}`}>
                {l.label}
              </a>
            ))}

            {/* CTA */}
            <a href={CTA.href} className="btn-cta">
              <CtaPoints />
              <span className="fold" aria-hidden="true"></span>
              <span className="inner">{CTA.label}</span>
            </a>
          </div>

          {/* Toggle móvil */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 text-white"
            aria-expanded={mobileOpen}
            aria-controls="omega-mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6 18 18 M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
              </svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.5 7h17 M3.5 12h17 M3.5 17h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ============ MEGA-MENU: Structural Solutions ============ */}
      {servicesOpen && (
        <div
          ref={megaRef}
          role="menu"
          aria-label="Structural Solutions"
          className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-navy/10 shadow-[0_24px_60px_rgba(22,40,60,0.16)] mega-panel"
        >
          <div className="h-0.5 bg-ember" aria-hidden="true"></div>
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 grid grid-cols-12 gap-10">
            {/* Columna de encabezado */}
            <div className="col-span-4 border-r border-navy/10 pr-10">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Structural Solutions</p>
              <p className="mt-4 font-display text-2xl font-bold leading-snug text-navy">
                One integrated scope, engineered for California's strictest codes.
              </p>
              <a
                href="/structural-solutions/"
                className="mt-6 inline-flex items-center gap-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors"
              >
                Explore all solutions <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            {/* Grid de servicios */}
            <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-2">
              {SERVICES.map((s) => (
                <a
                  key={s.href}
                  role="menuitem"
                  href={s.href}
                  className={`group mega-item flex min-w-0 flex-col p-4 -mx-4 ${
                    isCurrent(s.href) ? "bg-mist" : ""
                  }`}
                >
                  <span className="flex items-center justify-between gap-3 font-display text-[14px] font-bold text-navy transition-colors duration-200 group-hover:text-white">
                    {s.label}
                    <span className="text-ember opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true">&rarr;</span>
                  </span>
                  <span className="mt-1 text-[13px] leading-relaxed text-navy/60 transition-colors duration-200 group-hover:text-white/65">{s.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>

      {/* Panel móvil */}
      {mobileOpen && (
        <div
          id="omega-mobile-menu"
          className="lg:hidden fixed inset-x-0 bottom-0 z-40 bg-white overflow-y-auto border-t border-navy/10"
          style={{ top: `${panelTop}px` }}
        >
          <div className="px-5 py-6">
            {LINKS_BEFORE.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-navy border-b border-navy/10"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}

            {/* Accordion de servicios */}
            <button
              type="button"
              className="w-full flex items-center justify-between py-4 text-left text-[15px] font-semibold uppercase tracking-[0.12em] text-navy border-b border-navy/10"
              aria-expanded={mobileServices}
              onClick={() => setMobileServices((v) => !v)}
            >
              Structural Solutions
              <Chevron open={mobileServices} />
            </button>
            {mobileServices && (
              <ul className="py-1 border-b border-navy/10">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="block py-3 pl-4 text-[15px] text-navy/80 hover:text-navy"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {LINKS_AFTER.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-navy border-b border-navy/10"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}

            <a
              href={CTA.href}
              className="btn-cta w-full mt-6 [--fold-bg:#ffffff]"
              onClick={() => setMobileOpen(false)}
            >
              <CtaPoints />
              <span className="fold" aria-hidden="true"></span>
              <span className="inner">{CTA.label}</span>
            </a>

            {/* Contacto rápido en el panel móvil */}
            <div className="mt-6 flex items-center justify-between">
              <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`} className="text-[14px] text-navy/70">{PHONE}</a>
              <div className="flex items-center gap-2">
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
          </div>
        </div>
      )}
    </header>
  )
}