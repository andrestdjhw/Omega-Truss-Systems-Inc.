<?php
/*
  Template Name: Structural Solutions
  Omega Truss Systems — Hub de servicios (copy deck dev V1, sección 2.3)
  Slug esperado: structural-solutions
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
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Structural Solutions</p>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
          One Integrated Scope. From CAD Design To Inspection Support.
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          Engineered for California's strictest codes — designed, fabricated and installed
          by one accountable team.
        </p>
        <div class="mt-10">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
            <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
            <span class="fold" aria-hidden="true"></span>
            <span class="inner">Request Engineering Review of Your Plans</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ S2 · GRID DE SERVICIOS ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-stagger">
        <?php
        $services = array(
          array('Custom Roof Trusses', 'Engineered-to-order roof systems for complex architecture: long spans, vaulted geometries, hillside and fire-zone conditions.', '/custom-roof-trusses/'),
          array('Floor Trusses', 'Open-web floor systems that simplify MEP routing and keep multifamily schedules moving.', '/floor-trusses/'),
          array('Structural Engineering & CAD', 'Founder-led engineering resolves the structural challenges most fabricators send back to the architect — with Title 24-aligned drawings ready for plan check.', '/structural-engineering-cad/'),
          array('Fabrication & Quality Control', 'Precision in-house fabrication with an internal QC process that holds our defect rate to 2.4%, well below the 6.8% industry average.', '/fabrication-quality-control/'),
          array('Installation', 'Our own crews install what we engineer. One standard, one accountable team, no subcontractor roulette.', '/installation/'),
          array('Roof Sheathing & Project Support', 'Bundled sheathing, project coordination and inspection support — one contract, one point of accountability, through sign-off.', '/roof-sheathing-project-support/'),
        );
        foreach ($services as $svc) : ?>
          <a href="<?php echo esc_url(home_url($svc[2])); ?>"
             class="group flex min-w-0 flex-col justify-between border border-navy/10 p-8 hover:border-ember transition-colors">
            <div>
              <h2 class="font-display text-xl font-bold text-navy [overflow-wrap:anywhere]"><?php echo esc_html($svc[0]); ?></h2>
              <p class="mt-4 text-sm lg:text-base leading-relaxed text-navy/70"><?php echo esc_html($svc[1]); ?></p>
            </div>
            <span class="mt-8 inline-flex items-center gap-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-ember">
              View service <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </span>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ============ S3 · PROCESO ============ -->
  <section class="bg-mist">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember reveal">One Team, End To End</p>
      <ol class="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-8 reveal-stagger">
        <?php
        $steps = array('Engineering', '3D Modeling', 'Fabrication', 'Quality Control', 'Delivery', 'Installation', 'Inspection Support');
        foreach ($steps as $i => $step) : ?>
          <li class="border-t-2 border-navy/15 pt-4 min-w-0">
            <span class="font-display text-xs font-bold tracking-[0.12em] text-ember"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></span>
            <p class="mt-2 font-display text-sm font-semibold uppercase tracking-[0.08em] text-navy [overflow-wrap:anywhere]"><?php echo esc_html($step); ?></p>
          </li>
        <?php endforeach; ?>
      </ol>
    </div>
  </section>

  <!-- ============ S4 · CTA ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.04);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center reveal">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight">Send us the plans. We'll tell you what the structure really needs.</h2>
      <div class="mt-10 flex justify-center">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
          <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
          <span class="fold" aria-hidden="true"></span>
          <span class="inner">Request Engineering Review</span>
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