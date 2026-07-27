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
        <div
          id="react-contact-form"
          data-ajax="<?php echo esc_url(admin_url('admin-ajax.php')); ?>"
          data-nonce="<?php echo esc_attr(wp_create_nonce('omega_contact')); ?>"
        ></div>
        <p class="mt-5 text-xs text-navy/50">No sales scripts. Your inquiry goes to the engineering team.</p>
      </div>

      <!-- Contacto directo -->
      <aside class="lg:col-span-4 lg:col-start-9 reveal-stagger">
        <div class="border border-navy/10 p-8">
          <h2 class="font-display text-lg font-bold text-navy">Prefer to talk it through?</h2>
          <!-- TODO NAP: reemplazar placeholders -->
          <div class="mt-5 space-y-2 text-sm text-navy/75">
            <p><a href="tel:0000000000" class="hover:text-ember transition-colors">(000) 000-0000</a></p>
            <p><a href="mailto:info@omegatruss.com" class="hover:text-ember transition-colors">info@omegatruss.com</a></p>
            <p>Thousand Palms, CA</p>
            <p class="text-navy/50">Office hours: [pending]</p>
          </div>
        </div>

        <div class="mt-6 border border-navy/10 bg-mist p-8">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ember">Architects</p>
          <p class="mt-3 text-sm leading-relaxed text-navy/75">
            Send plans for a structural feasibility review before permits.
            Attach or link plans in the form.
          </p>
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