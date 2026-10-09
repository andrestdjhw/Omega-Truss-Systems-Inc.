<?php
/*
  Template Name: Home
  Omega Truss Systems — Homepage (copy deck dev V1, secciones S1–S9)
  Fotos: el hero usa la Featured Image de la página (Media Library);
  mientras no haya fotografía real, cae a navy + estampado de marca.
*/

require get_theme_file_path('/inc/projects-data.php');

get_header();

$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
$hero_img    = get_the_post_thumbnail_url(null, 'full');
// Videos del hero: se reproducen en secuencia con fundido cruzado (ver script al final).
// 1080p para desktop; versión -720 para pantallas < 768px (originales en /video-originals de Local)
$hero_videos = array();
$hero_videos_mobile = array();
foreach (array('web-1', 'web-2', 'web-3', 'web-4') as $clip) {
  $hero_videos[]        = home_url('/wp-content/uploads/2026/10/' . $clip . '.mp4');
  $hero_videos_mobile[] = home_url('/wp-content/uploads/2026/10/' . $clip . '-720.mp4');
}
$motif_url   = home_url('/wp-content/uploads/2026/08/Omega-Elementos-de-Apoyo-02-scaled.png'); // elemento de apoyo vertical
$band_img    = home_url('/wp-content/uploads/2026/10/9.jpg'); // fondo de Process: armado de trusses en planta
?>

