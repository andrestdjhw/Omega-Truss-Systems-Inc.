<?php
/*
  Template Name: Featured Projects
  Omega Truss Systems — Portafolio (copy deck dev V1, sección 2.4)

  ⚠️ TODO CLIENTE (pendiente #6 del brief): los proyectos de abajo son
  DE MUESTRA para maquetar. Antes de publicar, reemplazar con los
  proyectos reales del cliente (datos + permisos de builders/arquitectos)
  Fotos reales del cliente ya conectadas (Media Library /2026/08/):
  Project1.jpg, Project02–04.jpg, Project05-scaled.jpg, Project06.jpg
*/

$omega_projects = array(
  array(
    'title'     => 'Hillside Custom Estate',
    'category'  => 'Luxury Residential',
    'location'  => 'Orange County, CA',
    'scope'     => 'Full roof truss system + installation',
    'sqft'      => '8,400 sq ft',
    'completion'=> '[Year]',
    'builder'   => '[Builder name]',
    'architect' => '[Architect name]',
    'challenge' => 'Mixed-pitch vaulted roof over a stepped hillside foundation, with seismic and wind loads that pushed standard span tables past their limits.',
    'solution'  => 'Site-specific load engineering with custom scissor and coffer systems, delivered plan-check-ready and set by our own crews in sequence with the framer.',
    'img'       => '/wp-content/uploads/2026/08/Project1.jpg',
  ),
  array(
    'title'     => 'Coastal Modern Residence',
    'category'  => 'Luxury Residential',
    'location'  => 'San Diego County, CA',
    'scope'     => 'Roof + floor trusses, roof sheathing',
    'sqft'      => '6,100 sq ft',
    'completion'=> '[Year]',
    'builder'   => '[Builder name]',
    'architect' => '[Architect name]',
    'challenge' => 'Long open-plan spans with coastal exposure requirements and an architect determined to keep every ceiling line clean.',
    'solution'  => 'Open-web floor systems engineered for vibration performance, with corrosion-conscious detailing and bundled sheathing under one contract.',
    'img'       => '/wp-content/uploads/2026/08/Project02.jpg',
  ),
  array(
    'title'     => 'Fire Zone Mountain Build',
    'category'  => 'Fire Zone',
    'location'  => 'Riverside County, CA',
    'scope'     => 'Fire-zone engineered roof system',
    'sqft'      => '4,700 sq ft',
    'completion'=> '[Year]',
    'builder'   => '[Builder name]',
    'architect' => '[Architect name]',
    'challenge' => 'Wildfire-designated zone with strict ignition-resistance requirements and a plan checker known for sending packages back.',
    'solution'  => 'Fire-zone engineering from day one — the package cleared plan check without a single structural comment, and inspection support carried it to sign-off.',
    'img'       => '/wp-content/uploads/2026/08/Project03.jpg',
  ),
  array(
    'title'     => 'Multifamily Development, Phase I',
    'category'  => 'Multifamily',
    'location'  => 'Coachella Valley, CA',
    'scope'     => 'Floor + roof trusses, phased delivery',
    'sqft'      => '52,000 sq ft',
    'completion'=> '[Year]',
    'builder'   => '[Builder name]',
    'architect' => '[Architect name]',
    'challenge' => 'Forty-eight units on an aggressive framing schedule where one late truss package would have stacked delays across every building.',
    'solution'  => 'Fabrication and delivery phased by building to match the framing sequence — every package on site the day the crew needed it.',
    'img'       => '/wp-content/uploads/2026/08/Project04.jpg',
  ),
  array(
    'title'     => 'Mixed-Use Corner Development',
    'category'  => 'Multifamily',
    'location'  => 'San Diego County, CA',
    'scope'     => 'Structural engineering + roof systems',
    'sqft'      => '28,500 sq ft',
    'completion'=> '[Year]',
    'builder'   => '[Builder name]',
    'architect' => '[Architect name]',
    'challenge' => 'Retail below, residential above: two structural logics meeting at one transfer level, with MEP fighting for every inch of the floor system.',
    'solution'  => 'Open-web floor trusses with MEP routing designed in, coordinated directly with the mechanical engineer before fabrication.',
    'img'       => '/wp-content/uploads/2026/08/Project05-scaled.jpg',
  ),
  array(
    'title'     => 'Vaulted Great Room Estate',
    'category'  => 'Custom Architecture',
    'location'  => 'Orange County, CA',
    'scope'     => 'Custom roof trusses + installation',
    'sqft'      => '7,200 sq ft',
    'completion'=> '[Year]',
    'builder'   => '[Builder name]',
    'architect' => '[Architect name]',
    'challenge' => 'A 32-foot clear-span vaulted great room the original fabricator declined to quote.',
    'solution'  => 'Founder-led engineering resolved the geometry with a custom scissor system — fabricated, delivered and set by one accountable team.',
    'img'       => '/wp-content/uploads/2026/08/Project06.jpg',
  ),
);

// Categorías únicas para los filtros
$omega_categories = array_values(array_unique(array_map(function ($p) { return $p['category']; }, $omega_projects)));

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
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Featured Projects</p>
        <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
          The Proof Is In The Structure.
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          Selected work across luxury residential, multifamily and code-critical
          construction in Southern California.
        </p>
      </div>
    </div>
  </section>

<?php if (empty($omega_projects)) : ?>

  <!-- Empty-state (copy deck 2.4) -->
  <section class="bg-white">
    <div class="max-w-3xl mx-auto px-4 lg:px-8 py-24 text-center reveal">
      <p class="text-lg leading-relaxed text-navy/75">
        Project case studies are being prepared for publication. To discuss references
        relevant to your project type, contact our engineering team.
      </p>
      <a href="<?php echo esc_url(home_url('/contact/')); ?>"
         class="mt-8 inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors">
        Talk to engineering <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </section>

