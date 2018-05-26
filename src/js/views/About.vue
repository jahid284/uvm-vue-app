<template>
  <main class="about">
    <about-hero></about-hero>
    <about-numbers></about-numbers>
  </main>
</template>
<script>
    import AboutHero from '../components/AboutHero.vue'
    import AboutNumbers from '../components/AboutNumbers.vue'

    export default {
      components: {
        AboutHero,
        AboutNumbers
      }
    }
</script>
