<?php
/*
  Template Name: About
  Omega Truss Systems — About (copy deck dev V1, sección 9)
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
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">About Omega</p>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
          Engineering Should Accelerate Construction. Not Slow It Down.
        </h1>
      </div>
    </div>
  </section>

  <!-- ============ S2 · THE BELIEF ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="lg:col-span-5 reveal">
        <h2 class="text-3xl lg:text-4xl font-bold leading-tight text-navy">One belief. One roof. One accountable partner.</h2>
      </div>
      <div class="lg:col-span-6 lg:col-start-7 space-y-6 reveal">
        <p class="text-base lg:text-lg leading-relaxed text-navy/75">
          Omega was founded around one belief: engineering should accelerate construction,
          not slow it down. With decades of structural expertise, our team brings engineering,
          fabrication and installation together under one roof, giving builders one accountable
          partner from concept to completion.
        </p>
        <p class="text-base lg:text-lg leading-relaxed text-navy/75">
          On high-value projects, the cost of a structural mistake is never just the fix.
          It's the inspection that fails, the schedule that slips, the trades that stack up
          behind it. <strong>We built Omega so that never happens on our scope.</strong>
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S3 · FOUNDER-LED ============ -->
  <section class="bg-mist">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-6 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Founder-Led Engineering</p>
        <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy [overflow-wrap:anywhere]">
          25+ Years At The Desk Where It Gets Solved.
        </h2>
      </div>
      <div class="lg:col-span-5 lg:col-start-8 reveal">
        <p class="text-base lg:text-lg leading-relaxed text-navy/75">
          Omega is founder-led, with more than 25 years of structural engineering experience
          behind every system we design. When code gets complicated or a design gets ambitious,
          most companies start outsourcing or delaying. We don't. The problem comes to our desk,
          and it leaves solved.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S4 · ONE ACCOUNTABLE PARTNER ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-6 lg:order-2 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Fully Integrated</p>
        <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy">No Handoffs. No Finger-Pointing.</h2>
      </div>
      <div class="lg:col-span-5 lg:order-1 reveal">
        <p class="text-base lg:text-lg leading-relaxed text-navy/75">
          No outsourced engineering. No subcontracted installation. No gap between the drawing,
          the shop and the field. When you call Omega, the team that engineered your system is
          the team that fabricates it and stands under it on site.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S5 · PROOF (stats compactos) ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 reveal">
        <div class="min-w-0">
          <p class="font-display text-4xl lg:text-6xl font-extrabold"><span class="js-count" data-count="98" data-decimals="0">0</span><span class="text-ember">%</span></p>
          <p class="mt-2 text-xs uppercase tracking-[0.14em] text-white/60 font-display font-semibold">On-Time Delivery</p>
        </div>
        <div class="min-w-0">
          <p class="font-display text-4xl lg:text-6xl font-extrabold"><span class="js-count" data-count="2.4" data-decimals="1">0</span><span class="text-ember">%</span></p>
          <p class="mt-2 text-xs uppercase tracking-[0.14em] text-white/60 font-display font-semibold">Internal Defect Rate</p>
        </div>
        <div class="min-w-0">
          <p class="font-display text-4xl lg:text-6xl font-extrabold"><span class="js-count" data-count="25" data-decimals="0">0</span><span class="text-ember">+</span></p>
          <p class="mt-2 text-xs uppercase tracking-[0.14em] text-white/60 font-display font-semibold">Years Engineering Experience</p>
        </div>
        <div class="min-w-0">
          <p class="font-display text-4xl lg:text-6xl font-extrabold"><span class="js-count" data-count="100" data-decimals="0">0</span><span class="text-ember">%</span></p>
          <p class="mt-2 text-xs uppercase tracking-[0.14em] text-white/60 font-display font-semibold">In-House Process</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S6 · WHERE WE WORK ============ -->
  <section class="bg-white">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-28 text-center reveal">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Where We Work</p>
      <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy">From the Coachella Valley to San Diego and Orange County.</h2>
      <p class="mx-auto mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-navy/75">
        Based in Thousand Palms, California, serving Southern California's most demanding
        construction markets.
      </p>
      <a href="<?php echo esc_url(home_url('/location/')); ?>"
         class="mt-8 inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors">
        See our service area <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </section>

  <!-- ============ S7 · CTA ============ -->
  <section class="bg-mist">
    <div class="max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center reveal">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight text-navy">Meet Us on Your Next Project.</h2>
      <div class="mt-10 flex justify-center">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-mist);">
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
  var revealEls = document.querySelectorAll('.reveal');
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