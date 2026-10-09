<?php

/* ============ Google Business Profile (fuente única en PHP; en JS: src/scripts/Brand.js) ============ */
// Ficha "Omega Truss System" · 72215 Woburn Ct, Thousand Palms, CA 92276
define('OMEGA_GMB_PLACE_ID', 'ChIJizbc1hDj2oAR_MSeSCkaGRU');
define('OMEGA_GMB_URL', 'https://www.google.com/maps/search/?api=1&query=Omega+Truss+System&query_place_id=' . OMEGA_GMB_PLACE_ID);
define('OMEGA_REVIEW_URL', 'https://search.google.com/local/writereview?placeid=' . OMEGA_GMB_PLACE_ID);

function omega_load_assets() {
  $js_path  = get_theme_file_path('/build/index.js');
  $css_path = get_theme_file_path('/build/index.css');

  wp_enqueue_script(
    'omega-main-js',
    get_theme_file_uri('/build/index.js'),
    array('wp-element', 'react-jsx-runtime'),
    file_exists($js_path) ? filemtime($js_path) : '1.0',
    true
  );

  wp_enqueue_style(
    'omega-main-css',
    get_theme_file_uri('/build/index.css'),
    array(),
    file_exists($css_path) ? filemtime($css_path) : '1.0'
  );
}
add_action('wp_enqueue_scripts', 'omega_load_assets');

function omega_add_support() {
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'omega_add_support');

/* ============ Contact form (React ContactForm → admin-ajax → wp_mail) ============ */
add_action('wp_ajax_omega_contact', 'omega_contact_submit');
add_action('wp_ajax_nopriv_omega_contact', 'omega_contact_submit');

function omega_contact_submit() {
  check_ajax_referer('omega_contact', 'nonce');

  // Honeypot: si viene lleno, es bot — responder éxito silencioso
  if (!empty($_POST['company_site'])) {
    wp_send_json_success();
  }

  $name     = sanitize_text_field(wp_unslash($_POST['name'] ?? ''));
  $email    = sanitize_email(wp_unslash($_POST['email'] ?? ''));
  $company  = sanitize_text_field(wp_unslash($_POST['company'] ?? ''));
  $role     = sanitize_text_field(wp_unslash($_POST['role'] ?? ''));
  $phone    = sanitize_text_field(wp_unslash($_POST['phone'] ?? ''));
  $location = sanitize_text_field(wp_unslash($_POST['location'] ?? ''));
  $type     = sanitize_text_field(wp_unslash($_POST['type'] ?? ''));
  $timeline = sanitize_text_field(wp_unslash($_POST['timeline'] ?? ''));
  $message  = sanitize_textarea_field(wp_unslash($_POST['message'] ?? ''));

  if ($name === '' || !is_email($email)) {
    wp_send_json_error(array('message' => 'invalid'));
  }

  // Destinatario fijo del formulario (no depende del admin_email de WordPress)
  $to = 'info@omegatrusssystems.com';

  $subject = 'New project consultation — ' . $name . ($company ? ' (' . $company . ')' : '');
  $lines = array(
    'Name: ' . $name,
    'Company: ' . $company,
    'Role: ' . $role,
    'Email: ' . $email,
    'Phone: ' . $phone,
    'Project location: ' . $location,
    'Project type: ' . $type,
    'Target timeline: ' . $timeline,
    '',
    'Message:',
    $message,
  );
  $headers = array('Reply-To: ' . $name . ' <' . $email . '>');

  $sent = wp_mail($to, $subject, implode("\n", $lines), $headers);

  if ($sent) {
    wp_send_json_success();
  }
  wp_send_json_error(array('message' => 'mail_failed'));
}
// Servicios retirados (Installation y Roof Sheathing & Project Support no son
// parte del scope de Omega): redirige las URLs antiguas a Structural Solutions.
function omega_redirect_retired_services() {
  if (is_page(array('installation', 'roof-sheathing-project-support'))) {
    wp_safe_redirect(home_url('/structural-solutions/'), 301);
    exit;
  }
}
add_action('template_redirect', 'omega_redirect_retired_services');

/* ============ Helpers de diseño ============ */