<main id="main">

  <!-- ============ S1+S2 · HERO + MARQUEE = un viewport completo ============ -->
  <div class="hero-viewport flex flex-col">

  <!-- ============ S1 · HERO ============ -->
  <section class="relative flex-1 flex items-center overflow-hidden bg-navy text-white">
    <!-- Dos <video> apilados (A/B): mientras uno se ve, el otro precarga el
         siguiente clip. Sin JS, el primero queda en loop. -->
    <div class="js-hero-videos absolute inset-0" aria-hidden="true"
         data-videos="<?php echo esc_attr(wp_json_encode($hero_videos)); ?>"
         data-videos-mobile="<?php echo esc_attr(wp_json_encode($hero_videos_mobile)); ?>">
      <video
        class="hero-video is-active absolute inset-0 h-full w-full object-cover"
        autoplay muted loop playsinline preload="auto"
        poster="<?php echo esc_url($hero_img ? $hero_img : home_url('/wp-content/uploads/2026/10/hero-poster.jpg')); ?>"
      >
        <source src="<?php echo esc_url($hero_videos_mobile[0]); ?>" type="video/mp4" media="(max-width: 767px)">
        <source src="<?php echo esc_url($hero_videos[0]); ?>" type="video/mp4">
      </video>
      <video class="hero-video absolute inset-0 h-full w-full object-cover" muted playsinline preload="none"></video>
    </div>
    <!-- Panel del hero: degradado navy (sólido donde va el texto) + estampado vertical de marca -->
    <div class="hero-shade absolute inset-0" aria-hidden="true"></div>
    <div class="hidden lg:block absolute left-0 top-0 bottom-0 w-36 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.10);-webkit-mask-image:url('<?php echo esc_url($motif_url); ?>');mask-image:url('<?php echo esc_url($motif_url); ?>');-webkit-mask-repeat:repeat-y;mask-repeat:repeat-y;-webkit-mask-size:100% auto;mask-size:100% auto;-webkit-mask-position:center top;mask-position:center top;"></div>

    <div class="relative w-full max-w-site mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
      <div class="lg:col-span-6 hero-enter">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
          Engineering <span class="mx-2 text-white/30" aria-hidden="true">/</span>
          Fabrication <span class="mx-2 text-white/30" aria-hidden="true">/</span>
          <span class="text-ember">Delivery</span>
        </p>
        <h1 class="split-ready words-in mt-5 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] [overflow-wrap:anywhere]">
          <span class="sr-only">Engineering Confidence Into Every Structure.</span>
          <?php $w = 0; ?>
          <span aria-hidden="true"><?php echo omega_split_words('Engineering Confidence', $w); ?>
          <span class="block text-ember"><?php echo omega_split_words('Into Every Structure.', $w); ?></span></span>
        </h1>
        <p class="mt-6 max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
          Custom engineered truss systems for Southern California's most demanding
          residential, multifamily and commercial construction projects.
        </p>
        <!-- CTA principal ember + link secundario con flecha en círculo (estilo mockup) -->
        <div class="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
            <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
            <span class="fold" aria-hidden="true"></span>
            <span class="inner">Schedule a Consultation</span>
          </a>
          <a href="<?php echo esc_url(home_url('/structural-solutions/')); ?>"
             class="group inline-flex items-center gap-3 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
            <span class="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition-colors duration-300 group-hover:border-ember group-hover:bg-ember">
              <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
            <span class="transition-colors group-hover:text-ember">Structural Solutions</span>
          </a>
        </div>
      </div>

      <!-- Quick-quote form -->
      <div class="lg:col-span-5 lg:col-start-8 hero-enter">
        <div class="form-chip form-chip--glass p-6 lg:p-7">
          <p class="font-display text-lg font-bold text-white">Request a Consultation</p>
          <p class="mt-1 text-[13px] leading-snug text-white/60">Our engineering team replies within one business day.</p>
          <div class="js-contact-form mt-5"
               data-variant="full"
               data-ajax="<?php echo esc_url(admin_url('admin-ajax.php')); ?>"
               data-nonce="<?php echo esc_attr(wp_create_nonce('omega_contact')); ?>"></div>
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

  </div><!-- /hero-viewport -->

  <!-- ============ S6 · STRUCTURAL SOLUTIONS ============ -->
  <section class="bg-white">
    <div class="max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
        <div class="max-w-2xl">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Structural Solutions</p>
          <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight text-navy"><?php echo omega_accent("One integrated scope, engineered for California's strictest codes."); ?></h2>
        </div>
        <a href="<?php echo esc_url(home_url('/structural-solutions/')); ?>"
           class="inline-flex shrink-0 items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-navy hover:text-ember transition-colors whitespace-nowrap">
          Explore all solutions <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-stagger">
        <?php
        $services = array(
          array('Custom Roof Trusses', 'Engineered-to-order roof systems for complex architecture, long spans and code-critical conditions.', '/custom-roof-trusses/', '/wp-content/uploads/2026/08/CustomRoofTrusses-scaled.jpg', 'roof'),
          array('Floor Trusses', 'Open-web floor systems that simplify MEP routing and keep multifamily schedules moving.', '/floor-trusses/', '/wp-content/uploads/2026/08/FloorTrusses-scaled.jpg', 'floor'),
          array('Structural Engineering & CAD', 'Founder-led engineering and fully detailed, Title 24-aligned drawings, ready for plan check.', '/structural-engineering-cad/', '/wp-content/uploads/2026/08/StructuralEngineeringCAD-scaled.jpg', 'cad'),
          array('Fabrication & Quality Control', 'Precision in-house fabrication with an internal QC process that holds defects to 2.4%.', '/fabrication-quality-control/', '/wp-content/uploads/2026/08/FabricationQA-scaled.jpg', 'gear'),
        );
        foreach ($services as $svc) : ?>
          <a href="<?php echo esc_url(home_url($svc[2])); ?>"
             class="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-navy/10 shadow-[0_10px_30px_rgba(14,26,47,0.12)] transition-all duration-300 hover:border-ember hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,26,47,0.24)]">
            <div class="relative">
              <div class="overflow-hidden">
                <img src="<?php echo esc_url(home_url($svc[3])); ?>" alt="<?php echo esc_attr($svc[0]); ?>"
                     class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
              </div>
              <!-- Ícono ember montado sobre el borde de la imagen -->
              <span class="absolute -bottom-6 left-7 flex h-12 w-12 items-center justify-center rounded-md bg-ember text-white shadow-[0_8px_20px_rgba(170,102,67,0.4)] transition-transform duration-300 group-hover:-translate-y-1">
                <?php echo omega_icon($svc[4], 'h-6 w-6'); ?>
              </span>
            </div>
            <div class="flex flex-1 flex-col justify-between p-7 pt-11">
              <div>
                <h3 class="font-display text-lg font-bold text-navy [overflow-wrap:anywhere]"><?php echo esc_html($svc[0]); ?></h3>
                <p class="mt-3 text-sm leading-relaxed text-navy/70"><?php echo esc_html($svc[1]); ?></p>
              </div>
              <span class="mt-6 inline-flex items-center gap-2 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-ember">
                Learn more <span class="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </span>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ============ S6B · REVIEWS (TrustIndex · Google, widget en tema "dark background") ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 reveal">
        <div class="max-w-2xl">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Client Reviews</p>
          <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight"><?php echo omega_accent('Trusted By The Builders We Serve.'); ?></h2>
          <p class="mt-5 text-base lg:text-lg leading-relaxed text-white/75">
            Real reviews from homeowners, builders and contractors who trusted Omega with their structure.
          </p>
        </div>
        <div class="flex shrink-0 flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
          <a href="<?php echo esc_url(OMEGA_REVIEW_URL); ?>" target="_blank" rel="noopener noreferrer" class="btn-cta btn-cta--ember" style="--fold-bg:var(--color-navy);">
            <span class="points_wrapper" aria-hidden="true"><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span><span class="point"></span></span>
            <span class="fold" aria-hidden="true"></span>
            <span class="inner">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.19-1.79 4.13-1.15 1.15-2.93 2.4-6.05 2.4-4.83 0-8.6-3.89-8.6-8.72s3.77-8.72 8.6-8.72c2.6 0 4.51 1.03 5.91 2.35l2.31-2.31C18.75 1.44 16.13 0 12.48 0 5.87 0 .31 5.39.31 12s5.56 12 12.17 12c3.57 0 6.27-1.17 8.37-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.05-1.47-.17-2.05H12.48z"/></svg>
              Leave a Review
            </span>
          </a>
          <a href="<?php echo esc_url(OMEGA_GMB_URL); ?>" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white hover:text-ember transition-colors whitespace-nowrap">
            See all on Google <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      <?php if (shortcode_exists('trustindex')) : ?>
        <div class="reviews-widget mt-12 reveal">
          <?php echo do_shortcode('[trustindex no-registration=google]'); ?>
        </div>
      <?php endif; ?>
    </div>
  </section>

  <!-- ============ S3 · WHY BUILDERS CHOOSE OMEGA ============ -->
  <section class="relative overflow-hidden bg-mist">
    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div class="hidden lg:block absolute left-full ml-8 top-0 bottom-0 w-40 pointer-events-none" aria-hidden="true"
           style="background-color:rgba(170,102,67,0.32);-webkit-mask-image:url('<?php echo esc_url($motif_url); ?>');mask-image:url('<?php echo esc_url($motif_url); ?>');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-position:center;mask-position:center;"></div>
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
          and reliable delivery.
        </p>
      </div>
    </div>
  </section>

  <!-- ============ S5 · PROOF / STATS (foto: interior de la planta) ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <?php echo omega_photo_bg('8.jpg', 'dark'); ?>
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>

    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28">
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

  <!-- ============ S7 · BUILDER PSYCHOLOGY (foto clara de fondo) ============ -->
  <section class="relative overflow-hidden bg-mist">
    <?php echo omega_photo_bg('11.jpg', 'light'); ?>
    <div class="relative max-w-5xl mx-auto px-4 lg:px-8 py-24 lg:py-32 text-center reveal">
      <div class="hidden lg:block absolute left-full ml-8 top-0 bottom-0 w-40 pointer-events-none" aria-hidden="true"
           style="background-color:rgba(14,26,47,0.20);-webkit-mask-image:url('<?php echo esc_url($motif_url); ?>');mask-image:url('<?php echo esc_url($motif_url); ?>');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-position:center;mask-position:center;"></div>
      <h2 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-navy [overflow-wrap:anywhere]">
        <?php echo omega_accent('Your Reputation Is Built Long Before The Home Is.'); ?>
      </h2>
      <p class="mx-auto mt-8 max-w-3xl text-base lg:text-lg leading-relaxed text-navy/75">
        Architects remember the partners who solve problems before they happen. Builders
        remember the companies that keep schedules moving. Developers remember the teams
        that eliminate uncertainty. That's why Omega isn't simply a supplier.
        <strong>We're part of the project's success.</strong>
      </p>
    </div>
  </section>

  <!-- ============ S7B · PROCESS (fila horizontal sobre la banda de imagen) ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="js-lazy-bg absolute inset-0 bg-cover bg-center" data-bg="<?php echo esc_url($band_img); ?>" aria-hidden="true"></div>
    <div class="absolute inset-0 bg-navy/85" aria-hidden="true"></div>
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>

    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="max-w-2xl reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Process</p>
        <h2 class="mt-4 text-3xl lg:text-5xl font-bold leading-tight"><?php echo omega_accent('Precision Starts Before Production.'); ?></h2>
      </div>

      <!-- 1 col en móvil, 2 en tablet, 5 en desktop (con flechas entre pasos) -->
      <ol class="reveal-stagger mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
        <?php
        $steps = array(
          array('Engineering', 'compass', 'Founder-led structural engineering resolves loads, spans and code requirements first.'),
          array('3D Modeling', 'cube', 'Every member and connection is modeled, so conflicts surface on screen, not on site.'),
          array('Fabrication', 'gear', 'Precision fabrication runs straight from the approved model in our own facility.'),
          array('Quality Control', 'shield', 'Each package is checked against the model before it ships: a 2.4% defect rate.'),
          array('Delivery', 'truck', 'Labeled packages arrive on a schedule matched to your framing sequence.'),
        );
        foreach ($steps as $i => $step) : ?>
          <li class="process-step relative min-w-0">
            <div class="flex items-center gap-4">
              <span class="process-num font-display text-5xl font-bold leading-none" aria-hidden="true"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></span>
              <span class="text-white/85"><?php echo omega_icon($step[1], 'h-9 w-9'); ?></span>
            </div>
            <h3 class="mt-6 font-display text-base font-bold uppercase tracking-[0.12em] [overflow-wrap:anywhere]"><?php echo esc_html($step[0]); ?></h3>
            <p class="mt-3 text-sm leading-relaxed text-white/70"><?php echo esc_html($step[2]); ?></p>
          </li>
        <?php endforeach; ?>
      </ol>

      <p class="mt-12 max-w-2xl text-base leading-relaxed text-white/80 reveal">
        When plan check flags a revision, most companies wait on outside engineers.
        Our team revises, recalculates and resubmits in-house. <strong>In days, not weeks.</strong>
      </p>
    </div>
  </section>

  <!-- ============ S7C · FEATURED PROJECTS (datos en inc/projects-data.php) ============ -->
  <section class="bg-mist">
    <div class="max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <div class="lg:col-span-3 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Featured Projects</p>
        <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy"><?php echo omega_accent("Built For What's Next."); ?></h2>
        <p class="mt-5 text-base leading-relaxed text-navy/75">
          From hillside estates to multifamily developments, our truss systems carry
          Southern California's most demanding projects.
        </p>
        <a href="<?php echo esc_url(home_url('/featured-projects/')); ?>"
           class="mt-8 inline-flex items-center gap-2 rounded-md border border-ember px-5 py-3 font-display text-[12px] font-semibold uppercase tracking-[0.12em] text-ember transition-colors hover:bg-ember hover:text-white">
          View all projects <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div class="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal-stagger">
        <?php foreach (array(0, 2, 3, 5) as $idx) :
          if (empty($omega_projects[$idx])) continue;
          $prj = $omega_projects[$idx]; ?>
          <a href="<?php echo esc_url(home_url('/featured-projects/')); ?>"
             class="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-navy/10 bg-white shadow-[0_10px_30px_rgba(14,26,47,0.10)] transition-all duration-300 hover:border-ember hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(14,26,47,0.22)]">
            <div class="overflow-hidden">
              <img src="<?php echo esc_url(home_url($prj['img'])); ?>"
                   alt="<?php echo esc_attr($prj['title'] . ' — ' . $prj['location']); ?>"
                   class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
            </div>
            <div class="flex flex-1 items-end justify-between gap-3 p-5">
              <div class="min-w-0">
                <h3 class="font-display text-[13px] font-bold uppercase leading-snug tracking-[0.08em] text-navy [overflow-wrap:anywhere]"><?php echo esc_html($prj['title']); ?></h3>
                <p class="mt-1 text-xs text-navy/60"><?php echo esc_html($prj['category']); ?></p>
              </div>
              <span class="shrink-0 text-ember transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </div>
          </a>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- ============ S8 · FAQS ============ -->
  <section class="relative overflow-hidden bg-white">
    <div class="relative max-w-3xl mx-auto px-4 lg:px-8 py-20 lg:py-28">
      <div class="hidden lg:block absolute right-full mr-8 top-0 bottom-0 w-40 pointer-events-none" aria-hidden="true"
           style="background-color:rgba(170,102,67,0.30);-webkit-mask-image:url('<?php echo esc_url($motif_url); ?>');mask-image:url('<?php echo esc_url($motif_url); ?>');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-position:center;mask-position:center;transform:scaleX(-1);"></div>
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember reveal">FAQs</p>
      <h2 class="mt-4 text-3xl lg:text-4xl font-bold leading-tight text-navy reveal"><?php echo omega_accent('Straight answers, engineer to builder.'); ?></h2>

      <div class="mt-10 reveal-stagger">
        <?php
        $faqs = array(
          array('Do you handle engineering in-house or outsource it?', "Everything is in-house. The same team that engineers your truss system fabricates it in our own facility. That's how revisions get resolved in days instead of weeks."),
          array('What types of projects do you take on?', 'Luxury residential, estate homes, hillside and coastal construction, fire-zone builds, multifamily and mixed-use developments, and select commercial and public projects across Southern California.'),
          array('Can you work in wildfire-designated zones?', "Yes. We engineer truss systems for fire-zone requirements and California's strict code environment, and we support the project through plan check."),
          array('What happens if plan check requires a revision?', "Our engineering team revises, recalculates and resubmits in-house, typically within days. Your schedule doesn't wait on a third-party engineer."),
          array('What does Omega handle on a project?', 'We specialize in engineering, manufacturing and delivering custom truss systems. One accountable partner from CAD design to the delivered truss package.'),
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

  <!-- ============ S9 · CONTACT (cierre, video de fondo) ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <!-- Video diferido: no descarga hasta acercarse al viewport (Motion.js · .js-lazy-video) -->
    <video class="js-lazy-video absolute inset-0 h-full w-full object-cover"
           muted loop playsinline preload="none" aria-hidden="true"
           poster="<?php echo esc_url(home_url('/wp-content/uploads/2026/10/12.jpg')); ?>">
      <source src="<?php echo esc_url(home_url('/wp-content/uploads/2026/10/web-3-720.mp4')); ?>" type="video/mp4" media="(max-width: 767px)">
      <source src="<?php echo esc_url(home_url('/wp-content/uploads/2026/10/web-3.mp4')); ?>" type="video/mp4">
    </video>
    <div class="cta-video-shade absolute inset-0" aria-hidden="true"></div>
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 60%;mask-size:auto 60%;"></div>
    <div class="relative max-w-site mx-auto px-4 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-5 reveal">
        <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember">Let's Engineer Your Next Project</p>
        <h2 class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight [overflow-wrap:anywhere]">
          <?php echo omega_accent('Every Great Home Begins With Structural Confidence.'); ?>
        </h2>
        <p class="mt-6 text-base leading-relaxed text-white/85">
          Tell us about your project and our engineering team will follow up within one business day.
        </p>
        <p class="mt-6 text-sm text-white/75">
          Prefer to talk it through?
          <a href="tel:+17609867177" class="ml-1 font-display font-semibold text-white hover:text-ember transition-colors">(760) 986-7177</a>
        </p>
        <p class="mt-2 text-xs text-white/60">No sales scripts. Your inquiry goes to the engineering team.</p>
      </div>
      <div class="lg:col-span-6 lg:col-start-7 reveal">
        <div class="form-chip form-chip--glass p-7 lg:p-9">
          <div class="js-contact-form"
               data-variant="full"
               data-ajax="<?php echo esc_url(admin_url('admin-ajax.php')); ?>"
               data-nonce="<?php echo esc_attr(wp_create_nonce('omega_contact')); ?>"></div>
        </div>
      </div>
    </div>
  </section>

</main>

<script>
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Altura real del header (React se monta async) → var --header-h
  var navMount = document.querySelector('#react-navbar');
  function setHeaderH() {
    if (navMount && window.scrollY < 60) {
      document.documentElement.style.setProperty('--header-h', navMount.getBoundingClientRect().height + 'px');
    }
  }
  setHeaderH();
  if (navMount && 'ResizeObserver' in window) {
    new ResizeObserver(setHeaderH).observe(navMount);
  }
  window.addEventListener('resize', setHeaderH);

  // Videos del hero en secuencia (1 → 2 → 3 → 4 → 1…) con fundido cruzado.
  // Dos <video> se turnan: el visible reproduce y el oculto precarga el
  // siguiente clip, así nunca se descargan todos a la vez.
  var heroWrap = document.querySelector('.js-hero-videos');
  if (heroWrap) {
    var vids = heroWrap.querySelectorAll('video');
    // Misma condición que el <source media> del primer clip
    var mobile = window.matchMedia('(max-width: 767px)').matches;
    var list = JSON.parse(heroWrap.getAttribute(mobile ? 'data-videos-mobile' : 'data-videos') || '[]');
    var current = vids[0], next = vids[1], index = 0, switching = false;
    var FADE = 1.2; // segundos de fundido (igual que la transición CSS)

    if (reduce) {
      current.pause();
      current.removeAttribute('autoplay');
    } else if (list.length > 1) {
      current.loop = false;

      var preloadNext = function () {
        var nextSrc = list[(index + 1) % list.length];
        if (next.getAttribute('src') !== nextSrc) {
          next.setAttribute('src', nextSrc);
          next.preload = 'auto';
          next.load();
        }
      };

      var swap = function () {
        if (switching) return;
        switching = true;
        next.currentTime = 0;
        var p = next.play();
        if (p && p.catch) p.catch(function () {});
        next.classList.add('is-active');
        current.classList.remove('is-active');
        index = (index + 1) % list.length;
        var old = current;
        current = next;
        next = old;
        setTimeout(function () {
          old.pause();
          switching = false;
          preloadNext();
        }, FADE * 1000);
      };

      // El siguiente clip empieza a precargar en cuanto arranca el actual
      current.addEventListener('playing', preloadNext, { once: true });
      vids.forEach(function (v) {
        v.addEventListener('timeupdate', function () {
          if (v === current && v.duration && v.duration - v.currentTime <= FADE) swap();
        });
        v.addEventListener('ended', function () { if (v === current) swap(); });
      });

      // Pausar cuando el hero no está a la vista (ahorra CPU y batería)
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          var p;
          if (entries[0].isIntersecting) { p = current.play(); if (p && p.catch) p.catch(function () {}); }
          else current.pause();
        }).observe(heroWrap);
      }
    }
  }

  // Reveals al hacer scroll
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

  // Number-tick de los stats
  var counters = document.querySelectorAll('.js-count');
  function animate(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var dur = 1400, start = null;
    var run = el._run = (el._run || 0) + 1; // cancela una animación previa si se re-dispara
    function tick(ts) {
      if (el._run !== run) return;
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
        if (e.isIntersecting && e.intersectionRatio >= 0.35) animate(e.target);
        else if (!e.isIntersecting) { e.target._run = (e.target._run || 0) + 1; e.target.textContent = '0'; }
      });
    }, { threshold: [0, 0.4] });
    counters.forEach(function (el) { co.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = parseFloat(el.getAttribute('data-count')).toFixed(parseInt(el.getAttribute('data-decimals') || '0', 10));
    });
  }
})();
</script>

<?php get_footer();