<?php else : ?>

  <!-- ============ S2 · FILTROS + GRID ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">

      <!-- Filtros -->
      <div class="flex flex-wrap items-center gap-2.5 reveal" role="group" aria-label="Filter projects by category">
        <button type="button" data-filter="all" aria-pressed="true"
                class="js-filter is-active rounded-full border border-navy/20 px-4.5 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:border-ember hover:text-ember px-5">
          All Projects
        </button>
        <?php foreach ($omega_categories as $cat) : ?>
          <button type="button" data-filter="<?php echo esc_attr($cat); ?>" aria-pressed="false"
                  class="js-filter rounded-full border border-navy/20 px-5 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:border-ember hover:text-ember">
            <?php echo esc_html($cat); ?>
          </button>
        <?php endforeach; ?>
      </div>

      <!-- Grid -->
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 reveal-stagger" id="projects-grid">
        <?php foreach ($omega_projects as $i => $prj) : ?>
          <article
            data-category="<?php echo esc_attr($prj['category']); ?>"
            class="js-project group flex min-w-0 flex-col overflow-hidden border border-navy/10 bg-white hover:border-ember transition-colors <?php echo $i === 0 ? 'lg:col-span-2' : ''; ?>"
          >
            <div class="<?php echo $i === 0 ? 'grid grid-cols-1 lg:grid-cols-2' : 'flex flex-col'; ?> h-full">

              <!-- Imagen -->
              <div class="relative overflow-hidden <?php echo $i === 0 ? 'min-h-[280px] lg:min-h-full' : ''; ?>">
                <img src="<?php echo esc_url(home_url($prj['img'])); ?>"
                     alt="<?php echo esc_attr($prj['title'] . ' — ' . $prj['location']); ?>"
                     class="<?php echo $i === 0 ? 'absolute inset-0 h-full w-full' : 'h-64 w-full'; ?> object-cover transition-transform duration-500 group-hover:scale-105"
                     loading="lazy">
                <span class="absolute left-4 top-4 rounded-full bg-navy/85 px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                  <?php echo esc_html($prj['category']); ?>
                </span>
              </div>

              <!-- Contenido -->
              <div class="flex flex-1 flex-col p-7 lg:p-8">
                <h2 class="font-display text-xl lg:text-2xl font-bold text-navy [overflow-wrap:anywhere]"><?php echo esc_html($prj['title']); ?></h2>
                <p class="mt-1.5 font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-ember"><?php echo esc_html($prj['location']); ?></p>

                <!-- Specs rápidos -->
                <dl class="mt-5 grid grid-cols-3 gap-4 border-y border-navy/10 py-4">
                  <div class="min-w-0">
                    <dt class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">Scope</dt>
                    <dd class="mt-1 text-[13px] leading-snug text-navy/80"><?php echo esc_html($prj['scope']); ?></dd>
                  </div>
                  <div class="min-w-0">
                    <dt class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">Size</dt>
                    <dd class="mt-1 text-[13px] leading-snug text-navy/80"><?php echo esc_html($prj['sqft']); ?></dd>
                  </div>
                  <div class="min-w-0">
                    <dt class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">Completed</dt>
                    <dd class="mt-1 text-[13px] leading-snug text-navy/80"><?php echo esc_html($prj['completion']); ?></dd>
                  </div>
                </dl>

                <!-- Ficha técnica expandible -->
                <details class="faq-item mt-4">
                  <summary class="flex cursor-pointer items-center justify-between gap-3 font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-navy list-none hover:text-ember transition-colors">
                    Engineering details
                    <span class="faq-icon shrink-0 text-ember" aria-hidden="true">+</span>
                  </summary>
                  <div class="mt-4 space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="min-w-0">
                        <p class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">Builder</p>
                        <p class="mt-1 text-[13px] text-navy/80"><?php echo esc_html($prj['builder']); ?></p>
                      </div>
                      <div class="min-w-0">
                        <p class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">Architect</p>
                        <p class="mt-1 text-[13px] text-navy/80"><?php echo esc_html($prj['architect']); ?></p>
                      </div>
                    </div>
                    <div>
                      <p class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">The Challenge</p>
                      <p class="mt-1 text-sm leading-relaxed text-navy/75"><?php echo esc_html($prj['challenge']); ?></p>
                    </div>
                    <div>
                      <p class="font-display text-[10px] font-semibold uppercase tracking-[0.14em] text-navy/50">The Engineering Solution</p>
                      <p class="mt-1 text-sm leading-relaxed text-navy/75"><?php echo esc_html($prj['solution']); ?></p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </article>
        <?php endforeach; ?>
      </div>

      <!-- Sin resultados del filtro -->
      <p id="projects-empty" class="hidden mt-12 text-center text-navy/60">No projects in this category yet.</p>
    </div>
  </section>

<?php endif; ?>

  <!-- ============ S3 · CIERRE ============ -->
  <section class="relative overflow-hidden band-radial text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.10);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 70%;mask-size:auto 70%;"></div>
    <div class="relative max-w-5xl mx-auto px-4 lg:px-8 py-20 lg:py-24 text-center reveal">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight [overflow-wrap:anywhere]">Your Project Could Be Next.</h2>
      <div class="mt-10 flex justify-center">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta" style="--fold-bg:var(--color-ember);">
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

  // Reveals
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

  // Filtros de proyectos
  var filters = document.querySelectorAll('.js-filter');
  var projects = document.querySelectorAll('.js-project');
  var empty = document.getElementById('projects-empty');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');

      filters.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      var visible = 0;
      projects.forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-category') === f;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
      });
      if (empty) empty.classList.toggle('hidden', visible > 0);
    });
  });
})();
</script>

<?php get_footer();