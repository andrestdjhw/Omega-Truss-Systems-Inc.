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