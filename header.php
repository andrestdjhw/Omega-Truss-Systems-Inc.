<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preload" href="<?php echo esc_url(get_theme_file_uri('/fonts/Gotham-Bold.otf')); ?>" as="font" type="font/otf" crossorigin>
    <link rel="preload" href="<?php echo esc_url(get_theme_file_uri('/fonts/ArticulatCF-Normal.ttf')); ?>" as="font" type="font/ttf" crossorigin>
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>

    <!-- Navbar (React) -->
    <div
      id="react-navbar"
      data-home="<?php echo esc_url(get_home_url()); ?>"
      data-logo="<?php echo esc_url(home_url('/wp-content/uploads/2026/07/Omega_Logotipo-Horizontal-04.png')); ?>"
      data-pattern="<?php echo esc_url(home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png')); ?>"
    ></div>