<?php

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

  // TODO NAP: cambiar al correo real del cliente cuando lo confirme
  $to = get_option('admin_email');

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