/**
 * OMEGA TRUSS SYSTEMS — Motion (vanilla, sin React)
 * ------------------------------------------------------------------
 * Capa global de micro-interacciones sobre el markup PHP existente.
 * No reemplaza los reveals inline de cada template: los complementa.
 *
 *  1. Barra de progreso de scroll (ember, arriba del todo)
 *  2. H1 palabra por palabra (máscara)
 *  3. Hero: zoom de entrada (Ken Burns) + parallax en fondos bg-cover / video
 *  4. Spotlight que sigue al cursor en las cards de servicios y proyectos
 *  5. CTAs magnéticos (.btn-cta)
 *
 * Todo se desactiva con prefers-reduced-motion. Los efectos de cursor
 * solo corren con puntero fino (no en touch).
 */

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches

/* ---------- 1. Barra de progreso ---------- */
function scrollProgress() {
  const bar = document.createElement("div")
  bar.className = "scroll-progress"
  bar.setAttribute("aria-hidden", "true")
  document.body.appendChild(bar)

  let ticking = false
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    ticking = false
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  window.addEventListener("resize", update)
  update()
}

/* ---------- 2. H1 palabra por palabra ---------- */
function splitWords(el, counter) {
  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = node.textContent.split(/(\s+)/)
      const frag = document.createDocumentFragment()
      parts.forEach((part) => {
        if (!part) return
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return }
        const word = document.createElement("span")
        word.className = "split-word"
        const inner = document.createElement("span")
        inner.className = "split-word-in"
        inner.style.setProperty("--i", counter.i++)
        inner.textContent = part
        word.appendChild(inner)
        frag.appendChild(word)
      })
      node.replaceWith(frag)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      splitWords(node, counter)
    }
  })
}

function headlineWords() {
  const headings = document.querySelectorAll("main h1")
  if (!headings.length) return
  // Igual que los reveals: entra → anima; sale por completo → se reinicia
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.15) e.target.classList.add("words-in")
      else if (!e.isIntersecting) e.target.classList.remove("words-in")
    })
  }, { threshold: [0, 0.2] })

  headings.forEach((h) => {
    h.setAttribute("aria-label", h.textContent.trim().replace(/\s+/g, " "))
    splitWords(h, { i: 0 })
    h.classList.add("split-ready")
    h.querySelectorAll(".split-word").forEach((w) => w.setAttribute("aria-hidden", "true"))
    void h.offsetWidth // fija el estado inicial antes de animar
    io.observe(h)
  })
}

/* ---------- 3. Hero Ken Burns + parallax ---------- */
function heroAndParallax() {
  // Fondos de imagen absolutos (hero de cada página, banda de Process, etc.) y el video del Home
  const layers = Array.from(
    document.querySelectorAll("main section > .absolute.bg-cover, main section > .js-hero-video")
  )
  if (!layers.length) return

  const firstSection = document.querySelector("main section")
  layers.forEach((el) => {
    el.classList.add("parallax-layer")
    if (firstSection && firstSection.contains(el)) el.classList.add("hero-zoom")
  })

  let ticking = false
  function update() {
    const vh = window.innerHeight
    layers.forEach((el) => {
      const box = el.parentElement.getBoundingClientRect()
      if (box.bottom < 0 || box.top > vh) return
      // -1 (sección entrando por abajo) → 1 (saliendo por arriba)
      const p = (vh / 2 - (box.top + box.height / 2)) / (vh / 2 + box.height / 2)
      el.style.translate = `0 ${(p * box.height * 0.04).toFixed(1)}px`
    })
    ticking = false
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  window.addEventListener("resize", update)
  update()
}

/* ---------- 4. Spotlight en cards ---------- */
function spotlightCards() {
  document.querySelectorAll(".reveal-stagger > a.group, .js-project").forEach((card) => {
    card.classList.add("spotlight")
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect()
      card.style.setProperty("--mx", `${e.clientX - r.left}px`)
      card.style.setProperty("--my", `${e.clientY - r.top}px`)
    })
  })
}

/* ---------- 5. CTAs magnéticos ---------- */
function magneticButtons() {
  document.querySelectorAll(".btn-cta").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      btn.style.translate = `${(dx * 0.12).toFixed(1)}px ${(dy * 0.25).toFixed(1)}px`
    })
    btn.addEventListener("pointerleave", () => { btn.style.translate = "" })
  })
}

export default function initMotion() {
  if (reduce) return
  scrollProgress()
  if ("IntersectionObserver" in window) headlineWords()
  heroAndParallax()
  if (finePointer) {
    spotlightCards()
    magneticButtons()
  }
}
