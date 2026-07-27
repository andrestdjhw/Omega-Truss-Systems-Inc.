<?php
/*
  Template Name: Home
  Omega Truss Systems — Homepage (copy deck dev V1, secciones S1–S9)
  Fotos: el hero usa la Featured Image de la página (Media Library);
  mientras no haya fotografía real, cae a navy + estampado de marca.
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

    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-36">
      <div class="max-w-3xl reveal">
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] [overflow-wrap:anywhere]">
          Engineering Confidence Into Every Structure.
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          Custom engineered truss systems for Southern California's most demanding
          residential, multifamily and commercial construction projects.
        </p>
        <p class="mt-4 font-display text-sm font-semibold uppercase tracking-[0.22em] text-ember">
          Designed. Fabricated. Installed. Entirely in-house.
        </p>
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
            <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
            <span class="fold" aria-hidden="true"></span>
            <span class="inner">Schedule a Consultation</span>
          </a>
          <a href="<?php echo esc_url(home_url('/structural-solutions/')); ?>"
             class="inline-flex items-center border border-white/40 px-5 py-3 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:border-white hover:bg-white hover:text-navy transition-colors">
            Explore Structural Solutions
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S2 · BUILT FOR HIGH-STAKES PROJECTS (marquee, bajo el hero) ============ -->
  <section class="bg-white border-y border-navy/10 py-4 lg:py-5 overflow-hidden">
    <p class="sr-only">Built for high-stakes projects: Luxury Residential, Estate Homes, Custom Architecture, Hillside Construction, Fire Zones, Coastal Homes, Multifamily, Mixed Use, Government, Hospitality.</p>
    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <?php
        $markets = array('Luxury Residential', 'Estate Homes', 'Custom Architecture', 'Hillside Construction', 'Fire Zones', 'Coastal Homes', 'Multifamily', 'Mixed Use', 'Government', 'Hospitality');
        for ($r = 0; $r < 2; $r++) :
          foreach ($markets as $m) : ?>
            <span class="flex items-center gap-8 font-display text-xs lg:text-sm font-bold uppercase tracking-[0.16em] text-navy/70 whitespace-nowrap">
              <?php echo esc_html($m); ?>
              <span class="h-1 w-1 rounded-full bg-ember shrink-0"></span>
            </span>
          <?php endforeach;
        endfor; ?>
      </div>
    </div>
  </section>

  <!-- ============ S3 · WHY BUILDERS CHOOSE OMEGA ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-5 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Why Builders Choose Omega</p>
        <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy [overflow-wrap:anywhere]">
          Not because we build trusses. Because we remove uncertainty.
        </h2>
      </div>
      <div class="lg:col-span-6 lg:col-start-7 flex items-end reveal">
        <p class="text-base lg:text-lg leading-relaxed text-navy/75">
          Every project has a critical path. One engineering mistake can delay inspections,
          push schedules, increase labor costs and damage client relationships. Omega exists
          to eliminate those risks through fully integrated engineering, precision fabrication
          and professional installation.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S4 · PROCESS TIMELINE ============ -->
  <section class="bg-mist">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="max-w-2xl reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Process</p>
        <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy">Precision Starts Before Production</h2>
      </div>

      <ol class="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-10 reveal-stagger">
        <?php
        $steps = array('Engineering', '3D Modeling', 'Fabrication', 'Quality Control', 'Delivery', 'Installation', 'Inspection Support');
        foreach ($steps as $i => $step) : ?>
          <li class="border-t-2 border-navy/15 pt-4 min-w-0">
            <span class="font-display text-xs font-bold tracking-[0.12em] text-ember"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></span>
            <p class="mt-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-navy [overflow-wrap:anywhere]"><?php echo esc_html($step); ?></p>
          </li>
        <?php endforeach; ?>
      </ol>

      <p class="mt-12 max-w-2xl text-base leading-relaxed text-navy/75 reveal">
        When plan check flags a revision, most companies wait on outside engineers.
        Our team revises, recalculates and resubmits in-house. <strong>In days, not weeks.</strong>
      </p>
    </div>
  </section>

  <!-- ============ S5 · PROOF / STATS ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>

    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight reveal">When Failure Isn't an Option</h2>

      <div class="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 reveal-stagger">
        <div class="min-w-0">
          <p class="font-display text-5xl lg:text-7xl font-extrabold text-white"><span class="js-count" data-count="98" data-decimals="0">0</span><span class="text-ember">%</span></p>
          <p class="mt-3 text-sm uppercase tracking-[0.14em] text-white/60 font-display font-semibold">On-Time Delivery</p>
        </div>
        <div class="min-w-0">
          <p class="font-display text-5xl lg:text-7xl font-extrabold text-white"><span class="js-count" data-count="2.4" data-decimals="1">0</span><span class="text-ember">%</span></p>
          <p class="mt-3 text-sm uppercase tracking-[0.14em] text-white/60 font-display font-semibold">Internal Defect Rate</p>
        </div>
        <div class="min-w-0">
          <p class="font-display text-5xl lg:text-7xl font-extrabold text-white"><span class="js-count" data-count="25" data-decimals="0">0</span><span class="text-ember">+</span></p>
          <p class="mt-3 text-sm uppercase tracking-[0.14em] text-white/60 font-display font-semibold">Years Engineering Experience</p>
        </div>
        <div class="min-w-0">
          <p class="font-display text-5xl lg:text-7xl font-extrabold text-white"><span class="js-count" data-count="100" data-decimals="0">0</span><span class="text-ember">%</span></p>
          <p class="mt-3 text-sm uppercase tracking-[0.14em] text-white/60 font-display font-semibold">In-House Process</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S6 · STRUCTURAL SOLUTIONS ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
        <div class="max-w-2xl">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Structural Solutions</p>
          <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy">One integrated scope, engineered for California's strictest codes.</h2>
        </div>
        <a href="<?php echo esc_url(home_url('/structural-solutions/')); ?>"
           class="inline-flex shrink-0 items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors whitespace-nowrap">
          Explore all solutions <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
        <?php
        $services = array(
          array('Custom Roof Trusses', 'Engineered-to-order roof systems for complex architecture, long spans and code-critical conditions.', '/custom-roof-trusses/'),
          array('Floor Trusses', 'Open-web floor systems that simplify MEP routing and keep multifamily schedules moving.', '/floor-trusses/'),
          array('Structural Engineering & CAD', 'Founder-led engineering and fully detailed, Title 24-aligned drawings, ready for plan check.', '/structural-engineering-cad/'),
          array('Fabrication & Quality Control', 'Precision in-house fabrication with an internal QC process that holds defects to 2.4%.', '/fabrication-quality-control/'),
          array('Installation', 'Our own crews install what we engineer. One standard, one accountable team.', '/installation/'),
          array('Roof Sheathing & Project Support', 'Bundled sheathing, project coordination and inspection support under one contract.', '/roof-sheathing-project-support/'),
        );
        foreach ($services as $svc) : ?>
          <a href="<?php echo esc_url(home_url($svc[2])); ?>"
             class="group flex min-w-0 flex-col justify-between border border-navy/10 p-7 hover:border-ember transition-colors">
            <div>
              <h3 class="font-display text-lg font-bold text-navy [overflow-wrap:anywhere]"><?php echo esc_html($svc[0]); ?></h3>
              <p class="mt-3 text-sm leading-relaxed text-navy/70"><?php echo esc_html($svc[1]); ?></p>
            </div>
            <span class="mt-6 inline-flex items-center gap-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-ember">
              Learn more <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </span>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ============ S7 · BUILDER PSYCHOLOGY ============ -->
  <section class="bg-mist">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 py-24 lg:py-32 text-center reveal">
      <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-navy [overflow-wrap:anywhere]">
        Your Reputation Is Built Long Before The Home Is.
      </h2>
      <p class="mx-auto mt-8 max-w-3xl text-base lg:text-lg leading-relaxed text-navy/75">
        Architects remember the partners who solve problems before they happen. Builders
        remember the companies that keep schedules moving. Developers remember the teams
        that eliminate uncertainty. That's why Omega isn't simply a supplier.
        <strong>We're part of the project's success.</strong>
      </p>
    </div>
  </section>

  <!-- ============ S8 · FAQS ============ -->
  <section class="bg-white">
    <div class="max-w-3xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember reveal">FAQs</p>
      <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy reveal">Straight answers, engineer to builder.</h2>

      <div class="mt-10 reveal-stagger">
        <?php
        $faqs = array(
          array('Do you handle engineering in-house or outsource it?', "Everything is in-house. The same team that engineers your truss system fabricates it and installs it. That's how revisions get resolved in days instead of weeks."),
          array('What types of projects do you take on?', 'Luxury residential, estate homes, hillside and coastal construction, fire-zone builds, multifamily and mixed-use developments, and select commercial and public projects across Southern California.'),
          array('Can you work in wildfire-designated zones?', "Yes. We engineer truss systems for fire-zone requirements and California's strict code environment, and we support the project through plan check and inspection."),
          array('What happens if plan check requires a revision?', "Our engineering team revises, recalculates and resubmits in-house, typically within days. Your schedule doesn't wait on a third-party engineer."),
          array('Do you install the trusses you fabricate?', 'Yes. Our own crews handle installation. One accountable partner from CAD design to final inspection support.'),
          array('How early should we involve Omega in a project?', 'As early as possible. When we review plans during design, we can flag structural issues before they become expensive, and protect your critical path from day one.'),
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

  <!-- ============ S9 · CLOSING STATEMENT + CTA ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.04);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-5xl mx-auto px-4 lg:px-8 py-24 lg:py-32 text-center reveal">
      <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight [overflow-wrap:anywhere]">
        Every Great Home Begins With Structural Confidence.
      </h2>
      <p class="mt-6 font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
        Let's Engineer Your Next Project.
      </p>
      <div class="mt-10 flex justify-center">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
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

  // Reveals al hacer scroll
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

  // Number-tick de los stats
  var counters = document.querySelectorAll('.js-count');
  function animate(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var dur = 1400, start = null;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && !reduce) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = parseFloat(el.getAttribute('data-count')).toFixed(parseInt(el.getAttribute('data-decimals') || '0', 10));
    });
  }
})();
</script>

<?php get_footer();