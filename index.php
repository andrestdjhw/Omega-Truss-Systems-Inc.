<?php

get_header(); ?>

<main class="max-w-4xl mx-auto px-4 py-16">
  <div class="prose max-w-full">
    <?php if (have_posts()) {
      while (have_posts()) {
        the_post(); ?>
        <article>
          <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
          <?php the_content(); ?>
        </article>
      <?php }
    } ?>
  </div>
</main>

<?php get_footer();