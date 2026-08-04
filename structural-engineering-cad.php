<?php
/*
  Template Name: Service - Structural Engineering & CAD
  Omega Truss Systems — Structural Engineering & CAD (copy deck dev V1, secciones 3–8)
  Estructura: S1 Hero → S2 The Risk We Remove → S3 What's Included →
  S4 Why Omega → S5 How It Works → S6 FAQs (+ schema) → S7 CTA.
*/

$svc = array(

    'title'   => 'The Engineering Behind The Certainty.',
    'sub'     => "Founder-led structural engineering and fully detailed CAD design, aligned with California's strictest codes and ready for plan check.",
    'cta'     => 'Talk to Our Engineering Team',
    'risk'    => "Most truss companies send engineering out. That's where projects stall: every question, every revision, every plan check comment waits in someone else's queue. At Omega, engineering is the company. Structural challenges that stop other fabricators are resolved at our own desk, on your schedule.",
    'included' => array(
      'Structural analysis and load engineering',
      'Custom CAD truss design and 3D modeling',
      'Title 24-aligned documentation',
      'Sealed, plan-check-ready drawing packages',
      'In-house revisions and resubmittals',
      'Design support for architects during preconstruction',
    ),
    'why'     => "25+ years of structural engineering experience leads every design. When code gets complicated or the architecture gets ambitious, we don't outsource and we don't stall. We solve it.",
    'steps'   => array('Plan intake and structural review', 'Load analysis and system design', 'CAD detailing and 3D model', 'Drawing package for plan check', 'Revisions in days, not weeks', 'Release to fabrication'),
    'faqs'    => array(
      array('Are your drawings Title 24 compliant?', "Our truss designs and documentation are prepared to align with California's Title 24 energy code requirements and the state's structural code environment."),
      array('How fast can you turn a plan check revision?', 'Because engineering is in-house, revisions are typically recalculated and resubmitted within days.'),
      array('Can you help during design, before permits?', "Yes. Involving our engineers during design lets us flag structural issues early, when they're cheap to fix."),
      array('Who stamps the engineering?', 'Every package is produced by our in-house engineering team and delivered plan-check-ready for your jurisdiction.'),
    ),
    'closing' => 'Bring us the hard structural problems.',
    'closing_cta' => 'Talk to Engineering',
);

get_header();

$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
$hero_img    = get_the_post_thumbnail_url(null, 'full');
if (!$hero_img) {
  $hero_img = home_url('/wp-content/uploads/2026/08/StructuralEngineeringCAD-scaled.jpg'); // imagen del servicio (Media Library); la Featured Image la sobreescribe
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