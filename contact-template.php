<?php
/*
  Template Name: Contact
  Omega Truss Systems — Contact (copy deck dev V1, sección 11)
  El formulario es el componente React ContactForm, montado en #react-contact-form.
*/

get_header();

$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
// Hero: la Featured Image solo se usa si mide ≥1200px de ancho (una foto chica
// estirada a todo el hero se ve borrosa); si no, foto del equipo de ingeniería.
$hero_img = '';
$thumb    = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
if ($thumb && $thumb[1] >= 1200) {
  $hero_img = $thumb[0];
}
if (!$hero_img) {
  $hero_img = home_url('/wp-content/uploads/2026/10/6.jpg');
}
?>

<main id="main">

  <!-- ============ S1 · HERO ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image:url('<?php echo esc_url($hero_img); ?>');" aria-hidden="true"></div>
    <div class="absolute inset-0 bg-navy/75" aria-hidden="true"></div>
    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="max-w-3xl hero-enter">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Contact</p>
        <h1 class="split-ready words-in mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]"><?php echo omega_headline('Let\'s Engineer Your Next Project.'); ?></h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          Whether you're designing a luxury estate, a multifamily development or a complex
          structural build, our engineering team is ready to help you move faster, with confidence.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S2 · FORM + CONTACTO DIRECTO ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <?php echo omega_photo_bg('8.jpg', 'dark'); ?>
    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

      <!-- Formulario (React) -->
      <div class="lg:col-span-7">
        <div class="form-chip form-chip--glass p-7 lg:p-9">
          <div
            class="js-contact-form"
            data-ajax="<?php echo esc_url(admin_url('admin-ajax.php')); ?>"
            data-nonce="<?php echo esc_attr(wp_create_nonce('omega_contact')); ?>"
            data-variant="full"
          ></div>
        </div>
        <p class="mt-5 text-xs text-white/60">No sales scripts. Your inquiry goes to the engineering team.</p>
      </div>

      <!-- Contacto directo -->
      <aside class="lg:col-span-4 lg:col-start-9 reveal-stagger">
        <!-- Contacto directo -->
        <div class="form-chip form-chip--glass p-8">
          <h2 class="font-display text-lg font-bold text-white">Prefer to talk it through?</h2>
          <!-- TODO NAP: horario de oficina -->
          <div class="mt-5 space-y-2 text-sm text-white/75">
            <p><a href="tel:+17609867177" class="hover:text-ember transition-colors">(760) 986-7177</a></p>
            <p><a href="mailto:info@omegatrusssystems.com" class="hover:text-ember transition-colors">info@omegatrusssystems.com</a></p>
            <address class="not-italic"><a href="<?php echo esc_url(OMEGA_GMB_URL); ?>" target="_blank" rel="noopener noreferrer" class="hover:text-ember transition-colors">72215 Woburn Ct<br>Thousand Palms, CA 92276</a></address>
            <p class="text-white/50">Office hours: [pending]</p>
          </div>
        </div>

        <!-- Arquitectos -->
        <div class="form-chip form-chip--glass mt-6 p-8">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ember">Architects</p>
          <p class="mt-3 text-sm leading-relaxed text-white/75">
            Send plans for a structural feasibility review before permits.
            Attach or link plans in the form.
          </p>
        </div>

        <!-- Redes sociales -->
        <div class="mt-6 flex items-center gap-2">
          <a href="<?php echo esc_url(OMEGA_GMB_URL); ?>" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.19-1.79 4.13-1.15 1.15-2.93 2.4-6.05 2.4-4.83 0-8.6-3.89-8.6-8.72s3.77-8.72 8.6-8.72c2.6 0 4.51 1.03 5.91 2.35l2.31-2.31C18.75 1.44 16.13 0 12.48 0 5.87 0 .31 5.39.31 12s5.56 12 12.17 12c3.57 0 6.27-1.17 8.37-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.05-1.47-.17-2.05H12.48z"/></svg>
          </a>
          <a href="https://www.facebook.com/OmegaTrussSystems" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.1v2.8h2.4V21h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/omegatrusssystems" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/omegatrusssystems/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-chip">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5v11H3.56v-11h3.38zM5.25 3.5a1.97 1.97 0 1 1 0 3.94 1.97 1.97 0 0 1 0-3.94zM20.5 13.57v5.93h-3.37v-5.5c0-1.38-.5-2.32-1.73-2.32-.94 0-1.5.63-1.75 1.24-.09.22-.11.52-.11.83v5.75h-3.37s.04-9.33 0-10.3h3.37v1.46c.45-.69 1.25-1.68 3.04-1.68 2.22 0 3.92 1.45 3.92 4.59z"/></svg>
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
        // Se reinicia al salir por completo del viewport: vuelve a animar en cada pasada
        if (e.isIntersecting && e.intersectionRatio >= 0.1) e.target.classList.add('is-visible');
        else if (!e.isIntersecting) e.target.classList.remove('is-visible');
      });
    }, { threshold: [0, 0.12] });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
</script>

<?php get_footer();