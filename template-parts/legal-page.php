<?php
/*
  Layout compartido de páginas legales (Privacy Policy, Terms and Conditions).
  Uso: get_template_part('template-parts/legal-page', null, $legal);
  $args = array(
    'eyebrow'  => 'Legal',
    'title'    => 'Privacy Policy',
    'updated'  => 'October 1, 2026',
    'intro'    => 'Párrafo introductorio (HTML permitido)',
    'sections' => array( array('id' => 'ancla', 'heading' => 'Título', 'body' => 'HTML') ),
  );
*/

$legal       = $args;
$pattern_url = home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png');
?>

<main id="main">

  <!-- ============ HERO ============ -->
  <section class="relative overflow-hidden bg-navy text-white">
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true"
         style="background-color:rgba(255,255,255,0.05);-webkit-mask-image:url('<?php echo esc_url($pattern_url); ?>');mask-image:url('<?php echo esc_url($pattern_url); ?>');-webkit-mask-repeat:repeat;mask-repeat:repeat;-webkit-mask-size:auto 55%;mask-size:auto 55%;"></div>
    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <p class="font-display text-xs font-semibold uppercase tracking-[0.22em] text-ember"><?php echo esc_html($legal['eyebrow']); ?></p>
      <h1 class="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] [overflow-wrap:anywhere]">
        <?php echo esc_html($legal['title']); ?>
      </h1>
      <p class="mt-6 text-sm text-white/60">Last updated: <?php echo esc_html($legal['updated']); ?></p>
    </div>
  </section>

  <!-- ============ CONTENIDO (índice lateral + texto) ============ -->
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

      <aside class="lg:col-span-3">
        <nav class="lg:sticky lg:top-32" aria-label="On this page">
          <p class="font-display text-xs font-semibold uppercase tracking-[0.18em] text-navy/50">On this page</p>
          <ol class="mt-4 space-y-2 border-l border-navy/10">
            <?php foreach ($legal['sections'] as $i => $sec) : ?>
              <li>
                <a href="#<?php echo esc_attr($sec['id']); ?>"
                   class="-ml-px block border-l-2 border-transparent pl-4 text-sm leading-snug text-navy/65 hover:border-ember hover:text-navy transition-colors">
                  <?php echo esc_html(($i + 1) . '. ' . $sec['heading']); ?>
                </a>
              </li>
            <?php endforeach; ?>
          </ol>
        </nav>
      </aside>

      <article class="lg:col-span-8 lg:col-start-5 min-w-0 prose prose-lg max-w-none text-navy/80
                      prose-headings:font-display prose-headings:text-navy prose-headings:scroll-mt-32
                      prose-h2:text-2xl prose-h2:mt-14 prose-h3:text-lg
                      prose-a:text-ember prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-navy prose-li:marker:text-ember">
        <div class="lead text-navy/80"><?php echo wp_kses_post($legal['intro']); ?></div>

        <?php foreach ($legal['sections'] as $i => $sec) : ?>
          <h2 id="<?php echo esc_attr($sec['id']); ?>"><?php echo esc_html(($i + 1) . '. ' . $sec['heading']); ?></h2>
          <?php echo wp_kses_post($sec['body']); ?>
        <?php endforeach; ?>
      </article>

    </div>
  </section>

</main>
