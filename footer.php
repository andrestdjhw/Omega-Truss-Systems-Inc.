<!-- Footer (React) -->
<div
  id="react-footer"
  data-home="<?php echo esc_url(get_home_url()); ?>"
  data-logo="<?php echo esc_url(home_url('/wp-content/uploads/2026/07/Omega_Logotipo-Horizontal-04.png')); ?>"
  data-pattern="<?php echo esc_url(home_url('/wp-content/uploads/2026/07/Omega-Elementos-de-Apoyo-01-scaled.png')); ?>"
></div>

<!-- Chatbot (React) — el mount ya está listo; se activa al importar el componente en src/index.js -->
<div id="react-chatbot"></div>

<?php wp_footer(); ?>
</body>
</html>