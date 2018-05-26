<template>
  <main class="faculty">
    <stories-hero></stories-hero>
    <stories-posts></stories-posts>
    <stories-search></stories-search>
  </main>
</template>
<script>
    import StoriesHero from '../components/StoriesHero.vue'
    import StoriesPosts from '../components/StoriesPosts.vue'
    import StoriesSearch from '../components/StoriesSearch.vue'

    export default {
      components: {
        StoriesHero,
        StoriesPosts,
        StoriesSearch
      }
    }
</script>
