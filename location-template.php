<?php
/*
  Template Name: Location
  Omega Truss Systems — Service Area (copy deck dev V1, sección 10)
*/

get_header();

$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
$hero_img    = get_the_post_thumbnail_url(null, 'full');
?>

<main id="main">

  <!-- ============ S1 · HERO ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <?php if ($hero_img) : ?>
      <div class="absolute inset-0 bg-cover bg-center" style="background-image:url('<?php echo esc_url($hero_img); ?>');" aria-hidden="true"></div>
      <div class="absolute inset-0 bg-navy/75" aria-hidden="true"></div>
    <?php else : ?>
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
           style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 55%;mask-size:auto 55%;"></div>
    <?php endif; ?>

    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
      <div class="max-w-3xl reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Service Area</p>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
          Built In The Desert. Trusted Across Southern California.
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          From our facility in Thousand Palms, we engineer, fabricate and install truss
          systems for the region's most demanding markets.
        </p>
        <div class="mt-10">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
            <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
            <span class="fold" aria-hidden="true"></span>
            <span class="inner">Schedule a Consultation</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S2 · PRIMARY MARKETS ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="max-w-2xl reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Primary Markets</p>
        <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy">Three regions. One standard.</h2>
      </div>

      <div class="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 reveal-stagger">
        <?php
        $markets = array(
          array('San Diego County', "Multifamily development and wildfire-designated zones make San Diego one of the most code-intensive markets in the state. We engineer truss systems for fire-zone requirements and support projects through the county's demanding plan check environment."),
          array('Orange County', "Luxury custom homes across Orange County demand structural partners who match the architecture's ambition and never cost the builder a schedule. Our engineered systems serve estate and custom residential projects throughout the county."),
          array('Riverside County & Coachella Valley', "Home base. From Thousand Palms we serve the valley's residential, multifamily and commercial growth, with the shortest lead times in our service area."),
        );
        foreach ($markets as $mk) : ?>
          <div class="min-w-0 border border-navy/10 p-8">
            <h3 class="font-display text-xl font-bold text-navy [overflow-wrap:anywhere]"><?php echo esc_html($mk[0]); ?></h3>
            <p class="mt-4 text-sm lg:text-base leading-relaxed text-navy/70"><?php echo esc_html($mk[1]); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ============ S3 · CODE EXPERTISE ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center reveal">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight [overflow-wrap:anywhere]">Engineered For California's Strictest Codes.</h2>
      <p class="mx-auto mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-white/75">
        Title 24 alignment. Wildfire-zone requirements. Coastal and hillside conditions.
        Southern California's code environment is exactly what our in-house engineering
        was built for.
      </p>
    </div>
  </section>

  <!-- ============ S4 · HQ + MAPA ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-5 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Headquarters &amp; Fabrication</p>
        <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy">Thousand Palms, CA</h2>
        <p class="mt-5 text-base leading-relaxed text-navy/75">
          Deliveries staged and scheduled to your framing sequence across the service area.
        </p>
        <!-- TODO NAP: dirección exacta, teléfono y email cuando el cliente confirme -->
        <div class="mt-6 space-y-1.5 text-sm text-navy/70">
          <p>[Full address pending]</p>
          <p><a href="tel:+17609867177" class="hover:text-ember transition-colors">(760) 986-7177</a></p>
          <p>info@omegatruss.com</p>
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=Omega+Truss+Systems+Thousand+Palms+CA"
           target="_blank" rel="noopener noreferrer"
           class="mt-8 inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors">
          Open in Google Maps <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div class="lg:col-span-7 reveal">
        <div class="overflow-hidden border border-navy/10">
          <iframe
            src="https://www.google.com/maps?q=Thousand+Palms,+CA&output=embed"
            title="Omega Truss Systems — Thousand Palms, CA"
            class="block h-[380px] w-full"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S5 · FAQS ============ -->
  <section class="bg-mist">
    <div class="max-w-3xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember reveal">FAQs</p>
      <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy reveal">Coverage, straight answers.</h2>

      <div class="mt-10 reveal-stagger">
        <?php
        $faqs = array(
          array('Where is Omega based?', 'Our headquarters and fabrication facility are in Thousand Palms, California, in the Coachella Valley.'),
          array('Do you take projects in San Diego and Orange County?', 'Yes. San Diego and Orange County are primary markets for our luxury residential and multifamily work.'),
          array('Can you deliver and install anywhere in your service area?', 'Yes. Our crews install everything we fabricate, and deliveries are scheduled to your framing sequence across Southern California.'),
          array('Do you work in wildfire-designated zones?', 'Yes. Fire-zone engineering is a core capability, from system design through inspection support.'),
        );
        foreach ($faqs as $faq) : ?>
          <details class="faq-item border-b border-navy/10 py-5">
            <summary class="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-navy list-none">
              <?php echo esc_html($faq[0]); ?>
              <span class="faq-icon shrink-0 text-ember" aria-hidden="true">+</span>
            </summary>
            <p class="mt-4 text-sm lg:text-base leading-relaxed text-navy/75"><?php echo esc_html($faq[1]); ?></p>
          </details>
        <?php endforeach; ?>
      </div>
    </div>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        <?php
        $ld = array();
        foreach ($faqs as $faq) {
          $ld[] = '{"@type":"Question","name":' . json_encode($faq[0]) . ',"acceptedAnswer":{"@type":"Answer","text":' . json_encode($faq[1]) . '}}';
        }
        echo implode(',', $ld);
        ?>
      ]
    }
    </script>
  </section>

  <!-- ============ S6 · CTA ============ -->
  <section class="bg-white">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center reveal">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight text-navy">Building in Southern California? Let's talk structure.</h2>
      <div class="mt-10 flex justify-center">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:#ffffff;">
          <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
          <span class="fold" aria-hidden="true"></span>
          <span class="inner">Schedule a Consultation</span>
        </a>
      </div>
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