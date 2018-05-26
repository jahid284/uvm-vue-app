<template>
  <div class="featured-story__dots"  aria-hidden="true">
    
    <ul class="featured-story__dots-list">
      <li v-for="(item,index) in featuredStories.length" class="featured-story__dots-item" @click="jumpNow('#featured-story--'+index)"></li>
    </ul>
  </div>
</template>
<script>
  import ScrollMagic from 'scrollmagic';

  import jump from 'jump.js'
  export default {
    props: ['featuredStories'],
    methods: {
      jumpNow(el) {
        jump(el)
      }
    },
    mounted() {

      const featuredStoryWrapper = document.querySelector('.featured-story__all')
      new ScrollMagic.Scene({triggerElement: featuredStoryWrapper, triggerHook: 0.5, duration: featuredStoryWrapper.offsetHeight })
              .setClassToggle(this.$el, "featured-story__dots--visible")
              .addTo(this.$store.state.scrollMagicController)

      const featuredStoriesElements = document.querySelectorAll('.featured-story')
      const featuredStoriesDots = document.querySelectorAll('.featured-story__dots-item')

      Array.from(featuredStoriesElements, (el, index) => {
        new ScrollMagic.Scene({triggerElement: el, triggerHook: 0.5, duration: el.offsetHeight })
                .setClassToggle(featuredStoriesDots[index], "featured-story__dots-item--active")
                .addTo(this.$store.state.scrollMagicController)

      })

    }
    
  }
</script>