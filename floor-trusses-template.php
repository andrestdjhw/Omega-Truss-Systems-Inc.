<?php
/*
  Template Name: Service - Floor Trusses
  Omega Truss Systems — Floor Trusses (copy deck dev V1, secciones 3–8)
  Estructura: S1 Hero → S2 The Risk We Remove → S3 What's Included →
  S4 Why Omega → S5 How It Works → S6 FAQs (+ schema) → S7 CTA.
*/

$svc = array(

    'title'   => 'Floor Systems That Keep Every Trade Moving.',
    'sub'     => "Open-web floor trusses engineered for clean MEP routing, quiet floors and multifamily schedules that can't slip.",
    'cta'     => 'Request Engineering Review of Your Plans',
    'risk'    => "Floor framing is where schedules quietly die: joists that fight the mechanical plan, drilled members that fail inspection, framing crews waiting on answers. Open-web floor trusses give HVAC, plumbing and electrical a clear path through the structure, engineered in advance so nobody improvises in the field.",
    'included' => array(
      'Open-web floor truss design and engineering',
      'Span and vibration performance engineering',
      'MEP coordination built into the design',
      'Sealed drawings for plan check',
      'In-house fabrication, delivery and installation',
    ),
    'why'     => "On multifamily projects, one framing delay multiplies across every unit. Our floor systems are engineered, fabricated and installed by one team, on one schedule, with a 98% on-time record.",
    'steps'   => array('Plan and MEP review', 'Floor system engineering', 'Fabrication with internal QC', 'Phased delivery by building or floor', 'Installation', 'Inspection support'),
    'faqs'    => array(
      array('Why floor trusses instead of dimensional joists or I-joists?', 'Open-web trusses give trades a designed path for ducts, pipe and wire, cut field modifications, and deliver long spans with engineered vibration performance.'),
      array('Do you coordinate with our mechanical plans?', 'Yes. We review the MEP layout during engineering so chases and duct runs are designed into the floor system, not cut into it later.'),
      array('Can you phase deliveries for multifamily projects?', 'Yes. We schedule fabrication and delivery by building, wing or floor to match your framing sequence.'),
      array('Do you install the floor systems?', 'Yes. Our own crews install every system we fabricate, so accountability never changes hands.'),
    ),
    'closing' => 'Protect the framing schedule before it starts.',
    'closing_cta' => 'Request Engineering Review',
);

get_header();

$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
$hero_img    = get_the_post_thumbnail_url(null, 'full');
if (!$hero_img) {
  $hero_img = home_url('/wp-content/uploads/2026/08/FloorTrusses-scaled.jpg'); // imagen del servicio (Media Library); la Featured Image la sobreescribe
}
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

    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="max-w-3xl reveal">
        <a href="<?php echo esc_url(home_url('/structural-solutions/')); ?>"
           class="inline-flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 hover:text-ember transition-colors">
          <span aria-hidden="true">&larr;</span> All Structural Solutions
        </a>
        <h1 class="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
          <?php echo esc_html($svc['title']); ?>
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          <?php echo esc_html($svc['sub']); ?>
        </p>
        <div class="mt-10">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
            <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
            <span class="fold" aria-hidden="true"></span>
            <span class="inner"><?php echo esc_html($svc['cta']); ?></span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S2 · THE RISK WE REMOVE ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-5 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">The Risk We Remove</p>
        <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy">This scope fails on site, not in the shop.</h2>
      </div>
      <div class="lg:col-span-6 lg:col-start-7 flex items-end reveal">
        <p class="text-base lg:text-lg leading-relaxed text-navy/75"><?php echo esc_html($svc['risk']); ?></p>
      </div>
    </div>
  </section>

  <!-- ============ S3 · WHAT'S INCLUDED ============ -->
  <section class="bg-mist">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <h2 class="text-3xl lg:text-4xl font-bold leading-tight text-navy reveal">What's Included</h2>
      <ul class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 reveal-stagger">
        <?php foreach ($svc['included'] as $item) : ?>
          <li class="flex min-w-0 items-start gap-3 border-b border-navy/10 pb-5">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" aria-hidden="true"></span>
            <span class="text-base leading-relaxed text-navy/80"><?php echo esc_html($item); ?></span>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- ============ S4 · WHY OMEGA ============ -->
  <section class="bg-white">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-28 text-center reveal">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Why Omega</p>
      <p class="mx-auto mt-6 max-w-3xl text-xl lg:text-2xl font-display font-bold leading-relaxed text-navy [overflow-wrap:anywhere]">
        <?php echo esc_html($svc['why']); ?>
      </p>
    </div>
  </section>

  <!-- ============ S5 · HOW IT WORKS ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-24">
      <h2 class="text-3xl lg:text-4xl font-bold leading-tight reveal">How It Works</h2>
      <ol class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 reveal-stagger">
        <?php foreach ($svc['steps'] as $i => $step) : ?>
          <li class="border-t-2 border-white/20 pt-4 min-w-0">
            <span class="font-display text-xs font-bold tracking-[0.12em] text-ember"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></span>
            <p class="mt-2 text-sm leading-snug text-white/85 [overflow-wrap:anywhere]"><?php echo esc_html($step); ?></p>
          </li>
        <?php endforeach; ?>
      </ol>
    </div>
  </section>

  <!-- ============ S6 · FAQS ============ -->
  <section class="bg-white">
    <div class="max-w-3xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember reveal">FAQs</p>
      <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy reveal">Straight answers.</h2>

      <div class="mt-10 reveal-stagger">
        <?php foreach ($svc['faqs'] as $faq) : ?>
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
        foreach ($svc['faqs'] as $faq) {
          $ld[] = '{"@type":"Question","name":' . json_encode($faq[0]) . ',"acceptedAnswer":{"@type":"Answer","text":' . json_encode($faq[1]) . '}}';
        }
        echo implode(',', $ld);
        ?>
      ]
    }
    </script>
  </section>

  <!-- ============ S7 · CTA ============ -->
  <section class="bg-mist">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center reveal">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight text-navy [overflow-wrap:anywhere]"><?php echo esc_html($svc['closing']); ?></h2>
      <div class="mt-10 flex justify-center">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-mist);">
          <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
          <span class="fold" aria-hidden="true"></span>
          <span class="inner"><?php echo esc_html($svc['closing_cta']); ?></span>
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