// Íconos de línea (trazo currentColor). Base: Lucide (ISC); "roof" y "floor" propios.
function omega_icon($name, $class = 'h-6 w-6') {
  $paths = array(
    'roof'    => '<path d="M2 17 12 6l10 11Z"/><path d="M12 6v11"/><path d="m7 11.5 5 5.5 5-5.5"/>',
    'floor'   => '<path d="M2 8h20M2 16h20M2 8v8M22 8v8"/><path d="m2 16 4-8 4 8 4-8 4 8 4-8"/>',
    'cad'     => '<rect x="3" y="3.5" width="18" height="12.5" rx="1.5"/><path d="M8 20.5h8M12 16v4.5"/><path d="m7 13 5-5.5 5 5.5Z"/>',
    'gear'    => '<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2M12 22v-2M17 20.66l-1-1.73M11 10.27 7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2M20.66 7l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73M11 13.73l-4 6.93"/>',
    'compass' => '<path d="m12.99 6.74 1.93 3.44"/><path d="M19.14 12a10 10 0 0 1-14.27 0"/><path d="m21 21-2.16-3.84"/><path d="m3 21 8.02-14.26"/><circle cx="12" cy="5" r="2"/>',
    'cube'    => '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    'shield'  => '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    'truck'   => '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  );
  if (!isset($paths[$name])) {
    return '';
  }
  return '<svg class="' . esc_attr($class) . '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' . $paths[$name] . '</svg>';
}

// Titulares con el punto final en ember ("Built For What's Next.")
function omega_accent($text) {
  $html = esc_html($text);
  if (substr($text, -1) === '.') {
    $html = substr($html, 0, -1) . '<span class="text-ember">.</span>';
  }
  return $html;
}

// Foto de fondo para una sección (la <section> debe ser "relative overflow-hidden").
// $tone 'dark' = velo navy para texto blanco · 'light' = velo crema para texto navy.
// Las capas van como hijos directos de la sección: Motion.js les aplica el parallax.
// La foto carga diferida (data-bg → .js-lazy-bg en Motion.js) al acercarse al viewport.
function omega_photo_bg($file, $tone = 'dark') {
  $url  = home_url('/wp-content/uploads/2026/10/' . $file);
  $veil = $tone === 'light' ? 'bg-cream/90' : 'bg-navy/80';
  return '<div class="js-lazy-bg absolute inset-0 bg-cover bg-center" data-bg="' . esc_url($url) . '" aria-hidden="true"></div>'
       . '<div class="absolute inset-0 ' . $veil . '" aria-hidden="true"></div>';
}

// Titular con entrada palabra por palabra, renderizado en el servidor: anima solo
// con CSS desde el primer pintado (no espera al JS → mejor LCP). Lectores de
// pantalla leen el texto completo; las palabras animadas van aria-hidden.
// $i comparte el contador entre llamadas (titulares en dos tonos).
function omega_split_words($text, &$i) {
  $out = array();
  foreach (preg_split('/\s+/', trim($text)) as $word) {
    $out[] = '<span class="split-word"><span class="split-word-in" style="--i:' . $i++ . '">' . esc_html($word) . '</span></span>';
  }
  return implode(' ', $out);
}
function omega_headline($text) {
  $i = 0;
  return '<span class="sr-only">' . esc_html($text) . '</span><span aria-hidden="true">' . omega_split_words($text, $i) . '</span>';
}

/* ============ Rendimiento: <head> más liviano ============ */
// El sitio no usa emojis de WordPress, oEmbed, XML-RPC/RSD ni Windows Live Writer.
add_action('init', function () {
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('wp_print_styles', 'print_emoji_styles');
  remove_action('admin_print_scripts', 'print_emoji_detection_script');
  remove_action('admin_print_styles', 'print_emoji_styles');
  remove_filter('the_content_feed', 'wp_staticize_emoji');
  remove_filter('comment_text_rss', 'wp_staticize_emoji');
  remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
  add_filter('emoji_svg_url', '__return_false');

  remove_action('wp_head', 'wp_oembed_add_discovery_links');
  remove_action('wp_head', 'rsd_link');
  remove_action('wp_head', 'wlwmanifest_link');
  remove_action('wp_head', 'wp_generator');
  remove_action('wp_head', 'wp_shortlink_wp_head');
  remove_action('wp_head', 'rest_output_link_wp_head');
});

// Fuera los estilos de bloques de Gutenberg: el tema no usa el editor de bloques
// en el front (solo single.php imprime the_content, y ahí se conservan).
add_action('wp_enqueue_scripts', function () {
  if (!is_singular('post')) {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
    wp_dequeue_style('classic-theme-styles');
  }
}, 100);
