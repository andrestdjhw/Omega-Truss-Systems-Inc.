<?php
/*
  Template Name: Contact
  Omega Truss Systems — Contact (copy deck dev V1, sección 11)
  El formulario es el componente React ContactForm, montado en #react-contact-form.
*/

get_header();

$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
?>

<main id="main">

  <!-- ============ S1 · HERO ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 55%;mask-size:auto 55%;"></div>
    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="max-w-3xl reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Contact</p>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
          Let's Engineer Your Next Project.
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          Whether you're designing a luxury estate, a multifamily development or a complex
          structural build, our engineering team is ready to help you move faster, with confidence.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S2 · FORM + CONTACTO DIRECTO ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

      <!-- Formulario (React) -->
      <div class="lg:col-span-7">
        <div class="form-chip p-7 lg:p-9">
          <div
            class="js-contact-form"
            data-ajax="<?php echo esc_url(admin_url('admin-ajax.php')); ?>"
            data-nonce="<?php echo esc_attr(wp_create_nonce('omega_contact')); ?>"
            data-variant="full"
          ></div>
        </div>
        <p class="mt-5 text-xs text-navy/50">No sales scripts. Your inquiry goes to the engineering team.</p>
      </div>

      <!-- Contacto directo -->
      <aside class="lg:col-span-4 lg:col-start-9 reveal-stagger">
        <!-- Contacto directo -->
        <div class="form-chip p-8">
          <h2 class="font-display text-lg font-bold text-white">Prefer to talk it through?</h2>
          <!-- TODO NAP: email real, dirección exacta y horario -->
          <div class="mt-5 space-y-2 text-sm text-white/75">
            <p><a href="tel:+17609867177" class="hover:text-ember transition-colors">(760) 986-7177</a></p>
            <p><a href="mailto:info@omegatruss.com" class="hover:text-ember transition-colors">info@omegatruss.com</a></p>
            <p>Thousand Palms, CA</p>
            <p class="text-white/50">Office hours: [pending]</p>
          </div>
        </div>

        <!-- Arquitectos -->
        <div class="form-chip mt-6 p-8">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ember">Architects</p>
          <p class="mt-3 text-sm leading-relaxed text-white/75">
            Send plans for a structural feasibility review before permits.
            Attach or link plans in the form.
          </p>
        </div>

        <!-- Redes sociales — TODO: URLs reales (por ahora #) -->
        <div class="mt-6 flex items-center gap-2">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.1v2.8h2.4V21h3z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 8.6a6.3 6.3 0 0 1-3.8-1.3v6.6a5.6 5.6 0 1 1-5.6-5.6c.2 0 .5 0 .7.1v3a2.6 2.6 0 1 0 1.9 2.5V2.5h3a6.3 6.3 0 0 0 3.8 5v1.1z"/></svg>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 9.5 5.3 5h13.4L20 9.5M4 9.5a2.3 2.3 0 0 0 4.5.6 2.3 2.3 0 0 0 4.6 0 2.3 2.3 0 0 0 4.6 0A2.3 2.3 0 0 0 20 9.5M5.5 12v7h13v-7M10 19v-4.5h4V19"/></svg>
          </a>
        </div>

        <!-- Mapa -->
        <div class="mt-6 overflow-hidden rounded-xl shadow-[0_24px_60px_rgba(14,26,47,0.45)] border-t-2 border-ember">
          <iframe
            src="https://www.google.com/maps?q=Thousand+Palms,+CA&output=embed"
            title="Omega Truss Systems — Thousand Palms, CA"
            class="block h-[280px] w-full"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen></iframe>
        </div>
      </aside>
    </div>
  </section>

</main>

<script>
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && !reduce) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
</script>

<?php get_footer();