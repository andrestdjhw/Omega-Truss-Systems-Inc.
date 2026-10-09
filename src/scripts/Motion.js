/**
 * OMEGA TRUSS SYSTEMS — Motion (vanilla, sin React)
 * ------------------------------------------------------------------
 * Capa global de micro-interacciones sobre el markup PHP existente.
 * No reemplaza los reveals inline de cada template: los complementa.
 *
 *  1. Barra de progreso de scroll (ember, arriba del todo)
 *  2. H1 palabra por palabra: repetir la entrada al volver al hero
 *  3a/3b. Fondos y videos de fondo con carga diferida
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
// Las palabras ya vienen partidas desde PHP (omega_headline) y la entrada es CSS,
// así el titular se pinta sin esperar a este script. Aquí solo se repite la
// animación: sale por completo → se quita .words-in; vuelve a entrar → se pone.
function headlineWords() {
  const headings = document.querySelectorAll("h1.split-ready")
  if (!headings.length) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.intersectionRatio >= 0.15) e.target.classList.add("words-in")
      else if (!e.isIntersecting) e.target.classList.remove("words-in")
    })
  }, { threshold: [0, 0.2] })
  headings.forEach((h) => io.observe(h))
}

/* ---------- 3. Hero Ken Burns + parallax ---------- */
function heroAndParallax() {
  // Fondos de imagen absolutos (hero de cada página, banda de Process, etc.) y el video del Home
  const layers = Array.from(
    document.querySelectorAll("main section > .absolute.bg-cover, main section > .js-hero-videos")
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

/* ---------- 3a. Fondos diferidos ---------- */
// <div class="js-lazy-bg" data-bg="url">: la foto se pide al acercarse al viewport.
// Corre siempre (también con reduced motion): es carga, no animación.
function lazyBackgrounds() {
  const els = document.querySelectorAll(".js-lazy-bg[data-bg]")
  const load = (el) => {
    el.style.backgroundImage = `url("${el.dataset.bg}")`
    el.removeAttribute("data-bg")
  }
  if (!("IntersectionObserver" in window)) { els.forEach(load); return }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { load(e.target); io.unobserve(e.target) }
    })
  }, { rootMargin: "600px 0px" })
  els.forEach((el) => io.observe(el))
}

/* ---------- 3b. Videos de fondo diferidos ---------- */
// <video class="js-lazy-video" preload="none">: reproduce solo cerca del viewport
// y se pausa al salir. Con reduced motion nunca llega aquí (queda el poster).
function lazyVideos() {
  const videos = document.querySelectorAll(".js-lazy-video")
  if (!videos.length || !("IntersectionObserver" in window)) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const p = e.target.play()
        if (p && p.catch) p.catch(() => {})
      } else {
        e.target.pause()
      }
    })
  }, { rootMargin: "200px 0px" })
  videos.forEach((v) => io.observe(v))
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
  lazyBackgrounds()
  if (reduce) return
  scrollProgress()
  if ("IntersectionObserver" in window) headlineWords()
  heroAndParallax()
  lazyVideos()
  if (finePointer) {
    spotlightCards()
    magneticButtons()
  }
}
